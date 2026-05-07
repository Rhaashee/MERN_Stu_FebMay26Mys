// React Event Object
// What it is ? 
// React automatically passes an event object to  event handlers
// This Object contains details about the event
// Eg: input field: event.target.value
// event: info about the input change
// event.target: The HTML input element
// event.target.value : The current text typed by the user
import {useState } from "react";

export function EventObject(){
    const [text,setText] = useState('');
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>Event Objects</h2>
            <input type="text" value={text} onChange={handleChange} placeholder = "Type Something"/>
            <p>You Typed : {text}</p>
        </section>
    );
}