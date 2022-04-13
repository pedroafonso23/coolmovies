import { Button, Paper } from "@mui/material";
import { styles } from "../../styles/styles";
import { useRouter } from "next/router";

const NavBar = (props: { selection: number }) => {
  const router = useRouter();

  return (
    <Paper elevation={3} css={styles.navBar}>
      <Button
        color={props.selection == 0 ? "secondary" : "neutral"}
        onClick={() => {
          if (props.selection != 0) router.push("/");
        }}
      >
        {"EcoPortal"}
      </Button>
      <Button
        color={props.selection == 1 ? "secondary" : "neutral"}
        onClick={() => {
          if (props.selection != 1) router.push("/reviews");
        }}
      >
        {"Reviews"}
      </Button>
      <Button
        color={props.selection == 2 ? "secondary" : "neutral"}
        onClick={() => {
          if (props.selection != 2) router.push("/applicant");
        }}
      >
        {"Applicant"}
      </Button>
    </Paper>
  );
};

export default NavBar
