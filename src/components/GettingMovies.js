import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/actions";

const GettingMovie = () => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((state) => state.movieInfo);
  const [id, setId] = useState("");
  let actorsName = [];

  const showMovie = () => {
    dispatch(getMovie(id));
  };

  if (movieInfo && movieInfo.actors) {
    actorsName = movieInfo.actors.map((actor) => actor.name);
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="me-2"
          placeholder="ID"
        ></input>
        <button className="btn btn-outline-light" onClick={showMovie}>
          Get
        </button>
      </div>
      {movieInfo && movieInfo.actors ? (
        <table className="table text-light table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Format</th>
              <th scope="col">Actors</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            <tr>
              <td>{movieInfo.id}</td>
              <td>{movieInfo.title}</td>
              <td>{movieInfo.year}</td>
              <td>{movieInfo.format}</td>
              <td>
                {actorsName.map((actorName) => (
                  <p key={actorName}>{actorName}</p>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
};

export default GettingMovie;
