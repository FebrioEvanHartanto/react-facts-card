import React from "react"
import ReactLogo from "../images/React-icon.png"

function Navbar(){
    return(
        <nav>
            <img src={ReactLogo} alt="React Logo" width="50px"/>
            <h2>React Facts</h2> 
            <h3>React Course - Project 1</h3>
            
            
        </nav>
    )
}

export default Navbar