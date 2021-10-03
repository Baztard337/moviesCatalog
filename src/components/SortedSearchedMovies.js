import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, sortMovies } from "../redux/actions";

const SortedSearchedMovies = () => {
  const dispatch = useDispatch();

  const foundMovie = useSelector((state) => state.foundMovie);
  const sort = useSelector((state) => state.sortMovies);
  const [searchValue, setSearchValue] = useState("");

  const search = () => {
    dispatch(searchMovie(searchValue));
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Type title or actors"
          className="me-2"
        ></input>
        <button onClick={search} className="btn btn-outline-light me-2">
          Search
        </button>
        <button
          onClick={() => dispatch(sortMovies())}
          className="btn btn-outline-light"
        >
          Sort
        </button>
      </div>
      {foundMovie.length > 0 ? (
        <table className="table text-light table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Format</th>
            </tr>
          </thead>
          {foundMovie
            ? foundMovie.map((movie) => (
                <tbody key={movie.id}>
                  <tr>
                    <th scope="row">{movie.id}</th>
                    <td>{movie.title}</td>
                    <td>{movie.year}</td>
                    <td>{movie.format}</td>
                  </tr>
                </tbody>
              ))
            : ""}
        </table>
      ) : (
        ""
      )}
      {sort.length > 0 ? (
        <table className="table text-light table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Format</th>
            </tr>
          </thead>
          {sort
            ? sort.map((sortMovie) => (
                <tbody key={sortMovie.id}>
                  <tr>
                    <td>{sortMovie.id}</td>
                    <td>{sortMovie.title}</td>
                    <td>{sortMovie.year}</td>
                    <td>{sortMovie.format}</td>
                  </tr>
                </tbody>
              ))
            : ""}
        </table>
      ) : (
        ""
      )}
    </div>
  );
};

export default SortedSearchedMovies;
