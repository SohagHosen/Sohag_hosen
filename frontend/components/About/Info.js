import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Info = ({ infoName, value }) => {
  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <Typography variant="h6" color="primary">
        {infoName}
      </Typography>{" "}
      <Typography variant="h6">{value}</Typography>
    </Box>
  );
};

export default Info;
