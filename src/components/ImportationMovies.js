import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, importMovies } from "../redux/actions";

const ImportationMovies = () => {
  const dispatch = useDispatch();
  const importedMovies = useSelector((state) => state.importedMovies);
  const allMovies = useSelector((state) => state.allMovies);

  const showMovies = () => {
    dispatch(getAllMovies());
  };

  const sentMovies = (e) => {
    const selectedFile = document.getElementById("importId").files[0];
    const formdata = new FormData();
    formdata.append("movies", selectedFile, "movies.txt");
    dispatch(importMovies(formdata));
  };

  return (
    <div>
      <input className="mb-2" type="file" id="importId" onChange={sentMovies} />
      <button className="btn btn-outline-light mb-1" onClick={showMovies}>
        Show List
      </button>
      {importedMovies.length > 0 ? <h2>Successfully Imported</h2> : ""}
      {allMovies.length > 0 ? (
        <table className="table text-light table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Format</th>
            </tr>
          </thead>
          {allMovies
            ? allMovies.map((movie) => (
                <tbody key={movie.id}>
                  <tr>
                    <td>{movie.id}</td>
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
    </div>
  );
};

export default ImportationMovies;
