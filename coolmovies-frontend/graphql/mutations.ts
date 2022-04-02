import { gql } from '@apollo/client';
import { ReviewData } from '../redux/types';

export const createMovieReviewMutation = (params: ReviewData) => gql`
mutation {
    createMovieReview(input: {
      movieReview: {
        title: "${params.title}",
        body: "${params.body}",
        rating: ${params.rating},
        movieId: "${params.movieId}",
        userReviewerId: "${params.userByUserReviewerId.id}"
      }})
    {
        movieReview {
            id
            title
            body
            rating
            movieByMovieId {
                title
            }
            userByUserReviewerId {
                name
            }
        }
    }
  }
`;