import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import styles from "./NavPopover.module.css";
const NavPopover = ({ icon, popover }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={styles.icon}
      >
        {icon}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          position: "absolute",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography
          sx={{
            p: 1,
            pb: 0.5,
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "#5eba7d",
          }}
        >
          {popover}
        </Typography>
      </Popover>
    </>
  );
};

export default NavPopover;
