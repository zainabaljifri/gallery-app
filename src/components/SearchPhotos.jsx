import React, { useState, useEffect } from "react";
import QueryInput from "./QueryInput";
import Results from "./Results";
import { Pagination } from "@mui/material";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handleQueryClear = () => {
    setQuery('');
    setPage(1);
  };
  const handleQueryChange = (e) => {
    setQuery(e.target.value)
    setPage(1);
  };
  const handlePageCount = (json) => {
    setPics(json.hits);
    setPageCount(Math.round(json.totalHits/10));
    console.log(Math.round(json.totalHits/10));
  };
  // const Access_Key1 = 'BMHgcnpJzN0JOSOwbmfG7jRNqiGE2f62aISEIS2XVZE';
  const Access_Key2 = '30343985-5d8c3a7a0f500ff0d60685014'

  useEffect(() => {
    fetch(
      // `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key1}&per_page=10`
      `https://pixabay.com/api/?key=${Access_Key2}&q=${query}&per_page=10&page=${page}`
    )
      .then((response) => response.json())
      // .then((json) => setPics(json.results));
      .then((json) => handlePageCount(json))
      // .then((json) =>  setPageCount(json.totalHits/10));
    //   console.log(pics.length);
    console.log(page);
    console.log(query);
  }, [page, query]);
  return (
    <>
      <QueryInput value={query} onClick={handleQueryClear} onChange={handleQueryChange} />
      <Results array={pics} />
      <Pagination className="pagination" count={pageCount} page={page} onChange={handlePageChange} size="small"/>
    </>
  );
}
