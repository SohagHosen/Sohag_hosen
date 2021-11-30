import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./MobileNav.module.css";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <React.Fragment>
      <Box className={styles.navBtn}>
        <Button onClick={() => setOpenNav(!openNav)}>
          <MenuIcon />
        </Button>
      </Box>

      <Drawer
        open={openNav}
        sx={{ position: "relative" }}
        onClose={() => setOpenNav(!openNav)}
      >
        <Box className={styles.navBtnClose}>
          <Button onClick={() => setOpenNav(!openNav)}>
            <CloseIcon />
          </Button>
        </Box>
        <Box
          sx={{ width: 300, height: "100vh", mt: 10 }}
          role="presentation"
          onClick={() => setOpenNav(!openNav)}
          onKeyDown={() => setOpenNav(!openNav)}
        >
          <Box>
            <Profile />
            <Link href="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>

            <Link href="/about">
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
            <Link href="/portfolio">
              <ListItem button>
                <ListItemIcon>
                  <WorkIcon />
                </ListItemIcon>
                <ListItemText primary={"Portfolio"} />
              </ListItem>
            </Link>
            <Link href="/contact">
              <ListItem button>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItem>
            </Link>
          </Box>
        </Box>
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default MobileNav;
