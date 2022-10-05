import React, { useState } from "react";
import QueryInput from "./QueryInput";
import Results from "./Results";
import Heading from "./Heading";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const Access_Key = 'BMHgcnpJzN0JOSOwbmfG7jRNqiGE2f62aISEIS2XVZE';
  const Access_Key2 = '30343985-5d8c3a7a0f500ff0d60685014';
  const fetchRequest = async (e) => {
    e.preventDefault();
    const data = await fetch(
      // `https://pixabay.com/api/?key=${Access_Key2}&q=${query}&per_page=50`
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}&per_page=30`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    // setPics(dataJ.hits);
    setPics(result);
  };
  
  return (
    <>
    <QueryInput onSubmit={fetchRequest} value={query} onChange={(e) => setQuery(e.target.value)}/>
      <Results array={pics}/>
    </>
  );
}
