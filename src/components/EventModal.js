import React from 'react';
import { color, motion } from 'framer-motion';
import '../EventModal.css';

function EventModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} >
      <motion.div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <button  onClick={onClose} className="close-button" style={{right:1,top:2,color:'black'}} >X</button>
        <img src={event.image} alt={event.name} className='img'/>
        <h2 className='clr' style={{color:"red"}}>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
      </motion.div>
    </div>
  );
}

export default EventModal;
