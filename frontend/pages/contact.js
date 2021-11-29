import React from "react";
import Fade from "react-reveal/Fade";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import styles from "../styles/Contact.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
const Contact = () => {
  return (
    <Fade bottom>
      <Box className={styles.contact}>
        <Typography
          variant="h4"
          color="primary"
          sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
        >
          Contact Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <ContactForm />
          </Grid>
          <Grid item md={6}>
            hello
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default Contact;
