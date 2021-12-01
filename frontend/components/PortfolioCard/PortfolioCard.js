import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "./PortfolioCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PortfolioCard = ({ img, name, previewLink, id }) => {
  return (
    <Box className={styles.card}>
      <Image className={styles.image} src={img} layout="fill" />
      <Box className={styles.info}>
        <Typography variant="h6" sx={{ my: 1, fontWeight: "bold" }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link href={`portfolio/${id}`}>
            <Button variant="contained">Details</Button>
          </Link>

          <Link href={`${previewLink}`} passHref={true}>
            <a target="_blank">
              <Button variant="contained">Preview</Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioCard;
