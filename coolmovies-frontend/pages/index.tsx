import { Button, TextField, Tooltip, Typography, Zoom } from "@mui/material";
import type { NextPage } from "next";
import { exampleActions, useAppDispatch, useAppSelector } from "../redux";
import { styles } from "../styles/styles";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import NavBar from "./common/NavBar";

const HomePage: NextPage = () => {
  const dispatch = useAppDispatch();
  const exampleState = useAppSelector((state) => state.example);

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <NavBar selection={0} />

        <div css={styles.body}>
          <Typography variant={"h1"} css={styles.heading}>
            {"EcoPortal Coolmovies Test"}
          </Typography>
          <Typography variant={"subtitle1"} css={styles.subtitle}>
            {`Thank you for taking the time to take our test. We really appreciate it. 
            All the information on what is required can be found in the README at the root of this repo. 
            Please dont spend ages on this and just get through as much of it as you can. 
            Good luck! :) `}
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

export default HomePage;
