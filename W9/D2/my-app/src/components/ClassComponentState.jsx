// import {React} from "react";

import { Component } from "react";

export class ClassComponentState extends Component{
    // 1. Constructor : runs once when component is first created 
    constructor(props){  // Props is a name given to the property
        super(props); // Calls parent constructor first 
        this.state = { count:0 }; // State is going to be here and stays evn after the re-renders
    }

    // 2. Event Handler : arrow function to handle 'this' binding
    increment = () => {
        this.setState((prevStates )=>({ // setState is a keyword and prevState is name given (user defined function)
            count : prevStates.count + 1
        }));
    };

    // 3. Render : State/props change
    render(){
        console.log("render() called");
        return(
            <div>
                <h3>Class Component State</h3>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}