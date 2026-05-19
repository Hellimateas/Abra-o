import { useState } from "react";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    borderRadius: 12,
    marginTop: theme.spacing(1),
    minWidth: 250,
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "16px",
    },
  },
}));

const AudioSettings = ({
  isMusicPlaying,
  toggleMusic,
  volume,
  onVolumeChange,
  hasPlayed,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVolumeChange = (event, newValue) => {
    onVolumeChange(newValue / 100);
  };

  const getButtonText = () => {
    if (hasPlayed && !isMusicPlaying) return "🔁 Replay";
    if (isMusicPlaying) return "⏸️ Pausar";
    return "▶️ Tocar";
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? "audio-settings-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          color: "inherit",
          "&:hover": {
            transform: "rotate(90deg)",
            transition: "transform 0.3s",
          },
        }}
      >
        <SettingsIcon />
      </IconButton>

      <StyledMenu
        id="audio-settings-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="contained"
            onClick={() => {
              toggleMusic();
              handleClose();
            }}
            sx={{
              background: "linear-gradient(135deg, #91D8F6 0%, #72bae4 100%)",
              color: "#004c9d",
              fontWeight: 600,
              textTransform: "none",
              fontSize: "15px",
              "&:hover": {
                background: "linear-gradient(135deg, #72bae4 0%, #91D8F6 100%)",
              },
            }}
          >
            {getButtonText()}
          </Button>

          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "#004c9d", mb: 1 }}
            >
              Volume
            </Typography>
            <Slider
              value={volume * 100}
              onChange={handleVolumeChange}
              aria-label="Volume"
              sx={{
                color: "#91D8F6",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#004c9d",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#91D8F6",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#ddd",
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                color: "#004c9d",
                textAlign: "center",
                display: "block",
              }}
            >
              {Math.round(volume * 100)}%
            </Typography>
          </Box>
        </Box>
      </StyledMenu>
    </div>
  );
};

export default AudioSettings;
