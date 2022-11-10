import Search from "antd/lib/transfer/search";
import { API_KEY, API_ENDPOINT } from "../apis/config";

export function showLoadingSpinner() {
  return {
    type: "SHOW_LOADING_SPINNER",
    payload: null,
  };
}

export const getMovies =
  ({ params } = {}) =>
  (dispatch) => {
    fetch(`${API_ENDPOINT}${API_KEY}/?groups=top_250&count=250${params}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_MOVIES",
          payload: data.results,
        });
      })
      .catch((e) => {
        console.error(" error: " + e);
      });
  };

export const setMovieDetails = (payload) => (dispatch) => {
  dispatch({
    type: "SET_MOVIE",
    payload: payload,
  });
};

export const searchMovie = (payload) => (dispatch) => {
  dispatch({
    type: "SEARCHED_MOVIES",
    payload: payload.movieSearched,
  });
};

export const resetMovies = () => (dispatch) => {
  dispatch({
    type: "RESET_MOVIES",
  });
};
