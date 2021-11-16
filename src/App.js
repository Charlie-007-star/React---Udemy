import React from "react";

const fName = "Sujin";
const lName = "S R";
const year = new Date().getFullYear();

const App = () => {
    return (
        <>
        <h1 className="heading" contentEditable="true" spellCheck="false">Created By {`${fName} ${lName}`}!</h1>
        <p>Copyright:{year}</p>
        <h1>My Fav Foods</h1>
        <ul className="heading">
            <li>Bacon</li>
            <li>Steak</li>
            <li>Shawarma</li>
        </ul>
        </>
    )
}

export default App
