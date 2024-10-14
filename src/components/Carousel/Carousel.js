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
import { Height } from "@mui/icons-material";

const Carousel = () => {
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
          "Excellent Quality and Service!"
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
          products. The pipes are durable, reliable, and precisely crafted. I
          highly recommend them to anyone looking for high-quality pipes and
          fittings!
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
          "Excellent Quality and Service!"
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
          products. The pipes are durable, reliable, and precisely crafted. I
          highly recommend them to anyone looking for high-quality pipes and
          fittings!
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
          "Excellent Quality and Service!"
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
          products. The pipes are durable, reliable, and precisely crafted. I
          highly recommend them to anyone looking for high-quality pipes and
          fittings!
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
          "Excellent Quality and Service!"
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
          products. The pipes are durable, reliable, and precisely crafted. I
          highly recommend them to anyone looking for high-quality pipes and
          fittings!
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
          "Excellent Quality and Service!"
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
          products. The pipes are durable, reliable, and precisely crafted. I
          highly recommend them to anyone looking for high-quality pipes and
          fittings!
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
      {/* Add more cards as needed */}
    </Slider>
  );
};

export default Carousel;
