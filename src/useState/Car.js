import {useState} from "react";

import { ReactDOM } from "react";

export default function Car(){
    const[car,setCar] = useState({
        brand:"Ford",
        model:"Mustand",
        year:"1964",
        color:"red"
    })
    
    return(
<div>
    <h1>My {car.brand}</h1>
    <p>
        it is a a {car.color} {car.model} from {car.year}
    </p>
</div>
    )
}