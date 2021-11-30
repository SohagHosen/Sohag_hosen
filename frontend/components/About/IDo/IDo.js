import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
const IDo = ({ image, title, description }) => {
  return (
    <Box>
      <Image src={image} alt="Service" width={50} height={50} />
      <Typography variant="h5" className="pera">
        {title}
      </Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </Box>
  );
};

export default IDo;
