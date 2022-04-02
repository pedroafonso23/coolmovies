export { actions as coolmoviesActions } from "./slice";
export { default as coolmoviesReducer } from "./slice";
import { combineEpics } from "redux-observable";
import {
  allMoviesAsyncEpic,
  reviewsByMovieIdAsyncEpic,
  loggedUserAsyncEpic,
  createMovieReviewAsyncEpic,
  updateMovieReviewAsyncEpic,
  deleteMovieReviewAsyncEpic,
} from "./epics";

export const coolmoviesEpics = combineEpics(
  allMoviesAsyncEpic,
  reviewsByMovieIdAsyncEpic,
  loggedUserAsyncEpic,
  createMovieReviewAsyncEpic,
  updateMovieReviewAsyncEpic,
  deleteMovieReviewAsyncEpic
);
