import styles from './Profile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Profile = () => {
  return (
    <div className={styles.bioData}>
      <div className={styles.container}>
        <header>
          <div className="avatar">
            <Image width={150} height={150} className={styles.avatarImg} src='/images/sohag.jpg' alt="avatar" />
          </div>
          <div className={styles.name}>
            <span>Sohag_Hosen</span>
          </div>
        </header>
        <span className={styles.title}>
          Web Developer
        </span>
        <ul className={styles.socialIcons}>
          <li className={styles.socialItem}>
            <Link href="/hello" passHref>
              <div className={styles.socialLink}> <FacebookIcon /></div>

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
              <div className={styles.socialLink}><LinkedInIcon /></div>

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
        <footer className={styles.footer}>
          <span>&#169; {new Date().getFullYear()} All rights reserved <span style={{ color: "green" }}>Sohag hosen</span></span>
        </footer>
      </div>
    </div >
  )
}

export default Profile
