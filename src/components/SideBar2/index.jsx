import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { FaHome, FaCalendarAlt, FaCheck, FaImage } from "react-icons/fa";
import { Link } from "react-scroll";

const StyledMenu = styled((props) => (
  <Menu
    elevation={3}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 180,
    backgroundColor: "#91D8F6",
    color: theme.palette.mode === "light" ? "#004c9d" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const SideBar2 = ({ active, onClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = active;
  const handleClick = (event) => {
    onClose();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    onClose();
  };
  return (
    <div>
      {/* <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button> */}
      <IconButton
        id="demo-customized-button"
        className="menu-opener"
        onClick={handleClick}
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
      >
        <MenuIcon />
      </IconButton>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to="invitation" smooth={true} duration={500} offset={-80}>
          <MenuItem onClick={handleClose} disableRipple>
            <div className="containerMenuItem">
              <FaHome
                className="iconMenu"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="textMenuItem" style={{ paddingTop: "5.5px" }}>
                Home
              </span>
            </div>
          </MenuItem>
        </Link>

        <Divider sx={{ my: 0.5 }} />
        <Link
          to="birthdayDateAndTime"
          smooth={true}
          duration={500}
          offset={-80}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <div className="containerMenuItem">
              <FaCalendarAlt className="iconMenu" />
              <span className="textMenuItem" style={{ paddingTop: "3px" }}>
                Data
              </span>
            </div>
          </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link to="confirmPresence" smooth={true} duration={500} offset={-80}>
          <MenuItem onClick={handleClose} disableRipple>
            <div className="containerMenuItem">
              <FaCheck className="iconMenu" />
              <span className="textMenuItem">Confirmar presença</span>
            </div>
          </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <Link to="carouselScreen" smooth={true} duration={500} offset={-80}>
          <MenuItem onClick={handleClose} disableRipple>
            <div className="containerMenuItem">
              <FaImage className="iconMenu" />
              <span className="textMenuItem">Fotos</span>
            </div>
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
};
export default SideBar2;
