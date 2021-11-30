import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
import ChangeRoute from "../ChangeRoute/ChangeRoute";
const Layout = ({ children }) => {
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              className={styles.profileContainer}
              item
              xs={12}
              sm={12}
              md={4.5}
              lg={3.2}
            >
              <Profile />
              <Footer />
            </Grid>
            <Grid
              className={styles.pageContainer}
              sx={{ flexGrow: 1 }}
              item
              xs={12}
              md={6.5}
              lg={7.8}
            >
              <MobileNav />
              <Box className={styles.pages}>{children}</Box>
            </Grid>
            <Grid className={styles.navbar} item xs={1}>
              <Navbar />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ChangeRoute />
    </>
  );
};

export default Layout;
