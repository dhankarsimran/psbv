import { Box, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const CustomerSection = () => {
  return (
    <>
      {" "}
      <Box
        sx={{
          backgroundColor: "#fffff0",
          position: "relative",
          width: "100vw",
          minHeight: { xs: "85vh", md: "90vh" },
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              px: 4,
              pt: 4,
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: "600",
              letterSpacing: "0.1rem",
              color: "#9eef0a",
              textShadow: "2px 2px 5px rgba(0,0,0,1)",
            }}
          >
            What Our Clients Say
          </Typography>
        </Box>
        <Carousel />
      </Box>
    </>
  );
};
export default CustomerSection;
