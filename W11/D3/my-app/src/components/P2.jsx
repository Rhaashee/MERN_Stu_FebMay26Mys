import { useState , useEffect } from "react";

// useEffect Lifecycle 
// No array : every render 
// [] Empty array : Render once
// [state] : on mount + when state chnages

export function UseEffectLifCycle(){
    const [count,setCount] = useState();

    // 1. No dependency array
    useEffect(()=>{
        console.log("Effect 1 : runs after every render");
    });

    // 2. Empty dependency array
    // This runs only once after the component mounts.
    useEffect(()=>{
        console.log("Effect 2 : runs only once after mount");
    },[]);

    // 3. Dependency based effect 
    useEffect(()=>{
        console.log("Effect 3 : Count changed to",count);
        return()=>{
            console.log("Cleanup for effect 3:Previous count: ",count);
        };
    },[count]);

    // Event Handler
    function handleIncrement(){
        setCount((prevCount)=>prevCount+1);
    }
    function handleReset() {
        setCount(0);
    }return(
        <section>
            <h2>useEffect LifeCycle</h2>
            <p>Count : {count}</p>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleReset}>RESET</button>
        </section>
    );
}