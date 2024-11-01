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
import Grid from "@mui/material/Grid";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fffff0" }}>
      <Box sx={{ px: { xs: 4, md: 8 }, backgroundColor: "#fffff0" }}>
        <Box>
          <Typography
            sx={{
              p: 4,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: "600",
              letterSpacing: "0.1rem",
              color: "#9eef0a",
              textShadow: "2px 2px 5px rgba(0,0,0,1)",
              textAlign: "center",
            }}
          >
            Our Products
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
            Our product range is crafted to meet the rigorous standards of
            diverse industries, from construction and plumbing to industrial
            machinery. Each item in our collection is precision-engineered,
            ensuring optimal performance and longevity. Whether you need robust
            pipes for heavy-duty applications or high-quality fittings for
            custom installations, we are committed to providing solutions that
            meet your specific needs. Explore our catalog to find the products
            that define excellence in craftsmanship and functionality.
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "start",
              py: 4,
              fontSize: { xs: "1.3rem", md: "2rem" },
              color: "#6e6e6e",
              fontWeight: "600",

              //   textAlign: "end",
            }}
          >
            What can we help you with?
          </Typography>
        </Box>
      </Box>
      <Box sx={{ px: 4 }}>
        {" "}
        <Grid container>
          <Grid item xs={12} md={4}>
            {/* <motion.div
                initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              > */}
            <Box>
              {" "}
              <Card
                sx={{
                  maxWidth: 345,
                  m: 4,
                  mx: { xs: "auto", md: 4 },

                  boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  transition: "all 0.7s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/images/carousel12-min.jpg"
                    alt="Steel Pipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Carbon Steel Pipes
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: "#54595f" }}>
                      Trusted for strength and corrosion resistance, our
                      stainless steel pipes are ideal for both industrial and
                      residential applications.
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <motion.div
                initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              > */}
            <Box>
              {" "}
              <Card
                sx={{
                  maxWidth: 345,
                  m: 4,
                  mx: { xs: "auto", md: 4 },

                  boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  transition: "all 0.7s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/images/psbvsteel2-min.jpg"
                    alt="Steel Pipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Alloy Steel Pipes
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: "#54595f" }}>
                      Trusted for strength and corrosion resistance, our
                      stainless steel pipes are ideal for both industrial and
                      residential applications.
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <motion.div
                initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              > */}
            <Box>
              {" "}
              <Card
                sx={{
                  maxWidth: 345,
                  m: 4,
                  mx: { xs: "auto", md: 4 },

                  boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  transition: "all 0.7s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/images/psbvpipe-min.jpg"
                    alt="Steel Pipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Stainless Steel Pipes
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: "#54595f" }}>
                      Trusted for strength and corrosion resistance, our
                      stainless steel pipes are ideal for both industrial and
                      residential applications.
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <motion.div
                initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              > */}
            <Box>
              {" "}
              <Card
                sx={{
                  maxWidth: 345,
                  m: 4,
                  mx: { xs: "auto", md: 4 },

                  boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  transition: "all 0.7s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/images/carousel31-min.jpg"
                    alt="Steel Pipe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Hollow Blooms
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: "#54595f" }}>
                      Trusted for strength and corrosion resistance, our
                      stainless steel pipes are ideal for both industrial and
                      residential applications.
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <motion.div
                initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              > */}
            <Box>
              {" "}
              <Card
                sx={{
                  maxWidth: 345,
                  m: 4,
                  mx: { xs: "auto", md: 4 },
                  boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  transition: "all 0.7s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/images/psbvroundbar-min.jpg"
                    alt="Round Bars"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      High Quality Round-bars
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* <motion.div
                initial={{ opacity: 0, y: 80 }} // Starts off invisible and 50px lower
                whileInView={{ opacity: 1, y: 0 }} // Becomes visible and moves up to normal position
                transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              > */}
            <Box>
              {" "}
              <Card
                sx={{
                  maxWidth: 345,
                  m: 4,
                  mx: { xs: "auto", md: 4 },
                  boxShadow: "5px 5px 5px rgba(0,0,0,0.7)",
                  transition: "all 0.7s ease",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/images/psbvfittings-min.jpg"
                    alt="Pipe Fittings"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Heavy-Duty Pipe Fittings
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>{" "}
            {/* </motion.div> */}
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Link href="/contact">
            <Button
              variant="contained"
              sx={{
                py: 1,
                backgroundColor: " #9eef0a",
                color: "black",
                borderRadius: "2px",
                boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                my: 4,
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "#9eef0a",
                  boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                },
              }}
            >
              Let&apos;s Connect
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsPage;
