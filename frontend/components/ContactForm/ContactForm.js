import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <Box>
      <TextField
        fullWidth
        id="standard-basic"
        label="Full Name"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-multiline-static"
        label="Your Massage"
        multiline
        rows={2}
        variant="standard"
      />
      <Button fullWidth variant="contained">
        Contained
      </Button>
    </Box>
  );
};

export default ContactForm;
