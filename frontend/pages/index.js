import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
export default function Home() {
  return (
    <>
      <Fade bottom>
        <main className={styles.home}>
          <Box className={styles.container}>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h2"
              component="h2"
              gutterBottom
            >
              Sohag hosen
            </Typography>
            <Typography variant="body1" gutterBottom component="h5">
              MERN Stack Developer
            </Typography>
          </Box>
        </main>
      </Fade>
    </>
  );
}
