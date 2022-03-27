import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllMoviesData, ReviewsData } from '../../types';

interface CoolmoviesState {
  value: number;
  sideEffectCount: number;
  allMoviesData?: AllMoviesData;
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
    clearData: (state) => {
      state.allMoviesData = undefined;
      state.reviewsForSelectedMovie = undefined;
    },
    loaded: (state, action: PayloadAction<{ data: AllMoviesData | ReviewsData }>) => {
      if (<AllMoviesData>action.payload.data != undefined) {
        state.allMoviesData = action.payload.data as AllMoviesData;
      } else if (<ReviewsData>action.payload.data != undefined) {
        state.reviewsForSelectedMovie = action.payload.data as ReviewsData 
      }
      console.log(action.payload.data)
    },
    loadError: (state) => {
      state.allMoviesData = undefined;
      console.log('Error fetching AllMovies')
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
