"use client";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250, height: "100%", backgroundColor: "#6e6e6e" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", href: "/" },
          { text: "About Us", href: "/about" },
          { text: "Products", href: "/product" },
          { text: "Contact Us", href: "/contact" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.href} passHref legacyBehavior>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  letterSpacing: "0.06rem",
                  fontSize: "2rem",
                  "&:hover": { backgroundColor: "transparent" },
                  // textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                }}
              >
                <ListItemText
                  sx={{
                    p: 2,
                    color: "white",
                    textShadow: "5px 5px 5px rgba(0,0,0,0.7)",

                    "&:hover": {
                      backgroundColor: " #9eef0a",
                      color: "black",
                      borderRadius: "2px",
                      boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                      textShadow: "none",
                    },
                  }}
                  primary={item.text}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ position: "sticky", top: "0px", zIndex: 10 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6e6e6e" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              marginX: { xs: "0rem", md: "1.5rem" },
              textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
            }}
          >
            P.S.B.V.
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              width: "100%",
            }}
          >
            <Link href="/">
              <Typography
                sx={{
                  px: 2,
                  py: 1,
                  mx: 2,
                  letterSpacing: "0.06rem",
                  fontSize: "1.1rem",
                  textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  "&:hover": {
                    backgroundColor: "#9eef0a",
                    borderRadius: "2px",
                    textShadow: "none",
                    boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                    color: "black",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link href="/about">
              <Typography
                sx={{
                  px: 2,
                  py: 1,
                  mx: 2,
                  letterSpacing: "0.06rem",
                  fontSize: "1.1rem",
                  textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  "&:hover": {
                    backgroundColor: "#9eef0a",
                    borderRadius: "2px",
                    textShadow: "none",
                    boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                    color: "black",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link href="#">
              <Typography
                sx={{
                  px: 2,
                  py: 1,
                  mx: 2,
                  letterSpacing: "0.06rem",
                  fontSize: "1.1rem",
                  textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  "&:hover": {
                    backgroundColor: "#9eef0a",
                    borderRadius: "2px",
                    textShadow: "none",
                    boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                    color: "black",
                  },
                }}
              >
                Products
              </Typography>
            </Link>
            <Link href="/contact">
              <Typography
                sx={{
                  px: 2,
                  py: 1,
                  mx: 2,
                  letterSpacing: "0.06rem",
                  fontSize: "1.1rem",
                  textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  "&:hover": {
                    backgroundColor: "#9eef0a",
                    borderRadius: "2px",
                    textShadow: "none",
                    boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                    color: "black",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <MenuIcon
              onClick={toggleDrawer(true)}
              sx={{ cursor: "pointer", fontSize: "2rem" }}
            />
          </Box>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
