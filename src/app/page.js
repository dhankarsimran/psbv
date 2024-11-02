"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HeroSection from "@/components/LandingPage/HeroSection";
import AboutSection from "@/components/LandingPage/AboutSection";
import ProductSection from "@/components/LandingPage/ProductSection";
import CompanySection from "@/components/LandingPage/CompanySection";
import CustomerSection from "@/components/LandingPage/CustomerSection";
import GallerySection from "@/components/LandingPage/GallerySection";
const images = [
  "/images/psbvsteel1.jpg",
  "/images/psbvsteel2.jpg", // Add your second image path here
  "/images/psbvsteel3.jpg", // Add your third image path here
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);
  return (
    //All components for Landing Page are here
    <>
      {/* SECTION 1 */}
      <HeroSection />
      {/* SECTION 2 */}
      <AboutSection />
      {/* SECTION 3 */}
      <ProductSection />
      {/* SECTION 4 */}
      <CompanySection />
      {/* SECTION 5 */}
      <CustomerSection />
      {/* SECTION 6 */}
      <GallerySection />
    </>
  );
}
