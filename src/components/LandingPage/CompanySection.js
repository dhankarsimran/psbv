import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import LayersTwoToneIcon from "@mui/icons-material/LayersTwoTone";
import AssuredWorkloadTwoToneIcon from "@mui/icons-material/AssuredWorkloadTwoTone";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CompanySection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/psbvcompany.jpg"; // Replace with your image path
    img.onload = () => setBgLoaded(true); // Set state when image is loaded
  }, []);
  return (
    <>
      {" "}
      <Box
        sx={{ backgroundColor: "#6e6e6e", width: "100vw", minHeight: "100vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
          whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          {" "}
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              textAlign: "justify",
            }}
          >
            <Box
              sx={{
                mt: { xs: "8%", md: "3%" },
                height: "100%", // Full viewport height
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: bgLoaded
                  ? 'url("/images/psbvcompany.jpg")'
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              <Grid
                container
                sx={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  height: "100%",
                  width: "100%",
                  color: "white",
                  px: { xs: 2, md: 10 },
                  pt: { xs: 2, md: 2 },
                  pb: { xs: 10, md: 10 },
                  overflowY: { xs: "auto", md: "unset" },
                }}
              >
                <Grid item sx={12} md={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                    whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                  >
                    <Box>
                      <Typography
                        sx={{
                          width: "100%",
                          p: 4,
                          fontSize: { xs: "2rem", md: "3rem" },
                          fontWeight: "600",
                          letterSpacing: "0.1rem",
                          color: "#9eef0a",
                          textShadow: "2px 2px 5px rgba(0,0,0,1)",
                          textAlign: "center",
                        }}
                      >
                        What Sets Us Apart?
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item sx={12} md={6}>
                  <Box
                    sx={{
                      px: 4,
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <CheckCircleOutlineTwoToneIcon
                      sx={{
                        fontSize: "3rem",
                        mb: 6,
                        position: "absolute",
                        left: 0,
                        top: "1.5rem",
                      }}
                    />
                    <Box sx={{ ml: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          py: 2,
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        Unmatched Quality
                      </Typography>
                      <Typography
                        sx={{
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        Our products are manufactured to the highest standards,
                        ensuring durability and performance in every
                        application.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                  <Box
                    sx={{
                      px: 4,
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <LayersTwoToneIcon
                      sx={{
                        fontSize: "3rem",
                        mb: 8,
                        position: "absolute",
                        left: 0,
                        top: "1.5rem",
                      }}
                    />
                    <Box sx={{ ml: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          py: 2,
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        Extensive Range
                      </Typography>
                      <Typography
                        sx={{
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        We offer a wide variety of pipes and fittings, catering
                        to all industrial and residential needs. Whatever your
                        requirement, we have the perfect solution.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                  <Box
                    sx={{
                      px: 4,
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <AssuredWorkloadTwoToneIcon
                      sx={{
                        fontSize: "3rem",
                        mb: 4,
                        position: "absolute",
                        left: 0,
                        top: "1.5rem",
                      }}
                    />
                    <Box sx={{ ml: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          py: 2,
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        Competitive Pricing
                      </Typography>
                      <Typography
                        sx={{
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        We believe in providing quality without breaking the
                        bank. Our competitive pricing ensures you get the best
                        value for your investment.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sx={12} md={6}>
                  <Box
                    sx={{
                      px: 4,
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <FaceRetouchingNaturalIcon
                      sx={{
                        fontSize: "3rem",
                        mb: 4,
                        position: "absolute",
                        left: 0,
                        top: "1.5rem",
                      }}
                    />
                    <Box sx={{ ml: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          py: 2,
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        Customer-Centric
                      </Typography>
                      <Typography
                        sx={{
                          textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                        }}
                      >
                        Your satisfaction is our priority. We take the time to
                        understand your needs and work closely with you to meet
                        your expectations.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};
export default CompanySection;
