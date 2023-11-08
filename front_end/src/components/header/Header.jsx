import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import "./header.css";
import { CalendarMonthSharpIcon } from "@mui/icons-material/CalendarMonthSharp";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  const navLinks = useRef();
  const handleButton = () => {
    console.log(navLinks.current);
    navLinks.current.classList.add("active");
  };
  const handleButtonClose = () => {
    navLinks.current.classList.remove("active");
  };
  return (
    <div className="position-relative">
      <AppBar
        className="fontApp"
        sx={{ backgroundColor: "#FFF", color: "#141718" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleButton}
            className="d-none buttonNavHeader"
          >
            <FormatListBulletedSharpIcon
              sx={{ fontSize: "20px", fontWeight: "bold" }}
            />
          </IconButton>
          <LinkContainer to={"/"}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span className="fontApp fw-bold fs_24 c-gray">
                Shop<span className="c-first">Now</span>
              </span>
              <img width={50} src="/IMG/logo.png" alt="" />
            </Typography>
          </LinkContainer>
          <div ref={navLinks} className="header-nav-links d-flex gap-4">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleButtonClose}
              className="d-none buttonNavHeader_Close"
            >
              <img
                className="icon-gif"
                src="/IMG/icons8-close-64 (1).png"
                alt=""
              />
            </IconButton>

            <LinkContainer to={"/login"}>
            <Button
              color="inherit"
              sx={{ fontSize: "18px", display: "flex", alignItems: "center" }}
            >
              <LoginSharpIcon
                style={{ color: "var(--c-first)", fontSize: "25px" }}
              />
              <span className="c-gray">Login</span>
            </Button>
            </LinkContainer>
            <LinkContainer to={"/shoppingCart"}>
            <Button
              color="inherit"
              sx={{ fontSize: "18px", display: "flex", alignItems: "center" }}
            >
              <ShoppingCartCheckoutTwoToneIcon
                style={{ fontSize: "25px", color: "var(--c-first)" }}
              />
              <span className="c-gray">your Cart</span>
            </Button>
            </LinkContainer>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
