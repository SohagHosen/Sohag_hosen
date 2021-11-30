import {
  Alert,
  Button,
  InputBase,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import LoadingButton from "@mui/lab/LoadingButton";

const ContactForm = () => {
  const form = useRef();
  const [snackOpen, setSnackOpen] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pmm4a0v",
        "template_mudj9cq",
        form.current,
        "user_7dmIyJbO1IV2SXJryNk4C"
      )
      .then(
        (result) => {
          handleClick({
            vertical: "top",
            horizontal: "center",
          });
          setSnackOpen({
            open: true,
            ...{
              vertical: "top",
              horizontal: "center",
            },
          });
          setLoading(false);
          setError("");
        },
        (error) => {
          setSnackOpen({
            open: false,
            ...{
              vertical: "top",
              horizontal: "center",
            },
          });
          setLoading(false);
          setError("Something is wrong, please try again!");
        }
      );
  };

  const { vertical, horizontal, open } = snackOpen;

  const handleClose = () => {
    setSnackOpen({ ...snackOpen, open: false });
  };
  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <form ref={form} onSubmit={sendEmail}>
        <InputBase
          sx={{ m: 1, color: "white", borderBottom: "1px solid white" }}
          placeholder="Full Name"
          fullWidth
          type="text"
          name="user_name"
          required
        />
        <InputBase
          sx={{ m: 1, color: "white", borderBottom: "1px solid white" }}
          fullWidth
          placeholder="Email"
          type="email"
          name="user_email"
          required
        />
        <InputBase
          sx={{ m: 1, color: "white", borderBottom: "1px solid white" }}
          fullWidth
          placeholder="How Can I Help You?"
          multiline
          rows={2}
          name="message"
          required
        />
        {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          type="submit"
          sx={{ m: 1 }}
          fullWidth
          variant="contained"
        >
          Save
        </LoadingButton>
      </form>
    </Box>
  );
};

export default ContactForm;
