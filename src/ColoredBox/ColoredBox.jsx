import React from "react";
import "./coloredBox.css";



export default function ColoredBox(props){

    const divStyle = {
        backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})`
    }

    return(
        <div className="color-box" style= {divStyle}>
            <span>R: {props.r} G: {props.g} B: {props.b}</span>
        </div>
    )
}