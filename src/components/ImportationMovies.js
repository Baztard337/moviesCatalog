import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { importMovies } from "../redux/actions";

const ImportationMovies = () => {
  const dispatch = useDispatch();
  const importedMovies = useSelector((state) => state.importedMovies);

  const sentMovies = (e) => {
    const selectedFile = document.getElementById("importId").files[0];
    const formdata = new FormData();
    formdata.append("movies", selectedFile, "movies.txt");
    dispatch(importMovies(formdata));
  };

  return (
    <div>
      <input className="mb-2" type="file" id="importId" onChange={sentMovies} />
      {importedMovies.length > 0 ? <h2>Successfully Imported</h2> : ""}
    </div>
  );
};

export default ImportationMovies;
