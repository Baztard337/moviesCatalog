export const GET_MOVIE = "GET_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const IMPORT_MOVIES = "IMPORT_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const FOUND_MOVIE = "FOUND_MOVIE";
export const SORT_MOVIES = "SORT_MOVIE";

const apiUrl = "http://localhost:8000/api/v1/movies/";
const auth = {
  "Content-Type": "application/json;charset=utf-8",
  Authorization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU",
};

export const importMovies = (file) => async (dispatch) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU",
    },
    body: file,
    redirect: "follow",
  };
  const responce = await fetch(apiUrl + "import", requestOptions);
  const result = await responce.json();

  dispatch({
    type: IMPORT_MOVIES,
    payload: result.data,
  });
};

export const deleteMovie = (id) => async (dispatch) => {
  const requestOptions = {
    method: "DELETE",
    headers: auth,
    redirect: "follow",
  };

  const responce = await fetch(apiUrl + id, requestOptions);
  const result = await responce.json();
  dispatch({
    type: DELETE_MOVIE,
    payload: result.status,
  });
};

export const getMovie = (id) => async (dispatch) => {
  const requestOptions = {
    method: "GET",
    headers: auth,
    redirect: "follow",
  };

  const responce = await fetch(apiUrl + id, requestOptions);
  const result = await responce.json();

  dispatch({
    type: GET_MOVIE,
    payload: result.data,
  });
};

export const addMovie = (body) => async (dispatch) => {
  const requestOptions = {
    method: "POST",
    headers: auth,
    body: JSON.stringify(body),
    redirect: "follow",
  };

  const responce = await fetch(apiUrl, requestOptions);
  const result = await responce.json();
  dispatch({
    type: ADD_MOVIE,
    payload: result.data,
  });
};

export const searchMovie = (value) => async (dispatch) => {
  const requestOptions = {
    method: "GET",
    headers: auth,
    redirect: "follow",
  };

  const responce = await fetch(apiUrl + `?search=${value}`, requestOptions);
  const result = await responce.json();
  dispatch({
    type: FOUND_MOVIE,
    payload: result.data,
  });
};

export const sortMovies = () => async (dispatch) => {
  const requestOptions = {
    method: "GET",
    headers: auth,
    redirect: "follow",
  };

  const responce = await fetch(apiUrl + "?sort=title", requestOptions);
  const result = await responce.json();
  dispatch({
    type: SORT_MOVIES,
    payload: result.data,
  });
};
