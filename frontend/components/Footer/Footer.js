import styles from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small className="pera">
        &#169; {new Date().getFullYear()}{" "}
        <Link href="/">
          <span className="title" style={{ cursor: "pointer" }}>
            {" "}
            Sohag hosen
          </span>
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
