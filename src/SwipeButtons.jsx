import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@mui/material";
import {
  Replay as ReplayIcon,
  Close as CloseIcon,
  StarRate as StarRateIcon,
  Favorite as FavoriteIcon,
  FlashOn as FlashOnIcon,
} from "@mui/icons-material";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
