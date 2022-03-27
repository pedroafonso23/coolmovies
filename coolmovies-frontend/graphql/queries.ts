import { gql } from '@apollo/client';

export const allMoviesQuery = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        title
        releaseDate
      }
    }
  }
`;

export const reviewsByMovieIdQuery = (movieId: string) => gql`
{
    allMovieReviews(
      filter: {movieId: {equalTo: "${movieId}"}}
    ) {
      nodes {
        id
        title
        rating
        userByUserReviewerId {
          name
          id
        }
        body
      }
      totalCount
    }
  }
`