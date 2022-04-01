import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type MovieData = {
  id: string,
  imgUrl: string,
  title: string,
  releaseDate: string,
}

export type AllMoviesData = {
  allMovies: {
    nodes: [MovieData]
  }
}

export type ReviewData = {
  id: string,
  title: string,
  rating: number,
  body: string,
  userByUserReviewerId: {
    id: string,
    name: string,
  }
}

export type AllReviewsForMovieData = {
  allMovieReviews: {
    nodes: [ReviewData],
  }
}

export type UserData = {
  currentUser: {
    id: string,
    name: string,
  }
}