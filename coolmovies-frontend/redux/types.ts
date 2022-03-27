import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export type CreateStoreOptions = {
  epicDependencies?: EpicDependencies;
};

export type EpicDependencies = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type AllMoviesData = {
  allMovies: {
    nodes: [
      {
        id: string,
        imgUrl: string,
        title: string,
        releaseDate: string,
      }
    ]
  }
}

export type ReviewsData = {
  allMovieReviews: {
    nodes: [
      {
        id: string,
        title: string,
        rating: number,
        releaseDate: string,
        userByUserReviewerId: {
          id: string,
          name: string,
        }
      }
    ]
  }
}