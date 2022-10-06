import React ,{useState} from "react";

export default function QueryInput(props) {
    return (
            <div className="input-group">
            <div className="search">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            <input
                type="text"
                id="input"
                name="query"
                className="input"
                placeholder='Try "dog" or "apple"'
                value={props.value}
                onChange={props.onChange}
            />


            </div>
            <button className="button" id="clear-btn" onClick={props.onClick} hidden={(props.value=='') ? 'hidden' : ''}><i className="fa-solid fa-xmark"></i></button>
            </div>

    );
}
