import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllMoviesData, MovieData, AllReviewsForMovieData, UserData } from '../../types';

interface CoolmoviesState {
  value: number;
  sideEffectCount: number;
  allMoviesData?: AllMoviesData;
  selectedMovieData?: MovieData;
  reviewsForSelectedMovie?: AllReviewsForMovieData;
  toggleNewReview: boolean;
  loggedUser?: UserData;
}

const initialState: CoolmoviesState = {
  value: 0,
  sideEffectCount: 0,
  toggleNewReview: false,
};

export const slice = createSlice({
  initialState,
  name: 'coolmovies',
  reducers: {
    fetchAllMovies: () => {},

    fetchReviewsByMovieId: (state, action: PayloadAction<string>) => {},

    fetchLoggedUser: () => {},

    clearAll: (state) => {
      console.log("Clear all states")
      state.allMoviesData = undefined;
      state.reviewsForSelectedMovie = undefined;
      state.selectedMovieData = undefined;
      state.reviewsForSelectedMovie = undefined;
      state.loggedUser = undefined;
    },

    clearSelectedMovieData: (state) => {
      state.selectedMovieData = undefined;
    },

    loaded: (state, action: PayloadAction<{ data: AllMoviesData | AllReviewsForMovieData | UserData }>) => {
      const data = action.payload.data

      if ((data as AllMoviesData).allMovies) {
        state.allMoviesData = data as AllMoviesData;
        console.log("Loaded movies", data)
      } else if ((data as AllReviewsForMovieData).allMovieReviews) {
        state.reviewsForSelectedMovie = data as AllReviewsForMovieData 
        console.log("Loaded reviews", data)
      } else if ((data as UserData).currentUser) {
        state.loggedUser = data as UserData
        console.log("Loaded current user", data)
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

    toggleNewReview: (state, action: PayloadAction<boolean>) => {
      state.toggleNewReview = action.payload
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
