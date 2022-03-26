import {
  Button,
  Paper,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import type { NextPage } from "next";
import { exampleActions, useAppDispatch, useAppSelector } from "../../redux";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router'

const ReviewsPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const exampleState = useAppSelector((state) => state.example);
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
            {"REVIEWS PAGE"}
          </Typography>
          <Typography variant={"subtitle1"} css={styles.subtitle}>
            {`Reviews`}
          </Typography>

          <div css={styles.mainControls}>
            <Tooltip
              title={`Side Effect Count from Epic (Gets run on odd values): ${exampleState.sideEffectCount}`}
              arrow
            >
              <Button
                variant={"contained"}
                onClick={() => dispatch(exampleActions.increment())}
              >
                {`Redux Increment: ${exampleState.value}`}
              </Button>
            </Tooltip>
            <Button
              variant={"outlined"}
              onClick={() =>
                dispatch(
                  exampleState.fetchData
                    ? exampleActions.clearData()
                    : exampleActions.fetch()
                )
              }
            >
              {exampleState.fetchData ? "Hide some data" : "Fetch some data"}
            </Button>
          </div>

          <Zoom in={Boolean(exampleState.fetchData)} unmountOnExit mountOnEnter>
            <TextField
              css={styles.dataInput}
              multiline
              label={"Some Data"}
              defaultValue={JSON.stringify(exampleState.fetchData)}
            />
          </Zoom>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ReviewsPage;
