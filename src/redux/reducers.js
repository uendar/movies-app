const initialState = {
  movie: null,
  movieList: [],
  actors: null,
  directors: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      console.log("get movies ", action);
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
    default:
      return state;
  }
};
