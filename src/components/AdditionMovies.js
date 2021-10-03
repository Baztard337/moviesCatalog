import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../redux/actions";

const AdditionMovies = () => {
  let body = {};
  const dispatch = useDispatch();
  const addedMovie = useSelector((state) => state.addedMovie);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [format, setFormat] = useState("");
  const [actors, setActors] = useState("");

  const addingMovie = () => {
    body = {
      title: title,
      year: year,
      format: format,
      actors: [actors],
    };

    dispatch(addMovie(body));
  };

  return (
    <div>
      <input
        className="me-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      ></input>
      <input
        className="me-2"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      ></input>
      <input
        className="me-2"
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        placeholder="Format"
      ></input>
      <input
        className="me-2"
        value={actors}
        onChange={(e) => setActors(e.target.value)}
        placeholder="Actors"
      ></input>
      <button className="btn btn-outline-light mb-1" onClick={addingMovie}>
        Add
      </button>
      {addedMovie && Object.keys(addedMovie).length > 0 ? (
        <h2>Successfully Added</h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdditionMovies;
