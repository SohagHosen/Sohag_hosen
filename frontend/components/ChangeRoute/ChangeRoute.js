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

  const routes = ["/", "/about", "/portfolio", "/contact"];
  const pathName = router.pathname;

  const nextRoute = () => {
    const currentIndex = routes.indexOf(pathName);
    if (routes.indexOf(pathName) === routes.length - 1) {
      router.push(routes[0]);
    } else {
      router.push(routes[currentIndex + 1]);
    }
  };
  const previousRoute = () => {
    const currentIndex = routes.indexOf(pathName);
    if (routes.indexOf(pathName) === 0) {
      router.push(routes[routes.length - 1]);
    } else {
      router.push(routes[currentIndex - 1]);
    }
  };

  return (
    <Box className={styles.changeRoute}>
      <ButtonGroup disableElevation variant="outlined">
        <Button onClick={previousRoute}>
          <ArrowBackIosIcon />
        </Button>
        <Button onClick={nextRoute}>
          <ArrowForwardIosIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default ChangeRoute;
