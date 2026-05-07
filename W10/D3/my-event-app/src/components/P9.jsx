// Stop Event Propagation
// event.stopPropagation() - Stops the event from bubbling to the parent elements;Useful when child and parent both have event handlers 

export function EventObj(){
    const handleParentClick = (event) => {
        alert(`Parent clicked target : ${event.target.targetName} currentTarget : ${event.currentTarget.tagName}`);
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
        alert(`Child clicked (propagation stopped) target : ${event.target.targetName} currentTarget : ${event.currentTarget.tagName}`);
    };

    //form submit handler
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert("Form submitted safely by preventing default refresh");
    };

    const handleBoxClick = (event) => {
        alert(`Box clicked target : ${event.target.targetName} currentTarget : ${event.currentTarget.tagName}`);
    };
    return(
        <section onClick={handleParentClick} style={{padding:'20px', backgroundColor:'plum'}}>
            <h2>Event Object</h2>

            <button onClick={handleChildClick}>CHILD BUTTON</button>
            <button onClick={handleSubmit}>SUBMIT FORM</button>

            <div onClick={handleBoxClick} style={{padding:'20px', backgroundColor:'purple'}}>
                <span style={{padding:'20px', backgroundColor:'pink' ,display:'inline-block'}}>Inner Span</span>
            </div>
        </section>
    )
}