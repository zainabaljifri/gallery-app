import React from "react";

export default function Results(props) {
    return (
        <div className="card-list">
            {(props.array).map((pic) => (
                <div className="card" key={pic.id}>
                    <img
                        className="card--image"
                        alt={pic.alt_description}
                        src={pic.urls.full}
                        width="50%"
                        height="50%"
                    />
                </div>
            ))}
        </div>
    );
}
