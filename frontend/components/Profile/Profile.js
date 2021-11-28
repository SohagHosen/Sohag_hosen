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
              <Link href="/hello" passHref>
                <div className={styles.socialLink}>
                  {" "}
                  <FacebookIcon />
                </div>
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link href="/hello" passHref>
                <div className={styles.socialLink}>
                  <TwitterIcon />
                </div>
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link href="/hello" passHref>
                <div className={styles.socialLink}>
                  <LinkedInIcon />
                </div>
              </Link>
            </li>
            <li className={styles.socialItem}>
              <Link href="/hello" passHref>
                <div className={styles.socialLink}>
                  <GitHubIcon />
                </div>
              </Link>
            </li>
          </ul>
        </section>
        <Button sx={{ mt: 2 }} variant="outlined" startIcon={<DownloadIcon />}>
          Download Resume
        </Button>
      </div>
    </div>
  );
};

export default Profile;
