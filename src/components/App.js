import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  function Header() {
    return (
      <header>
        <img src={blogData.image} alt="blog logo" />
        <h1>{blogData.name}</h1>
        <p>{blogData.about}</p>
      </header>
    );
  }
  return (
    <div className="App">
     {Header()}
    </div>
  );
}

export default App;
