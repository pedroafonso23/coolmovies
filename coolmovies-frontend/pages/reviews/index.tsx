import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import type { NextPage } from "next";
import { coolmoviesActions, useAppDispatch, useAppSelector } from "../../redux";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router'
import Image from 'next/image'

const CoolmoviesPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const coolmoviesState = useAppSelector((state) => state.coolmovies);
  const router = useRouter()

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
            {"COOLMOVIES PAGE"}
          </Typography>
          <Typography variant={"subtitle1"} css={styles.subtitle}>
            {`Coolmovies`}
          </Typography>

          <div css={styles.mainControls}>
            <Tooltip
              title={`Side Effect Count from Epic (Gets run on odd values): ${coolmoviesState.sideEffectCount}`}
              arrow
            >
              <Button
                variant={"contained"}
                onClick={() => dispatch(coolmoviesActions.increment())}
              >
                {`Redux Increment: ${coolmoviesState.value}`}
              </Button>
            </Tooltip>
            <Button
              variant={"outlined"}
              onClick={() =>
                {
                  dispatch(
                    coolmoviesState.allMoviesData
                      ? coolmoviesActions.clearData()
                      : coolmoviesActions.fetchAllMovies()
                  )
                }
              }
            >
              {coolmoviesState.allMoviesData ? "Hide Movies" : "Fetch Movies"}
            </Button>
            <Button
              variant={"outlined"}
              onClick={() => 
                {
                  dispatch(coolmoviesActions.fetchReviewsByMovieId('70351289-8756-4101-bf9a-37fc8c7a82cd'))
                }
              }
            >
              {"Get movie reviews"}
            </Button>
          </div>

          <div css={styles.movieCovers}>
            {coolmoviesState.allMoviesData?.allMovies?.nodes?.map(({ imgUrl }) => {
              return <Image
                key={imgUrl}
                src= {imgUrl}
                alt="Movie cover image"
                width={200}
                height={300}
              />
            })}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CoolmoviesPage;
