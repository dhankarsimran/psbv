import { Box, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import { motion } from "framer-motion";

const CustomerSection = () => {
  return (
    <>
      {" "}
      <Box
        sx={{
          backgroundColor: "#fffff0",
          position: "relative",
          width: "100vw",
          minHeight: { xs: "90vh", md: "90vh" },
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
          whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
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
        </motion.div>
      </Box>
    </>
  );
};
export default CustomerSection;
