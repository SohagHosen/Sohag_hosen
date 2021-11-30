import Fade from "react-reveal/Fade";
import AboutMe from "../components/About/AboutMe";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <section className="pera" style={{ overflow: "hidden" }}>
      <Fade bottom>
        <section className={styles.about}>
          <AboutMe />
        </section>
      </Fade>
    </section>
  );
};

export default About;
