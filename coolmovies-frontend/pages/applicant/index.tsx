import {
  Button,
  Paper,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from 'next/router'

const ApplicantPage: NextPage = () => {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <Paper elevation={3} css={styles.navBar}>
          <Button color={"neutral"} onClick={() => router.push('/')}>
            {"EcoPortal"}
          </Button>
          <Button color={"neutral"} onClick={() => router.push('/reviews')}>
            {"Reviews"}
          </Button>
          <Button color={"secondary"}>
            {"Applicant"}
          </Button>
        </Paper>

        <div css={styles.body}>
          <Typography variant={"h1"} css={styles.heading}>
            {"ABOUT ME PAGE"}
          </Typography>
          <Typography variant={"subtitle1"} css={styles.subtitle}>
            {`Pedro Afonso - Software Engineer`}
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ApplicantPage;
