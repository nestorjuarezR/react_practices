import { useState } from "react";
import EvenItem from "./components/EventItem";
import eventsJSON from '../../data/events.json';



const Events = ({searchTerm}) => {

    const[data] = useState(eventsJSON);
    const { _embedded : {events}} = data;

    const handleEventItemClick = (id) => {
        console.log('Evento clickeado', id)
    };


    const renderEvents = () =>{

        let eventsFiltered = events;

        if (searchTerm.length > 0){
          eventsFiltered = eventsFiltered.filter((item) => 
            item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));  
        }

        return eventsFiltered.map((evenItem) => (
            <EvenItem  
                key={`event-item-${evenItem.id}`} 
                name = {evenItem.name}
                info = {evenItem.info}
                image = {evenItem.images[0].url}
                onEventClick={handleEventItemClick}
                id = {evenItem.id}
                />
        ));
    };

    return(
        <div>
            Eventos
            {renderEvents()}
        </div>
    );
};


export default Events;