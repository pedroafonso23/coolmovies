import { gql } from "@apollo/client";
import { ReviewData } from "../redux/types";

export const createMovieReviewMutation = (reviewData: ReviewData) => gql`
mutation {
    createMovieReview(input: {
      movieReview: {
        title: "${reviewData.title}",
        body: "${reviewData.body}",
        rating: ${reviewData.rating},
        movieId: "${reviewData.movieId}",
        userReviewerId: "${reviewData.userByUserReviewerId.id}"
      }})
    {
        movieReview {
            id
            nodeId
            title
            body
            rating
            movieByMovieId {
                title
            }
            userByUserReviewerId {
                id
                name
            }
        }
    }
  }
`;

export const updateMovieReviewMutation = (reviewData: ReviewData) => gql`
mutation {
    updateMovieReview(input: {
      nodeId: "${reviewData.nodeId}",
      movieReviewPatch: {
        title: "${reviewData.title}",
        body: "${reviewData.body}",
        rating: ${reviewData.rating}
      }
    })
    {
      movieReview {
        id
        nodeId
        title
        body
        rating
        movieByMovieId {
          title
        }
        userByUserReviewerId {
            id
            name
        }
      }
    }
  }
`;

export const deleteMovieReviewMutation = (nodeId: string) => gql`
mutation {
    deleteMovieReview(input: {
      nodeId: "${nodeId}",
    })
    {
      movieReview {
        id
        nodeId
        title
        body
        rating
        movieByMovieId {
          title
        }
        userByUserReviewerId {
            id
            name
        }
      }
    }
  }
`;
