import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Fade from "react-reveal/Fade";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import styles from "../styles/Portfolio.module.css";
import bikezone from "../assets/bikezone.png";
import vacationRental from "../assets/VacationRental.png";
import learningTime from "../assets/learningTime.png";
import eyeCare from "../assets/eye-care.png";
import emaJohn from "../assets/ema-john.png";
import dentist from "../assets/dentist.png";
const Portfolio = () => {
  const portfolioData = [
    {
      img: bikezone,
      name: "Bike Zone",
      previewLink: "https://bike-zone-bd.web.app/",
    },
    {
      img: vacationRental,
      name: "Vacation Rental",
      previewLink: "https://authentication-d0784.web.app/",
    },
    {
      img: learningTime,
      name: "Bike Zone",
      previewLink: "https://bike-zone-bd.web.app/",
    },
    {
      img: eyeCare,
      name: "Eye Care",
      previewLink: "https://eye-care-ass.netlify.app/",
    },
    {
      img: emaJohn,
      name: "Ema John",
      previewLink: "https://ema-john-ass.netlify.app/",
    },
    {
      img: dentist,
      name: "Dentist",
      previewLink: "https://dentist-ass.netlify.app/",
    },
  ];

  return (
    <section style={{ overflow: "hidden" }}>
      <Fade bottom>
        <Box className={styles.portfolio}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
          >
            Portfolio
          </Typography>
          <Box>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {portfolioData?.map((data, index) => (
                <Grid item xs={12} sm={6} md={12} lg={4} key={index}>
                  <PortfolioCard
                    img={data.img}
                    name={data.name}
                    previewLink={data.previewLink}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Fade>
    </section>
  );
};

export default Portfolio;
