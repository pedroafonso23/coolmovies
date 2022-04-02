export { actions as coolmoviesActions } from './slice';
export { default as coolmoviesReducer } from './slice';
import { combineEpics } from 'redux-observable';
import { 
    coolmoviesEpic, 
    allMoviesAsyncEpic, 
    reviewsByMovieIdAsyncEpic, 
    loggedUserAsyncEpic,
    createMovieReviewAsyncEpic,
    updateMovieReviewAsyncEpic,
    deleteMovieReviewAsyncEpic,
} from './epics';

export const coolmoviesEpics = combineEpics(
    coolmoviesEpic, 
    allMoviesAsyncEpic, 
    reviewsByMovieIdAsyncEpic, 
    loggedUserAsyncEpic,
    createMovieReviewAsyncEpic,
    updateMovieReviewAsyncEpic,
    deleteMovieReviewAsyncEpic,
);
