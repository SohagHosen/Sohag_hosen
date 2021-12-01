import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import NavPopover from "../navPopover/NavPopover";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import BookIcon from "@mui/icons-material/Book";
const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/" passHref>
            <a
              style={{
                color: router.pathname == "/" ? "#fff" : "#BBBFCA",
                background: "red",
              }}
              className={styles.navLink}
            >
              <NavPopover icon={<HomeIcon fontSize="large" />} popover="home" />
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" passHref>
            <a
              style={{
                color: router.pathname == "/about" ? "#fff" : "#BBBFCA",
              }}
              className={styles.navLink}
            >
              <NavPopover
                icon={<PersonIcon fontSize="large" />}
                popover="About me"
              />
            </a>
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/portfolio" passHref>
            <a
              style={{
                color: router.pathname == "/portfolio" ? "#fff" : "#BBBFCA",
              }}
              className={styles.navLink}
            >
              <NavPopover
                icon={<WorkIcon fontSize="large" />}
                popover="portfolio"
              />
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact" passHref>
            <a
              style={{
                color: router.pathname == "/contact" ? "#fff" : "#BBBFCA",
              }}
              className={styles.navLink}
            >
              <NavPopover
                icon={<EmailIcon fontSize="large" />}
                popover="contact"
              />
            </a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/blogs" passHref>
            <a
              style={{
                color: router.pathname == "/blogs" ? "#fff" : "#BBBFCA",
              }}
              className={styles.navLink}
            >
              <NavPopover
                icon={<BookIcon fontSize="large" />}
                popover="Blogs"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
