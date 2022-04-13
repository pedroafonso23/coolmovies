import { css } from "@emotion/react";
import { theme } from "./theme";

export const styles = {
  root: css({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.palette.neutral.main,
  }),
  navBar: css({
    background: theme.palette.primary.main,
    height: 50,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderRadius: 0,
    p: {
      color: "white",
    },
  }),
  body: css({
    alignSelf: "stretch",
    paddingBottom: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: theme.palette.neutral.main,
  }),
  heading: css({
    marginTop: 16,
    textAlign: "center",
    color: theme.palette.primary.main,
  }),
  subtitle: css({
    fontWeight: 300,
    textAlign: "center",
    color: theme.palette.primary.main,
  }),
  generalText: css({
    p: {
      margin: "32px 456px",
      fontWeight: 400,
      textAlign: "justify",
      color: theme.palette.primary.dark,
    }
  }),
  mainControls: css({
    display: "flex",
    alignItems: "center",
    button: { marginRight: 16 },
  }),
  movieCovers: css({
    display: "flex",
    alignItems: "center",
    margin: "26px",
    gap: "24px",
  }),
  coverImage: css({
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:focus": {
      transform: "scale(1.14)",
    },
  }),
  profilePicture: css({
    marginTop: "28x",
    borderRadius: "50%",
    marginBottom: "16px",
  }),
  linksFooter: css({
    display: "flex",
    a: {
      margin: "32px 0 0 24px",
      color: theme.palette.primary.main,
      transition: "transform .2s",
      "&:hover": {
        color: theme.palette.primary.dark,
        fontWeight: "bold",
        transform: "scale(1.1)",
      },
    }
  }),
  dataInput: css({
    alignSelf: "stretch",
    margin: "32px 0",
  }),
};

export const reviewBoxSx = () => {
  return {
    width: 860,
    padding: 2,
    backgroundColor: "primary.main",
    borderRadius: 4,
    transition: "0.2s",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  };
};