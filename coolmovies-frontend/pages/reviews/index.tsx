import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
  CircularProgress,
} from "@mui/material";
import type { NextPage } from "next";
import { coolmoviesActions, useAppDispatch, useAppSelector } from "../../redux";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from "react";
import Review from '../../components/review/Review'

const CoolmoviesPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const coolmoviesState = useAppSelector((state) => state.coolmovies);
  const router = useRouter()

  useEffect(() => {
    dispatch(coolmoviesActions.clearSelectedMovieData())
    dispatch(coolmoviesActions.fetchAllMovies())
    console.log("INITIAL DISPATCH")
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <Paper elevation={3} css={styles.navBar}>
          <Button color={"neutral"} onClick={() => router.push('/')}>
            {"EcoPortal"}
          </Button>
          <Button color={"secondary"}>
            {"Reviews"}
          </Button>
          <Button color={"neutral"} onClick={() => router.push('/applicant')}>
            {"Applicant"}
          </Button>
        </Paper>

        <div css={styles.body}>
          <Typography variant={"h1"} css={styles.heading}>
            {"Reviews"}
          </Typography>

          <div css={styles.movieCovers}>
            {coolmoviesState.allMoviesData?.allMovies?.nodes?.map((movieData) => {
              return <div tabIndex={0} id={movieData.id} key={movieData.id} css={styles.coverImage} >
                <Image
                  id={movieData.id}
                  placeholder="blur"
                  blurDataURL={movieData.imgUrl}
                  src={movieData.imgUrl}
                  alt={movieData.title + " cover"}
                  width={160}
                  height={160 * 1.5}

                  onClick={() => {
                    console.log("Selected movie: ", movieData.title)
                    dispatch(coolmoviesActions.setSelectedMovie(movieData))
                    dispatch(coolmoviesActions.fetchReviewsByMovieId(movieData.id))
                  }}
                />
              </div> 
            })}
          </div>

          {coolmoviesState.selectedMovieData &&
            <div>
              <Typography variant={"subtitle1"} css={styles.subtitle} >
                {"Title: " + coolmoviesState.selectedMovieData.title} 
              </Typography>
              <Typography variant={"subtitle1"} css={styles.subtitle} >
                {"Release date: " + coolmoviesState.selectedMovieData.releaseDate} 
              </Typography>

              <Button
                variant={"outlined"}
                onClick={() =>
                  console.log("New review")
                }
              >
                {"New Review"}
              </Button>

              {
                coolmoviesState.reviewsForSelectedMovie &&
                coolmoviesState.reviewsForSelectedMovie?.allMovieReviews?.nodes.map((reviewData) => {
                  return <div key={reviewData.id}>
                    {/* <Typography variant={"subtitle1"} css={styles.subtitle} >
                      {reviewData.title} 
                    </Typography> */}
                    <Review />
                  </div>
                })
              }

            </div>
          }

        </div>
      </div>
    </ThemeProvider>
  );
};

export default CoolmoviesPage;
