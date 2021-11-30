import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>
        &#169; {new Date().getFullYear()}{" "}
        <span style={{ color: "#1976d2" }}>Sohag hosen</span>
      </small>
    </footer>
  );
};

export default Footer;
