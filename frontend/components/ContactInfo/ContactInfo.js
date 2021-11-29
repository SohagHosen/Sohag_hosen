import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./ContactInfo.module.css";
const ContactInfo = ({ icon, title }) => {
  return (
    <Box className={styles.contactInfo}>
      <Box sx={{ textAlign: "center" }}>
        <span>{icon}</span>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo;
