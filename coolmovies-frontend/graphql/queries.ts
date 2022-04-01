import { gql } from '@apollo/client';

export const allMoviesQuery = gql`
{
  allMovies(first: 10) {
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
        id
        name
      }
      body
    }
    totalCount
  }
}
`

export const loggedUserQuery = gql`
{
  currentUser {
    id
    name
  }
}
`