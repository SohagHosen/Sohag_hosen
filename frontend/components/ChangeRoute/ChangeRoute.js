import { useRouter } from "next/router";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import styles from "./ChangeRoute.module.css";
const ChangeRoute = () => {
  const router = useRouter();
  console.log(router);

  return (
    <Box className={styles.changeRoute}>
      <ButtonGroup disableElevation variant="outlined">
        <Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Button>
        <Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ChangeRoute;
