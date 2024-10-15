import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Carousel = () => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 5 cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Box
        sx={{
          px: { xs: 0, md: 4 },
          py: 8,
          maxWidth: { xs: "100vw", md: "50vw" },
        }}
      >
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            p: 3,
            mx: 4,
            textShadow: "2px 2px 5px  white",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderTopLeftRadius: "0.2rem",
            borderTopRightRadius: "0.2rem",
          }}
        >
          Excellent Quality and Service!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            px: 5,
            mx: 4,
            textAlign: "justify",
          }}
        >
          {" "}
          I have been using P.S.B.V. Pipe & Fitting for all my stainless steel
          pipe needs, and I’m extremely impressed with the quality of their
          products. I highly recommend them to anyone looking for high-quality
          pipes and fittings!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            py: 2,
            pr: 8,
            mx: 4,
            textAlign: "end",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderBottomLeftRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
            textShadow: "2px 2px 5px  white",
          }}
        >
          {" "}
          – Rohit Sharma
        </Typography>
      </Box>

      <Box
        sx={{
          px: { xs: 0, md: 4 },
          py: 8,
          maxWidth: { xs: "100vw", md: "50vw" },
        }}
      >
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            p: 3,
            mx: 4,
            textShadow: "2px 2px 5px  white",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderTopLeftRadius: "0.2rem",
            borderTopRightRadius: "0.2rem",
          }}
        >
          Reliable Products, On-Time Delivery!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            px: 5,
            mx: 4,
            textAlign: "justify",
          }}
        >
          {" "}
          We&apos;ve been sourcing stainless steel pipes and fittings from
          P.S.B.V. for our construction projects, and they have never
          disappointed us. A great company to work with if you&apos;re looking
          for reliability and consistency.
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            py: 2,
            pr: 8,
            mx: 4,
            textAlign: "end",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderBottomLeftRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
            textShadow: "2px 2px 5px  white",
          }}
        >
          {" "}
          – Neha Verma
        </Typography>
      </Box>
      <Box
        sx={{
          px: { xs: 0, md: 4 },
          py: 8,
          maxWidth: { xs: "100vw", md: "50vw" },
        }}
      >
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            p: 3,
            mx: 4,
            textShadow: "2px 2px 5px  white",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderTopLeftRadius: "0.2rem",
            borderTopRightRadius: "0.2rem",
          }}
        >
          Top-Notch Pipe and Fitting Solutions!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            px: 5,
            mx: 4,
            textAlign: "justify",
          }}
        >
          {" "}
          P.S.B.V. Pipe & Fitting provides some of the best stainless steel
          pipes and fittings in the market. The strength and finish of their
          products are excellent, making them perfect for our manufacturing
          requirements.
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            py: 2,
            pr: 8,
            mx: 4,
            textAlign: "end",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderBottomLeftRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
            textShadow: "2px 2px 5px  white",
          }}
        >
          {" "}
          – Vikas Singh
        </Typography>
      </Box>
      <Box
        sx={{
          px: { xs: 0, md: 4 },
          py: 8,
          maxWidth: { xs: "100vw", md: "50vw" },
        }}
      >
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            p: 3,
            mx: 4,
            textShadow: "2px 2px 5px  white",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderTopLeftRadius: "0.2rem",
            borderTopRightRadius: "0.2rem",
          }}
        >
          Affordable and High-Quality Products!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            px: 5,
            mx: 4,
            textAlign: "justify",
          }}
        >
          {" "}
          The quality of stainless steel pipes from P.S.B.V. Pipe & Fitting is
          outstanding, and their pricing is very competitive. We have used their
          pipes in several projects, and the products have always been reliable
          and durable.
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            py: 2,
            pr: 8,
            mx: 4,
            textAlign: "end",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderBottomLeftRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
            textShadow: "2px 2px 5px  white",
          }}
        >
          {" "}
          – Anjali Patel
        </Typography>
      </Box>
      <Box
        sx={{
          px: { xs: 0, md: 4 },
          py: 8,
          maxWidth: { xs: "100vw", md: "50vw" },
        }}
      >
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            p: 3,
            mx: 4,
            textShadow: "2px 2px 5px  white",
            fontSize: "1.2rem",
            fontWeight: "600",
            borderTopLeftRadius: "0.2rem",
            borderTopRightRadius: "0.2rem",
          }}
        >
          Great Service and Expertise!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            px: 5,
            mx: 4,
            textAlign: "justify",
          }}
        >
          {" "}
          P.S.B.V. Pipe & Fitting has become our go-to supplier for stainless
          steel pipes and fittings. The service is professional, and the quality
          of their products speaks for itself. Highly recommended!
        </Typography>
        <Typography
          sx={{
            backgroundColor: "rgba(158, 239, 10,1)",
            py: 2,
            pr: 8,
            mx: 4,
            textAlign: "end",
            fontSize: "1.1rem",
            fontWeight: "600",
            borderBottomLeftRadius: "0.2rem",
            borderBottomRightRadius: "0.2rem",
            textShadow: "2px 2px 5px  white",
          }}
        >
          {" "}
          – Amit Khurana
        </Typography>
      </Box>
      {/* Add more cards as needed */}
    </Slider>
  );
};

export default Carousel;
