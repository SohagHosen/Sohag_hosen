import Fade from "react-reveal/Fade";
import AboutMe from "../components/About/AboutMe";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <Fade bottom>
      <section className={styles.about}>
        <AboutMe />
      </section>
    </Fade>
  );
};

export default About;
