import React from "react";

const fName = "Sujin";
const lName = "S R";
const year = new Date().getFullYear();

const App = () => {
    return (
        <>
        <h1>Created By {`${fName} ${lName}`}!</h1>
        <p>Copyright:{year}</p>
        </>
    )
}

export default App
