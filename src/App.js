import React from "react";

const fName = "Sujin";
const lName = "S R";
const year = new Date().getFullYear();

const customStyle = {
    color:"blue",
    fontSize: "50px",
    border: "2px solid black"
}

var day = "Good Morning"
var date = new Date();
var hour = date.getHours();

if(hour < 12){

    day = "Good Morning"
    customStyle.color = "red"
}else if(hour < 18){

    day = "Good Afternoon"
    customStyle.color = "green"
}else{

    day = "Good Evening"
    customStyle.color = "blue"
}


const App = () => {
    return (
        <>
        <h1 className="heading" contentEditable="true" spellCheck="false">Created By {`${fName} ${lName}`}!</h1>
        <p>Copyright:{year}</p>
        <h1 style={customStyle}>{day}</h1>

        </>
    )
}

export default App
