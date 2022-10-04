import React, { useState } from "react";
// import { createApi } from 'unsplash-js';

export default function SearchPhotos() {

  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  // const unsplash = createApi({ accessKey: 'BMHgcnpJzN0JOSOwbmfG7jRNqiGE2f62aISEIS2XVZE' });

  // const searchPhotos = async (e) => {
  //   e.preventDefault();
  //   unsplash.search.getPhotos({
  //     query: query
  //   }).then(result => { 
  //     console.log(result); 
  //     setPics(result.response.results); 
  //   })

  // };
  const Access_Key = 'BMHgcnpJzN0JOSOwbmfG7jRNqiGE2f62aISEIS2XVZE';
  // const Access_Key2 = 'pixabay';
  const fetchRequest = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}&per_page=20`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    console.log(result); 
    setPics(result);
  };
  

  return (
    <>
      <form className="form" onSubmit={fetchRequest}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </>
  );
}
