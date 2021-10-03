import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie } from "../redux/actions";

const DeletionMovies = () => {
  const dispatch = useDispatch();
  const deleteStatus = useSelector((state) => state.deleteStatus);
  const [id, setId] = useState("");

  const sendId = () => {
    dispatch(deleteMovie(id));
  };

  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
        className="me-2 mb-3"
      />
      <button onClick={sendId} className="btn btn-outline-light mb-1">
        Delete
      </button>
      {deleteStatus === 1 ? <h2>Successfully Deleted</h2> : ""}
    </div>
  );
};

export default DeletionMovies;
