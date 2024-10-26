import React from 'react';
import { color, motion } from 'framer-motion';
import '../EventModal.css';

function EventModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} >
      {/* motion.div for animation */}
      <motion.div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <button  onClick={onClose} className="close-button" style={{right:1,top:2,color:'black'}} >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
          {/* x icons for remove */}
        </button>
        <img src={event.image} alt={event.name} className='img'/>
        <h2 className='clr' style={{color:"red"}}>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
      </motion.div>
    </div>
  );
}

export default EventModal;