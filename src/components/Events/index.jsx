import { useState } from "react";
import EvenItem from "./components/EventItem";
import eventsJSON from '../../data/events.json';



const Events = () => {

    const[data] = useState(eventsJSON);
    const { _embedded : {events}} = data;

    const handleEventItemClick = (id) => {
        console.log('Evento clickeado', id)
    };


    return(
        <div>
            Eventos
            {events.map((evenItem) => (
            <EvenItem  
                key={`event-item-${evenItem.id}`} 
                name = {evenItem.name}
                info = {evenItem.info}
                image = {evenItem.images[0].url}
                onEventClick={handleEventItemClick}
                id = {evenItem.id}
                />
        ))}
        </div>
    );
};


export default Events;