import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllMoviesData, MovieData, ReviewsData } from '../../types';

interface CoolmoviesState {
  value: number;
  sideEffectCount: number;
  allMoviesData?: AllMoviesData;
  selectedMovieData?: MovieData;
  reviewsForSelectedMovie?: ReviewsData;
}

const initialState: CoolmoviesState = {
  value: 0,
  sideEffectCount: 0,
};

export const slice = createSlice({
  initialState,
  name: 'coolmovies',
  reducers: {
    fetchAllMovies: () => {},

    fetchReviewsByMovieId: (state, action: PayloadAction<string>) => {},

    clearAll: (state) => {
      console.log("CLEAR ALL")
      state.allMoviesData = undefined;
      state.reviewsForSelectedMovie = undefined;
      state.selectedMovieData = undefined;
      state.reviewsForSelectedMovie = undefined;
    },

    clearSelectedMovieData: (state) => {
      state.selectedMovieData = undefined;
    },

    loaded: (state, action: PayloadAction<{ data: AllMoviesData | ReviewsData }>) => {
      if ((action.payload.data as AllMoviesData).allMovies) {
        state.allMoviesData = action.payload.data as AllMoviesData;
        console.log("LOADED MOVIES", action.payload.data)
      } else if ((action.payload.data as ReviewsData).allMovieReviews) {
        state.reviewsForSelectedMovie = action.payload.data as ReviewsData 
        console.log("LOADED REVIEWS", action.payload.data)
      }
    },

    loadError: (state) => {
      state.allMoviesData = undefined;
      state.reviewsForSelectedMovie = undefined;
      console.log('Error fetching data');
    },

    setSelectedMovie: (state, action: PayloadAction<MovieData>) => {
      state.selectedMovieData = action.payload
    },

    increment: (state) => {
      state.value += 1;
    },

    epicSideEffect: (state) => {
      state.sideEffectCount += 1;
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
