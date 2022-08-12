import { BiCalendar, BiTrash } from 'react-icons/bi'
import Search from './components/search'
import AddAppointment from './components/addAppointments'
import AppointmentInfo from './components/appointmentInfo'
import { useState, useEffect, useCallback } from 'react'

function App() {

  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        setAppointmentList(data)
      })
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className='text-5xl mb-3'>
        <BiCalendar className='inline-block text-red-400 align-top'/>
        Your Appointments
      </h1>
      <AddAppointment />
      <Search />

      <ul className='divide-y divide-gray-200'>
        {
          appointmentList.map(appointment => (
              <AppointmentInfo key={appointment.Id} appointment={appointment}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
