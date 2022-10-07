import React from "react";

export default function Results(props) {
    return (
        <div className="card"><img
            className="card--image"
            alt={props.description}
            src={props.src}
            width="50%"
            height="50%"
        /></div>
    )
}
