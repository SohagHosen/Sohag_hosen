import { Grid } from "@mui/material"
import { Box } from "@mui/system"
import Navbar from "../Navbar.js/Navbar"
import Profile from "../Profile/Profile"
import styles from '../../styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.container}>
          <Grid container sx={{ height: "100%" }}>
            <Grid className={styles.profileContainer} item xs={3}>
              <Profile />
            </Grid>
            <Grid item xs={8}>
              <Box className={styles.pages}>
                {children}
              </Box>
            </Grid>
            <Grid sx={{ background: "red" }} item xs={1}>
              <Navbar />
            </Grid>
          </Grid>
        </Box>
      </Box>


    </>
  )
}

export default Layout
