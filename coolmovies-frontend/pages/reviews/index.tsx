import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
  CircularProgress,
  Stack,
  Box,
} from "@mui/material";
import type { NextPage } from "next";
import { coolmoviesActions, useAppDispatch, useAppSelector } from "../../redux";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { Review } from '../../components/review/Review'
import { ReviewNew } from "../../components/review/ReviewNew";

const CoolmoviesPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const coolmoviesState = useAppSelector((state) => state.coolmovies);
  const router = useRouter()

  const [newReview, setNewReview] = useState(false);

  useEffect(() => {
    dispatch(coolmoviesActions.clearSelectedMovieData())
    dispatch(coolmoviesActions.fetchAllMovies())
    console.log("Fetching movies")
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
          <Typography variant={"h4"} css={styles.heading} color={'primary.main'}>
            {"User Reviews"}
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
                  width={180}
                  height={180 * 1.5}

                  onClick={() => {
                    console.log("Selected movie: ", movieData.title)

                    if (coolmoviesState.selectedMovieData?.id != movieData.id) {
                      dispatch(coolmoviesActions.toggleNewReview(false))
                    }
                    
                    dispatch(coolmoviesActions.setSelectedMovie(movieData))
                    dispatch(coolmoviesActions.fetchReviewsByMovieId(movieData.id))
                  }}
                />
              </div> 
            })}
          </div>

          {coolmoviesState.selectedMovieData &&
          <div>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography variant={'h6'} css={styles.subtitle} >
                {coolmoviesState.selectedMovieData.title} 
              </Typography>
              <Typography variant={'subtitle2'} css={styles.subtitle} >
                {"Release date: " + coolmoviesState.selectedMovieData.releaseDate} 
              </Typography>
            </Box>

              
              <Box sx={{margin: 1, display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                {
                  !coolmoviesState.toggleNewReview && <Button 
                    variant={"outlined"}
                    onClick={() => {
                        console.log("New review")
                        dispatch(coolmoviesActions.toggleNewReview(true))
                      }
                    }
                  >
                    {"Review this title"}
                  </Button>
                }
              </Box>
              

              <Stack spacing={2} >
                { coolmoviesState.toggleNewReview && <ReviewNew /> }

                {
                  coolmoviesState.reviewsForSelectedMovie &&
                  // useEffect(() => {

                  // }, [])
                  coolmoviesState.reviewsForSelectedMovie?.map((reviewData) => {
                    return <div key={reviewData.id}>
                        <Review id={reviewData.id} title={reviewData.title} rating={reviewData.rating} body={reviewData.body} userByUserReviewerId={{
                          id: reviewData.userByUserReviewerId.id,
                          name: reviewData.userByUserReviewerId.name
                        }} movieId={reviewData.movieId} />
                    </div>
                  })
                }
              </Stack>

            </div>
          }

        </div>
      </div>
    </ThemeProvider>
  );
};

export default CoolmoviesPage;
