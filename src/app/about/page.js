import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
const AboutPage = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* HeroAboutSection */}
      <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Image
          src={"/images/aboutMain-min.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt="About-Entry-Page"
        />

        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: "20%",
              height: "100%",
              width: "100%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "3rem", md: "4rem" },
                color: "#9eef0a",
                fontWeight: "600",

                width: { xs: "80%", md: "90%" },
              }}
            >
              Welcome to P.S.B.V. Pipe & Fitting
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#fff",
                fontWeight: "500",
                mt: 2,
                width: { xs: "80%", md: "90%" },
              }}
            >
              Delivering Precision, Quality, and Trust in Stainless Steel
              Solutions
            </Typography>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Link href="/contact">
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
                  Join Our Mission
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* MISSION */}
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
              Our Mission
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
              At P.S.B.V. Pipe & Fitting, our mission is to revolutionize the
              global industrial piping landscape by becoming the most trusted
              and innovative provider of stainless steel solutions. We strive to
              create lasting value by offering products that are not only built
              to meet the toughest industry standards but also drive
              sustainability and efficiency for our clients. We have grown from
              a small operation into a major supplier in the industry, driven by
              a passion for innovation and a dedication to customer
              satisfaction. Our commitment to excellence and strong partnerships
              has allowed us to expand our reach and deliver top-notch products
              to clients across the globe.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              textAlign: "start",
              p: 2,
            }}
          >
            {/* LEFT  */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "40%",
                },
                my: 4,
                p: 2,
                borderRadius: "5px",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  mx: 1,
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                We aim to:
              </Typography>
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mx: 1 }} />
                <Typography>Lead the Industry in Innovation</Typography>
              </Box>
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mx: 1 }} />
                <Typography>Deliver Unmatched Quality</Typography>
              </Box>{" "}
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mx: 1 }} />
                <Typography>Foster Long-Lasting Partnerships</Typography>
              </Box>{" "}
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mx: 1 }} />
                <Typography>Drive Sustainable Growth</Typography>
              </Box>{" "}
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mx: 1 }} />
                <Typography>Empower Our Workforce</Typography>
              </Box>
            </Box>
            {/* RIGHT  */}
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                p: 2,
                my: 4,
                borderRadius: "5px",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                Our Core Values:
              </Typography>
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mr: 1 }} />
                <Typography>
                  {" "}
                  Consider honesty as the key to a business&apos;
                  trustworthiness and integrity.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mr: 1 }} />
                <Typography>
                  {" "}
                  Always do the right thing to solve the customer&apos;s
                  problem.
                </Typography>
              </Box>{" "}
              <Box sx={{ display: "flex", py: 1 }}>
                {" "}
                <CheckCircleIcon sx={{ mr: 1 }} />
                <Typography>
                  {" "}
                  Perform all work with the highest level of excellence in mind.
                </Typography>
              </Box>{" "}
            </Box>
          </Box>
        </Box>
        {/* </motion.div> */}
      </Box>
      {/* WHY US  */}
      <Box sx={{ width: "100vw", minHeight: "100vh" }}>
        {/* <motion.div
          initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
          whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        > */}{" "}
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            textAlign: "justify",
          }}
        >
          <Box
            sx={{
              // mt: { xs: "8%", md: "0%" },
              height: "100%", // Full viewport height
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: 'url("/images/aboutVision-min.jpg")',
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
                {/* <motion.div
                  initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                  whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                  transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                > */}
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
                    Why Choose Us?
                  </Typography>
                </Box>
                {/* </motion.div> */}
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
                  <CheckCircleOutlineIcon
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
                      Global Material Sourcing
                    </Typography>
                    <Typography
                      sx={{
                        textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      We source premium-grade stainless steel from trusted
                      suppliers worldwide, ensuring the durability and strength
                      of every product we manufacture.
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
                  <CheckCircleOutlineIcon
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
                      Decades of Industry Expertise
                    </Typography>
                    <Typography
                      sx={{
                        textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      Our extensive knowledge allows us to deliver
                      high-performing solutions tailored to meet diverse
                      customer needs.
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
                  <CheckCircleOutlineIcon
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
                      Certified Quality Standards
                    </Typography>
                    <Typography
                      sx={{
                        textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      We adhere to the highest industry standards, ensuring
                      every product undergoes rigorous quality checks.
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
                  <CheckCircleOutlineIcon
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
                      Proven Track Record
                    </Typography>
                    <Typography
                      sx={{
                        textShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      With numerous successful projects completed, we have a
                      proven history of meeting deadlines and exceeding
                      expectations.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* </motion.div> */}
      </Box>
      {/* words from founder  */}
      <Box
        sx={{ width: "100vw", minHeight: "100vh", backgroundColor: "#fffff0" }}
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
            Words From Our Founder
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              px: 8,
              textAlign: "justify",
              fontStyle: "italic",
            }}
          >
            <Typography>
              &quot;From the beginning, I believed in building something that
              was more than just a business – I wanted PSBV Pipe and Fitting to
              be a name people could trust. Every pipe, fitting, and product
              that leaves our hands carries with it a promise of quality and a
              commitment to serve with integrity. We know our products are
              essential to your projects, big or small, and we don&apos;t take
              that responsibility lightly.&quot;
            </Typography>
            <Typography sx={{ py: 2 }}>
              {" "}
              &quot;To me, success is about more than just growth; it&apos;s
              about creating lasting relationships with our clients and
              positively impacting the communities we serve. I&apos;m incredibly
              proud of the trust our clients have placed in us, and we remain
              dedicated to earning that trust every day.&quot;
            </Typography>
            <Typography sx={{ fontWeight: "600", py: 2 }}>
              ~ Thank you for trusting PSBV Pipe and Fitting. We look forward to
              creating a lasting impact with you, our valued clients, for many
              years to come.
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "50vh", md: "60vh" },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",

                width: { xs: "80%", md: "50%" },
                height: { xs: "80%", md: "100%" },
                // boxShadow: "2px 2px 5px rgba(0,0,0,1)",
              }}
            >
              <Image
                // fill
                style={{
                  backgroundColor: "#6e6e6e",
                  borderRadius: "5px",
                  borderBottom: "10px solid black",
                  borderLeft: "10px solid black",
                  // boxShadow: "5px 5px 5px black",
                  // objectFit: "contain",
                }}
                width={200}
                height={300}
                src={"/images/PsbvFounderimgbg.png"}
              />
            </Box>
            <Typography sx={{ py: 1, fontWeight: "600" }}>
              ( Vijay Kumar Dhankar )
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Typography sx={{ fontWeight: "600", py: 1 }}>
                FOUNDER & CEO
              </Typography>
              <Typography sx={{ fontWeight: "600", p: 1 }}>
                ~ P.S.B.V. Pipe & Fitting
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutPage;
