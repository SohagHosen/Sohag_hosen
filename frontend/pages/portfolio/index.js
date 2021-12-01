import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Fade from "react-reveal/Fade";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import styles from "../../styles/Portfolio.module.css";
import { portfolioData } from "../../store/portfolioData";
const Portfolio = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <Fade bottom>
        <Box className={styles.portfolio}>
          <Typography
            variant="h4"
            className="title"
            sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
          >
            Portfolio
          </Typography>
          <Box>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {portfolioData?.map((data) => (
                <Grid item xs={12} sm={6} md={12} lg={4} key={data.id}>
                  <PortfolioCard
                    img={data.img}
                    name={data.name}
                    previewLink={data.previewLink}
                    id={data.id}
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
