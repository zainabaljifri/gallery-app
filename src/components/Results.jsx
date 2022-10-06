import React from "react";

export default function Results(props) {
    return (
        <div className="card-list">
            {(props.array).map((pic) => (
                <img
                    key={pic.id}
                    className="card--image"
                    alt={pic.tags}
                    src={pic.webformatURL}
                    width="100%"
                    height="100%"
                />
            ))}
        </div>
    );
}
