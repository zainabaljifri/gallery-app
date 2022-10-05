import React from "react";

export default function QueryInput(props) {
    return (
        <form className="form" onSubmit={props.onSubmit}>
            <label className="label" htmlFor="query">📷</label>
            <input
                type="text"
                name="query"
                className="input"
                placeholder='Try "dog" or "apple"'
                value={props.value}
                onChange={props.onChange}
            />
            <button type="submit" className="button">Search</button>
        </form>
    );
}
