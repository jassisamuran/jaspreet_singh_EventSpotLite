import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import { events } from './components/data';
import EventModal from './components/EventModal'
import EventCard from './components/EventCard';
function App() {
  const [search,setSearch]=useState('')
  const[selectedEvent,setSelectedEvent]=useState('')
  console.log(selectedEvent)

  const filteredEvents=events.filter(event=>
    event.name.toLowerCase().includes(search.toLowerCase())  ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

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
      <div className='event-list'>
        {filteredEvents.map(event=>(
          <EventCard 
            key={event.id}
            event={event}
            onClick={()=>setSelectedEvent(event)}
          />
        ))}
      </div>
      {selectedEvent &&(
        <EventModal
          event={selectedEvent}
          onClose={()=>setSelectedEvent(null)}/>
      )}
    </div>
  );
}

export default App;
