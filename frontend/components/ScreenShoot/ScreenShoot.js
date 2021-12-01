import React from "react";
import Image from "next/image";
import styles from "./ScreenShoot.module.css";
import { Typography } from "@mui/material";
import Link from "next/link";
const ScreenShoot = ({ img, title }) => {
  return (
    <section style={{ width: "100%", marginBottom: "10px" }}>
      <Link href={img}>
        <a target="blanc">
          <Image
            className={styles.screenshoot}
            src={img}
            height="100%"
            width={100}
            layout="responsive"
          />
          <Typography variant="h5" sx={{ backgroundColor: "#263c71", p: 1 }}>
            {title}
          </Typography>
        </a>
      </Link>
    </section>
  );
};

export default ScreenShoot;
