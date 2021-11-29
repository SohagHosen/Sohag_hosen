import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./MobileNav.module.css";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <React.Fragment>
      <Button className={styles.navBtn} onClick={() => setOpenNav(!openNav)}>
        <MenuIcon />
      </Button>

      <Drawer open={openNav} onClose={() => setOpenNav(!openNav)}>
        <Button
          className={styles.navBtnClose}
          onClick={() => setOpenNav(!openNav)}
        >
          <CloseIcon />
        </Button>
        <Box sx={{ mt: 3 }}>
          <Profile />
        </Box>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={() => setOpenNav(!openNav)}
          onKeyDown={() => setOpenNav(!openNav)}
        >
          <Box sx={{ mt: 2 }}>
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
