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
import BusinessIcon from "@mui/icons-material/Business";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(110,110,110,1)",
        // backgroundImage: 'url("/images/psbvfactory1.jpg")',
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List
        sx={{
          height: "50%",
          // display: "flex",
          // flexDirection: "column",
        }}
      >
        {[
          { text: "Home", href: "/" },
          { text: "About Us", href: "/about" },
          { text: "Products", href: "/product" },
          { text: "Contact Us", href: "/contact" },
        ].map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              borderBottom: "2px solid #9eef0a",
              boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
              my: 2,
            }}
          >
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
                    color: "#9eef0a",
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
      <Box
        sx={{
          height: "35%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/psbvlogogreen.png"
          height={400}
          width={400}
          alt={`Steel Pipes`}
        />
      </Box>
    </Box>
  );
  return (
    <Box sx={{ position: "sticky", top: "0px", zIndex: 10 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#6e6e6e",
          p: { xs: 1, md: 0 },
          position: "relative",
        }}
      >
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
