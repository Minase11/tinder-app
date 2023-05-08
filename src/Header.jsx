import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import { Person as PersonIcon, Forum as ForumIcon } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem-700x394.png"
        alt="Tinder Logo"
        className="header__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
