import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        &#169; {new Date().getFullYear()}{" "}
        <span style={{ color: "#1976d2" }}>Sohag hosen</span>
      </span>
    </footer>
  );
};

export default Footer;
