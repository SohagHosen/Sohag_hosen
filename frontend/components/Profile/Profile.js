import styles from "./Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
const Profile = () => {
  return (
    <div className={styles.bioData}>
      <div className={styles.container}>
        <header>
          <div className="avatar">
            <Image
              width={150}
              height={150}
              className={styles.avatarImg}
              src="/images/sohag.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.name}>
            <span>Sohag_Hosen</span>
          </div>
        </header>
        <span className={styles.title}>Web Developer</span>
        <section>
          <ul className={styles.socialIcons}>
            <li className={styles.socialItem}>
              <a
                href="https://www.facebook.com/RangeError/"
                target="_blank"
                className={styles.socialLink}
              >
                {" "}
                <FacebookIcon />
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                href="https://www.linkedin.com/in/sohaghosen/"
                target="_blank"
                className={styles.socialLink}
              >
                {" "}
                <LinkedInIcon />
              </a>
            </li>

            <li className={styles.socialItem}>
              <a
                href="https://github.com/sohaghosen"
                target="_blank"
                className={styles.socialLink}
              >
                {" "}
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </section>
        <a href="https://drive.google.com/uc?export=download&id=13PYLqhhhsq6-DGhhKOLfnqIKZxpaRIaO">
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            startIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
