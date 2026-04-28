// import React from 'react';

function Welcome(props){
    // Child Component : ruable UI
    return(
        <p>Hello, {props.name}</p>
    );
}

// Parent class 
export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing 'Rhaashee' as prop and Welcome function receives is as {name : "Rhaashee"}*/}
            <Welcome name = "Rhaashee"/>

            {/* We are passing 'Developer' as prop and Welcome function receives is as {name : "Developer"}*/}
            <Welcome name = "Developer"/>
        </div>
    )
}