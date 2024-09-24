import { useState } from "react"
import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

function ChangeName()
{
    var [myname,setmyname] = useState(0)

    function change()
    {
        setmyname(
            Math.floor(Math.random()*100+1)
        )
    }

    return(
        <div className="container">
            <h1 className="title">Number</h1>
            <h1>{myname}</h1>
            <button className="btn" onClick={change}>Change</button>
        </div>
    )
}

root.render(<ChangeName></ChangeName>)