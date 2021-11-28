import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        &#169; {new Date().getFullYear()} All rights reserved{" "}
        <span style={{ color: "#1976d2" }}>Sohag hosen</span>
      </span>
    </footer>
  );
};

export default Footer;
