// Props destructuring
// A syntax of ES6 approach that allows us to unpack properties from “props”
// Prop object directly into its values

// import { React } from "react"

function UserProfile({username,skill}){
    return(
        <div>
            <p>User : {username}</p>
            <p>Skill : {skill}</p>
        </div>
    )
}

// Parent Component 
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile username="Rhaashee" skill="MERN" />
        </>
    );
}