import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AllMoviesData,
  MovieData,
  AllReviewsForMovieData,
  UserData,
  ReviewData,
  CreateReview,
  UpdateReview,
} from "../../types";

interface CoolmoviesState {
  value: number;
  sideEffectCount: number;
  allMoviesData?: AllMoviesData;
  selectedMovieData?: MovieData;
  reviewsForSelectedMovie: ReviewData[];
  toggleNewReview: boolean;
  loggedUser?: UserData;
}

const initialState: CoolmoviesState = {
  value: 0,
  sideEffectCount: 0,
  toggleNewReview: false,
  reviewsForSelectedMovie: [],
};

export const slice = createSlice({
  initialState,
  name: "coolmovies",
  reducers: {
    fetchAllMovies: () => {},

    fetchReviewsByMovieId: (state, action: PayloadAction<string>) => {},

    fetchLoggedUser: () => {},

    createMovieReview: (state, action: PayloadAction<ReviewData>) => {},

    updateMovieReview: (state, action: PayloadAction<ReviewData>) => {},

    deleteMovieReview: (state, action: PayloadAction<string>) => {},

    clearAll: (state) => {
      console.log("Clear all states");
      state.allMoviesData = undefined;
      state.reviewsForSelectedMovie = [];
      state.selectedMovieData = undefined;
      state.loggedUser = undefined;
    },

    clearSelectedMovieData: (state) => {
      state.selectedMovieData = undefined;
    },

    loaded: (
      state,
      action: PayloadAction<{
        data:
          | AllMoviesData
          | AllReviewsForMovieData
          | UserData
          | CreateReview
          | UpdateReview;
      }>
    ) => {
      const data = action.payload.data;
      console.log("Loaded: ", data);

      if ((data as AllMoviesData).allMovies) {
        state.allMoviesData = data as AllMoviesData;
      } else if ((data as AllReviewsForMovieData).allMovieReviews) {
        state.reviewsForSelectedMovie = (
          data as AllReviewsForMovieData
        ).allMovieReviews.nodes;
      } else if ((data as UserData).currentUser) {
        state.loggedUser = data as UserData;
      } else if ((data as CreateReview)?.createMovieReview?.movieReview) {
        state.reviewsForSelectedMovie.unshift(
          (data as CreateReview).createMovieReview.movieReview
        );
      } else if ((data as UpdateReview)?.updateMovieReview?.movieReview) {
        state.reviewsForSelectedMovie.unshift(
          (data as UpdateReview).updateMovieReview.movieReview
        );
      }
    },

    loadError: (state) => {
      console.log("Error fetching data");
    },

    setSelectedMovie: (state, action: PayloadAction<MovieData>) => {
      state.selectedMovieData = action.payload;
    },

    addReview: (state, action: PayloadAction<ReviewData>) => {
      state.reviewsForSelectedMovie.unshift(action.payload);
    },

    removeReview: (state, action: PayloadAction<string>) => {
      const reviewList = JSON.parse(
        JSON.stringify(state.reviewsForSelectedMovie)
      ) as ReviewData[];
      const indexToRemove = reviewList.findIndex(
        (e) => e.nodeId === action.payload
      );
      state.reviewsForSelectedMovie.splice(indexToRemove, 1);
    },

    toggleNewReview: (state, action: PayloadAction<boolean>) => {
      state.toggleNewReview = action.payload;
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
