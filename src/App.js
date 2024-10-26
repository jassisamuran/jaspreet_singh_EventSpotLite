
import {useState} from 'react'
import './App.css';
import { events } from './components/data';
// raw file for data
import EventModal from './components/EventModal'
import EventCard from './components/EventCard';
function App() {
  const [search,setSearch]=useState('')
  const[selectedEvent,setSelectedEvent]=useState('')
  // states for kepting data

  const filteredEvents=events.filter(event=>
    event.name.toLowerCase().includes(search.toLowerCase())  ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );
  // filtering logic based on name and location

  return (
    <div className='Appp'>
      <header className='app-header'>
        <h1>EventSpot Lite</h1>
        <input 
          type='text'
          placeholder='Seach events'
          onChange={(e)=>setSearch(e.target.value)}
          />
      </header>
      {/* this is used for showing events in list with help of event card  and map is used to list all the events*/}
      <div className='event-list'>
        {filteredEvents.map(event=>(
          <EventCard 
            key={event.id}
            event={event}
            onClick={()=>setSelectedEvent(event)}
          />
        ))}
      </div>
      {/* if selected event is not null then show in pop up open if null nothing is shown because && is used  */}
      {selectedEvent &&(
        <EventModal
          event={selectedEvent}
          onClose={()=>setSelectedEvent(null)}/>
      )}
    </div>
  );
}

export default App;
