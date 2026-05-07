// Synthetic event vs Native DOM events 
// Synthetic event : A wrapper created by React around the browser's native event. Gives consistent API across browsers. Works similarly to native DOM events. Still alows access to the original browser events via event.nativeEvent

// Why doed React use it ? 
// To make event handling behave consistently
// To simplify cross-browser differneces
// To integrate smoothly with React's event system

// How Synthetic event works ?
// Component Renders:  A button appears on the screen ;  A button appears on the screen
// USer clicks the button : Browser creates a native click event ; React wraps that native event in a syntheticEvent ; React passes the SyntheticEvent to handleClick

// event refers to the SyntheticEvent
// event.target gives us the HTML elements 

