import React from "react";
import Fade from "react-reveal/Fade";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import dynamic from "next/dynamic";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  const Map = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  const info = [
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: "Savar, Dhaka",
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: "+8801910718990",
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: "sohag.hosen@outlook.com",
    },
  ];

  return (
    <section style={{ overflow: "hidden" }}>
      <Fade bottom>
        <Box className={styles.contact}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
          >
            Contact me
          </Typography>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12} sm={12}>
              <ContactForm />
            </Grid>
            <Grid sx={{ height: 300 }} item md={6} xs={12} sm={12}>
              <Map />
            </Grid>
          </Grid>
          <Grid sx={{ mt: 2 }} container spacing={2}>
            {info?.map((inf, i) => (
              <Grid key={i} item lg={4} md={6} xs={12} sm={6}>
                <ContactInfo icon={inf.icon} title={inf.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>
    </section>
  );
};

export default Contact;
