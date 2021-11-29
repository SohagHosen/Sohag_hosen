import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <Box>
      <TextField
        sx={{ m: 1 }}
        fullWidth
        id="standard-basic"
        label="Full Name"
        variant="standard"
      />
      <TextField
        sx={{ m: 1 }}
        fullWidth
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <TextField
        sx={{ m: 1 }}
        fullWidth
        id="standard-multiline-static"
        label="How Can I Help You?"
        multiline
        rows={2}
        variant="standard"
      />
      <Button sx={{ m: 1 }} fullWidth variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
