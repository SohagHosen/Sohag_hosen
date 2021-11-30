import styles from "./AboutMe.module.css";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Info from "./Info";
import IDo from "./IDo/IDo";
import frontend from "../../assets/icons/frontend.png";
import backend from "../../assets/icons/server.png";
import graphics from "../../assets/icons/graphics.png";
const AboutMe = () => {
  const data = [
    {
      img: frontend,
      title: "Front end Development",
      description:
        "In simple words, it is a set of technologies that are used in developing the user interface of web applications and webpages. With the help of front-end technologies, developers create the design, structure, animation, and everything that you see on the screen while opening up a website, web application, or mobile app.",
    },
    {
      img: backend,
      title: "Back end Development",
      description:
        "The back- end of a website consists of a server, an application, and a database. A back-end developer builds and maintains the technology that powers those components which, together, enable the user-facing side of the website to even exist in the first place.",
    },
  ];
  return (
    <Box className={styles.aboutMe}>
      <Typography
        variant="h4"
        className="title"
        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        About Me
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={6} md={6}>
          <Typography variant="subtitle1" sx={{ mt: 2, textAlign: "justify" }}>
            Hello, I am Sohag hosen, I'm learning web development in Programming
            hero. I have developed many awesome websites. You also see my
            projects in the portfolio section.
          </Typography>
        </Grid>
        <Grid item sm={6} md={6}>
          <Box sx={{ mt: 2 }}>
            <Info infoName="Residence" value="Bangladesh" />
            <Info infoName="Address" value="Savar, Dhaka" />
            <Info infoName="Email" value="sohag.hosen@outlook.com" />
            <Info infoName="Phone" value="+8801910718990" />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Typography
          variant="h4"
          className="title"
          sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
        >
          What I Do
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {data?.map((d, i) => (
            <Grid item md={6} key={i}>
              <IDo image={d.img} title={d.title} description={d.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
