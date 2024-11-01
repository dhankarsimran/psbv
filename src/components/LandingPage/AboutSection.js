"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/psbvfactory1-min.jpg"; // Replace with your image path
    img.onload = () => setBgLoaded(true); // Set state when image is loaded
  }, []);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fffff0",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          // minHeight: "200vh",
          flexGrow: 1,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* <motion.div
          initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
          whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          // viewport={{ once: true }} // Triggers animation only once when in view
        > */}
        <Box sx={{ px: { xs: 4, md: 8 } }}>
          <Box>
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
              Strength in Every Connection
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: "justify",
              px: 2,
              color: "#54595f",
            }}
          >
            <Typography>
              At P.S.B.V. Pipe & Fitting, we believe that the foundation of
              every great project starts with precision and reliability. With
              decades of expertise in the manufacturing and supply of
              high-quality stainless steel pipes and fittings, we are committed
              to delivering products that empower industries to build with
              confidence. From small-scale installations to large industrial
              ventures, our solutions are engineered for excellence, ensuring
              safety, durability, and efficiency at every turn.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "end",
                p: 4,
                fontWeight: "600",
                textAlign: "end",
              }}
            >
              ~ With P.S.B.V., you&apos;re not just buying steel, you&apos;re
              investing in trust.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Link href="/about">
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
                  Know About Us ?
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* </motion.div> */}
        {/* SECTION FOLLOWED */}
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            textAlign: "justify",
            py: 8,
          }}
        >
          <Box
            sx={{
              height: "100%", // Full viewport height
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: bgLoaded
                ? 'url("/images/psbvfactory1-min.jpg")'
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
              whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
              transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            > */}
            <Grid
              container
              sx={{
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100%",
                width: "100%",
                color: "white",
                px: { xs: 2, md: 10 },
                py: 4,
              }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // width: "100%",
                    position: "relative",
                  }}
                >
                  <CheckBoxIcon
                    sx={{
                      mb: 3,
                      mr: 1,
                      fontSize: "3rem",
                      position: "absolute",
                      left: 0,
                      top: "1rem",
                    }}
                  />
                  <Box sx={{ ml: 8 }}>
                    <Box>
                      <Typography sx={{ fontSize: "2rem", py: 2 }}>
                        Quality Assurance{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Guaranteed high-grade steel, adhering to industry
                        standards.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <SettingsSuggestIcon
                    sx={{
                      mb: 3,
                      mr: 1,
                      fontSize: "3rem",
                      position: "absolute",
                      left: 0,
                      top: "1rem",
                    }}
                  />

                  <Box sx={{ ml: 8 }}>
                    <Box>
                      <Typography sx={{ fontSize: "2rem", py: 2 }}>
                        Customized Solutions{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Tailored pipe and fitting designs to suit unique project
                        needs.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <PublicIcon
                    sx={{
                      mb: 3,
                      mr: 1,
                      fontSize: "3rem",
                      position: "absolute",
                      left: 0,
                      top: "1rem",
                    }}
                  />

                  <Box sx={{ ml: 8 }}>
                    <Box>
                      <Typography sx={{ fontSize: "2rem", py: 2 }}>
                        Global Reach{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Supplying trusted solutions worldwide.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <SecurityIcon
                    sx={{
                      mb: 3,
                      mr: 1,
                      fontSize: "3rem",
                      position: "absolute",
                      left: 0,
                      top: "1rem",
                    }}
                  />

                  <Box sx={{ ml: 8 }}>
                    <Box>
                      <Typography sx={{ fontSize: "2rem", py: 2 }}>
                        Durability & Longevity{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Built to last in even the toughest environments.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <LocalShippingIcon
                    sx={{
                      mb: 3,
                      mr: 1,
                      fontSize: "3rem",
                      position: "absolute",
                      left: 0,
                      top: "1rem",
                    }}
                  />

                  <Box sx={{ ml: 8 }}>
                    <Box>
                      <Typography sx={{ fontSize: "2rem", py: 2 }}>
                        Timely Delivery{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        On-time delivery for seamless project execution.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <HighQualityIcon
                    sx={{
                      mb: 3,
                      mr: 1,
                      fontSize: "3rem",
                      position: "absolute",
                      left: 0,
                      top: "1rem",
                    }}
                  />

                  <Box sx={{ ml: 8 }}>
                    <Box>
                      <Typography sx={{ fontSize: "2rem", py: 2 }}>
                        Quality Products{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        We adhere to the highest standards of manufacturing.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* </motion.div> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AboutSection;
