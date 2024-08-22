import { useState } from "react";
import EvenItem from "./components/EventItem";
import eventsJSON from '../../data/events.json';



const Events = () => {

    const[data] = useState(eventsJSON);
    const { _embedded : {events}} = data;



    return(
        <div>
            Eventos
            {events.map((evenItem) => (
            <EvenItem  
                key={'event-item-$(eventItem.id'} 
                name = {evenItem.name}
                info = {evenItem.info}
                image = {evenItem.images[0].url}
                />
        ))}
        </div>
    );
};


export default Events;