import React from "react";
import {motion} from 'framer-motion'

function EventCard({event,onClick}){
    return (
        <motion.div
            className="event-card"
            onClick={onclick}
            whileHover={{scale:1.05}}
        >
            <img src={event.image} alt={event.name}/>
            <h3>{event.name}</h3>
            <p>{event.data}</p>
            <p>{event.location}</p>

        </motion.div>
    )
}
export default EventCard