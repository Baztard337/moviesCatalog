import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="App">
      <Link to="/add">
        <button className="btn btn-outline-light me-2">Add</button>
      </Link>
      <Link to="/delete">
        <button className="btn btn-outline-light me-2">Delete</button>
      </Link>
      <Link to="/search">
        <button className="btn btn-outline-light me-2">Search</button>
      </Link>
      <Link to="/import">
        <button className="btn btn-outline-light me-2">Import</button>
      </Link>
      <Link to="/info">
        <button className="btn btn-outline-light">Movie Info</button>
      </Link>
    </div>
  );
};

export default HomePage;
