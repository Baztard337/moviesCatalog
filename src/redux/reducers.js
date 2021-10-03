import {
  GET_MOVIE,
  DELETE_MOVIE,
  IMPORT_MOVIES,
  ADD_MOVIE,
  FOUND_MOVIE,
  SORT_MOVIES,
} from "./actions";

export const initialState = {
  movieInfo: {},
  foundMovie: [],
  sortMovies: [],
  addedMovie: {},
  importedMovies: {},
  deleteStatus: 0,
};
export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movieInfo: action.payload };
    case DELETE_MOVIE:
      return { ...state, deleteStatus: action.payload };
    case IMPORT_MOVIES:
      return { ...state, importedMovies: action.payload };
    case ADD_MOVIE:
      return { ...state, addedMovie: action.payload };
    case FOUND_MOVIE:
      return { ...state, foundMovie: action.payload };
    case SORT_MOVIES:
      return { ...state, sortMovies: action.payload };
    default:
      return state;
  }
}
