import React from "react";
import {motion} from 'framer-motion'
// import '../EventCard.css'
function EventCard({event,onClick}){
    return (
        // used motion.div for animation and by using event handlers 
        <motion.div
            className="event-card"
            onClick={onClick}
            whileHover={{scale:1.05}}
        >
            <img  src={event.image} alt={event.name} style={{height:'300px'}}/>
            <h3>{event.name}</h3>
            <p>{event.data}</p>
            <p>{event.location}</p>

        </motion.div>
        
    
    )
}
export default EventCard