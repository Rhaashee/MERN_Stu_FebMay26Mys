import { Component } from "react"

export class ClassComponentBasics extends Component {
    // 1. Class extends React.Component
    // State, lifecycle methods, props, setState() 

    render(){
        // render(): Returns JSX describing what to show 
        // called whenever component needs to update
        return(
            <>
                <h2>Class Componnet</h2>
                <p>Class Components use render() and lifecycle methods.</p>
            </>
        )
    }
}