
import React from 'react';
import '../App.css';
import Heading from './Heading';
import Footer from './Footer';
import SearchPhotos from "./SearchPhotos"

function App() {
  return (
    <>
      <Heading />
      <div className="App">
        <div className="container">
          {/* <h1 className="title">Gallery App</h1> */}
          <SearchPhotos />
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default App;