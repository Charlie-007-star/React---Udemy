import React from "react";
import Header from "./Header";
import Time from "./Time"


let Card = (props) =>{
    return (
        <>
        <h2>{props.name}</h2>
        {/* <img src={props.img} alt="random-pic" />
        <p>{props.tel}</p>
        <p>{props.email}</p> */}
        </>
    )

}


const App = () => {
    return (
        <>
        <Header />
        <Time />
        <Card  name="Beyonce" />
        </>
    )
}

export default App
