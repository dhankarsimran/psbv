import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }
function srcset(image, size, rows = 1, cols = 1) {
  return `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`;
}
const itemData = [
  {
    img: "/images/carousel11.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/carousel12.jpg",
    title: "Burger",
    cols: 2,
  },

  {
    img: "/images/carousel21.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "/images/carousel31.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "/images/carousel41.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/psbvsteel2.jpg",
    title: "Basketball",
  },
  {
    img: "/images/carousel32.jpg",
    title: "Fern",
  },
];

const GallerySection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 5 cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [loadedImages, setLoadedImages] = useState([]); // Track loaded images

  const images = [
    "/images/carousel11.jpg",
    "/images/carousel12.jpg",
    "/images/carousel21.jpg",
    "/images/psbvsteel1.jpg",
    "/images/carousel31.jpg",
    "/images/carousel32.jpg",
    "/images/carousel41.jpg",
    "/images/psbvsteel2.jpg",
  ]; // Replace with your image paths
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve(src);
        });
      });
      const loaded = await Promise.all(promises); // Wait for all images to load
      setLoadedImages(loaded); // Set the state to mark loaded images
    };

    loadImages();
  }, [images]);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#6e6e6e",
          width: "100vw",
          pb: 6,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
          whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          <Typography
            sx={{
              p: 4,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "600",
              letterSpacing: "0.1rem",
              color: "#9eef0a",
              textShadow: "2px 2px 5px rgba(0,0,0,1)",
            }}
          >
            {" "}
            Our Featured Products
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                width: { xs: "25%", md: "20%" },
                height: "70vh",
                borderLeft: "10px solid white",
                borderRight: "10px solid white",
                borderRadius: "2px",
                transition: "width 0.5s ease",
                // "&:hover": { width: { xs: "50%", md: "25%" }, cursor: "pointer" },
              }}
            >
              <Slider {...settings} sx={{ width: "100%", height: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/carousel11.jpg"
                    )
                      ? 'url("/images/carousel11.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/carousel12.jpg"
                    )
                      ? 'url("/images/carousel12.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
              </Slider>
            </Box>
            <Box
              sx={{
                width: { xs: "25%", md: "20%" },
                height: "70vh",
                borderLeft: "10px solid white",
                borderRight: "10px solid white",
                borderRadius: "2px",
              }}
            >
              <Slider {...settings} sx={{ width: "100%", height: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/carousel21.jpg"
                    )
                      ? 'url("/images/carousel21.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/psbvsteel1.jpg"
                    )
                      ? 'url("/images/psbvsteel1.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
              </Slider>
            </Box>
            <Box
              sx={{
                width: { xs: "25%", md: "20%" },
                height: "70vh",
                borderLeft: "10px solid white",
                borderRight: "10px solid white",
                borderRadius: "2px",
              }}
            >
              <Slider {...settings} sx={{ width: "100%", height: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/carousel31.jpg"
                    )
                      ? 'url("/images/carousel31.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/carousel32.jpg"
                    )
                      ? 'url("/images/carousel32.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
              </Slider>
            </Box>
            <Box
              sx={{
                width: { xs: "25%", md: "20%" },
                height: "70vh",
                borderLeft: "10px solid white",
                borderRight: "10px solid white",
                borderRadius: "2px",
              }}
            >
              <Slider {...settings} sx={{ width: "100%", height: "100%" }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/carousel41.jpg"
                    )
                      ? 'url("/images/carousel41.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "70vh",
                    backgroundImage: loadedImages.includes(
                      "/images/psbvsteel2.jpg"
                    )
                      ? 'url("/images/psbvsteel2.jpg")'
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderTop: "10px solid white",
                    borderBottom: "10px solid white",
                    borderRadius: "2px",
                  }}
                ></Box>
              </Slider>
            </Box>
          </Box>
          {/* SMALL SCREEN */}
          <ImageList
            sx={{
              width: "100%",
              height: 484,
              display: { md: "none" },
              overflow: "hidden",
              backgroundColor: "white",
            }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                {/* <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              /> */}
                <Image
                  src={srcset(item.img, 121, item.rows, item.cols)} // Use the srcset function to generate the URL
                  width={121 * (item.cols || 1)} // Set width dynamically based on cols
                  height={121 * (item.rows || 1)} // Set height dynamically based on rows
                  alt={item.title}
                  style={{ objectFit: "cover" }} // Maintain object fit
                />
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>
      </Box>
    </>
  );
};
export default GallerySection;
