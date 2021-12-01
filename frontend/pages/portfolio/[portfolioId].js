import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { portfolioData } from "../../store/portfolioData";
import ScreenShoot from "../../components/ScreenShoot/ScreenShoot";
const portfolioDetails = () => {
  const router = useRouter();
  const [selectedPortfolio, setSelectedPortfolio] = useState({});

  useEffect(() => {
    if (router.query.portfolioId) {
      const d = portfolioData.filter(
        (portfolio) => portfolio.id.toString() === router.query.portfolioId
      );
      setSelectedPortfolio(d?.[0]);
    }
  }, [router.query.portfolioId]);
  return (
    <>
      {selectedPortfolio?.name && (
        <section style={{ color: "white" }}>
          <Fade bottom>
            <Box>
              <Typography
                variant="h4"
                className="title"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mb: 2,
                  color: "success",
                }}
              >
                Project Details
              </Typography>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  <Typography
                    variant="h5"
                    className="title"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      mb: 2,
                    }}
                  >
                    {selectedPortfolio.name}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}
                  >
                    <ButtonGroup
                      size="small"
                      variant="contained"
                      aria-label="small button group"
                    >
                      <Link href={selectedPortfolio?.links?.client}>
                        <a target="_blank">
                          <Button key="one">Client Side Repo</Button>
                        </a>
                      </Link>
                      {selectedPortfolio?.links?.server && (
                        <Link href={selectedPortfolio?.links?.server}>
                          <a target="_blank">
                            <Button key="one">Server Side Repo</Button>
                          </a>
                        </Link>
                      )}
                      <Link href={selectedPortfolio?.previewLink}>
                        <a target="_blank">
                          <Button key="one">Preview</Button>
                        </a>
                      </Link>
                    </ButtonGroup>
                  </Box>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Features
                    </Typography>
                    {selectedPortfolio?.details?.features.map((f) => (
                      <Typography variant="body1" gutterBottom component="div">
                        {f}
                      </Typography>
                    ))}
                  </Box>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Technology
                    </Typography>
                    {selectedPortfolio?.details?.Technology.map((f) => (
                      <Typography variant="body1" gutterBottom component="div">
                        {f}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={6}>
                  {selectedPortfolio?.details?.screenshots?.map((ss) => (
                    <ScreenShoot img={ss.img} title={ss.pageName} />
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </section>
      )}
    </>
  );
};

export default portfolioDetails;
