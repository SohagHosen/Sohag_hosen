import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";
import MobileNav from "../MobileNav/MobileNav";
const Layout = ({ children }) => {
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              sx={{ minWidth: "250px", background: "red" }}
              className={styles.profileContainer}
              item
              xs={12}
              sm={12}
              md={3}
            >
              <Profile />
              <Footer />
            </Grid>
            <Grid
              className={styles.pageContainer}
              sx={{ flexGrow: 1 }}
              item
              md={7.4}
              lg={8}
              xs={12}
            >
              <Box className={styles.pages}>{children}</Box>
            </Grid>
            <Grid
              className={styles.navbar}
              // sx={{ background: "green", maxWidth: "50px" }}
              item
              xs={1}
              sm={1}
              md={1}
            >
              <Navbar />
            </Grid>
          </Grid>
        </Box>
        <MobileNav />
      </Box>
    </>
  );
};

export default Layout;
