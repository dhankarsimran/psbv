"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
const images = [
  "/images/psbvsteel1-min.jpg",
  "/images/psbvsteel2-min.jpg", // Add your second image path here
  "/images/psbvsteel3-min.jpg", // Add your third image path here
];
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#6e6e6e",
          position: "relative",
          display: "flex",
          width: "100vw",
          minHeight: "100%",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            position: { xs: "absolute", md: "relative" },
            color: "#ffffff",
            zIndex: 1,
            height: "100%",
            textAlign: "center",
            width: { xs: "90%", md: "30%" },
            left: { xs: "5%", md: "10%" },
            top: { xs: "20%", md: "10%" },
          }}
        >
          <Typography
            sx={{
              textShadow: "5px 5px 5px rgba(0,0,0,1)",
              fontSize: "3rem",
              fontWeight: "600",
              letterSpacing: "0.6rem",
            }}
          >
            Delivering Excellence in Pipes and Fittings
          </Typography>
          <Box sx={{ m: 2 }}>
            <Button
              variant="contained"
              sx={{
                py: 1,
                backgroundColor: " #9eef0a",
                color: "black",
                borderRadius: "2px",
                boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                mx: 1,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "#9eef0a",
                  boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                },
              }}
            >
              Explore
            </Button>
            <Button
              varient="outlined"
              sx={{
                border: "2px solid #9eef0a",
                color: "#9eef0a",
                borderRadius: "2px",
                boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                mx: 1,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                },
              }}
            >
              Connect
            </Button>
          </Box>
        </Box>

        {/* IMAGE BACKGROUND */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden", // Hide overflow to prevent overflow issues
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: index === currentImage ? 1 : 0, // Only show the current image
                transition: "opacity 2s ease-in-out", // Smooth transition
              }}
            >
              <Image
                src={image}
                fill
                style={{ objectFit: "cover" }}
                alt={`Steel Pipes ${index + 1}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default HeroSection;
