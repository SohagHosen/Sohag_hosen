import styles from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        &#169; {new Date().getFullYear()}{" "}
        <Link href="/">
          <span style={{ color: "#1976d2", cursor: "pointer" }}>
            {" "}
            Sohag hosen
          </span>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
