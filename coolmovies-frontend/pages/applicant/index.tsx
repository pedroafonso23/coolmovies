import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { styles } from "../../styles/styles";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import NavBar from "../common/NavBar";

const ApplicantPage: NextPage = () => {
  const Header = (
    <div>
      <Typography variant={"h4"} css={styles.heading}>
        {"About the Applicant"}
      </Typography>

      <div css={{ margin: "26px 0 6px 0" }}>
        <Image
          css={styles.profilePicture}
          placeholder="blur"
          blurDataURL="https://avatars2.githubusercontent.com/u/62068773?s=460&u=46d1fb5d480e4c6b50312d35c6dc524267bc4d95&v=4"
          src="https://avatars2.githubusercontent.com/u/62068773?s=460&u=46d1fb5d480e4c6b50312d35c6dc524267bc4d95&v=4"
          alt="Applicant profile picture"
          width={220}
          height={220}
        />
      </div>

      <Typography variant={"subtitle1"} css={styles.subtitle}>
        {`Pedro Afonso`}
      </Typography>
    </div>
  );

  const Links = (
    <div css={styles.linksFooter}>
      <a
        target="_blank"
        href="https://github.com/pedroafonso23"
        rel="noreferrer"
      >
        {"GitHub"}
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/pedroafonsoferraz/"
        rel="noreferrer"
      >
        {"LinkedIn"}
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/pedroafonsocfl/?hl=pt-br"
        rel="noreferrer"
      >
        {"Instagram"}
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/pedroafonso.ferraz.7/"
        rel="noreferrer"
      >
        {"Facebook"}
      </a>
    </div>
  );

  const Resume = (
    <div css={styles.generalText}>
      <p>
        {
          "Full-stack Software Engineer and former Automation Engineer. Currently working as a Software Engineer at Codex Utilities (former Kaffa Mobile), in Campinas - SP, Brazil."
        }
      </p>
      <p>
        {
          "I started working with back-end in the Core Product team, where I developed new features, fixed bugs and created tests using various technologies such as Java, Kotlin, Maven, functional programming, RX, JasperReports, DXF export, SQL. "
        }
      </p>
      <p>
        {
          "Since 2019, I am going through a career transition and qualifying as a web and mobile full-stack developer (mainly JavaScript, React, NodeJS), through several courses such as Rocketseat, DevAprender, Udemy, Cod3r and Curso em Vídeo."
        }
      </p>
      <p>
        {
          "My professional career begins with my graduation from the Federal University of Itajubá (Unifei) in Control and Automation Engineering (2009 to 2013). Then I worked as an Automation Engineer in the Advanced Engineering department of Delphi Automotive Systems in Paraisópolis - MG, where I remained from 2013 to 2016. I performed functions such as robot programming (ABB and Staubli), PLC and HMI programming (Ladder and related), production lines start-ups, management of modernization projects and development of vision systems (LabView)."
        }
      </p>
      <p>
        {
          "From 2016 to 2018 I completed a master's degree in Automation and Systems Engineering at the Federal University of Santa Catarina (UFSC) in Florianópolis - SC. In my dissertation, I solved an intracellular network control problem with the development of an algorithm. In 2019 and 2020 I worked remotely and independently, but mostly studied to qualify as a web and mobile developer learning a plethora of programming skills, such as JavaScript, TypeScript, HTML, CSS, ReactJS, React Native, Vue, Express, Webpack, jQuery, Gulp, JSON, JSX, Bootstrap , SQLite, MySQL, MongoDB, Figma, Visual Studio. I also studied OutSystems low-code programming and Data Science."
        }
      </p>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <div css={styles.root}>
        <NavBar selection={2} />

        <div css={styles.body}>
          {Header}
          {Links}
          {Resume}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ApplicantPage;
