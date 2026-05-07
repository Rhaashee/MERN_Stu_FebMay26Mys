// Passing arguements to event Handlers
import {useState } from "react";

export function PassingArguements(){
    const [message, setMessage] = useState('No message yet');
    // Event handler function
    const handleClick = (msg) => {
        setMessage(msg);
    };
    return(
        <section>
            <h2>Passing Arguement</h2>
            <button onClick={() => handleClick("Namste")}>Click Me</button>
            <p>Message: {message}</p>
        </section>
    )
}