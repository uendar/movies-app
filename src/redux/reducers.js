const initialState = {
  movie: null,
  movieList: [],
  actors: null,
  directors: [],
  searchedMovies: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movieList: action.payload,
        loading: false,
      };
    case "SHOW_LOADING_SPINNER":
      return {
        ...state,
        loading: true,
      };
    case "SET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "SEARCHED_MOVIES":
      return {
        ...state,
        searchedMovies: action.payload,
        loading: false,
      };
    case "RESET_MOVIES":
      return {
        ...state,
        searchedMovies: null,
      };

    default:
      return state;
  }
};
