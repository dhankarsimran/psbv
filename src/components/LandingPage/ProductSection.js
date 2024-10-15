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

const ProductSection = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#6e6e6e", width: "100vw" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",

            flexGrow: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                p: 4,
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "600",
                letterSpacing: "0.1rem",
                color: "white",
                textAlign: "center",
                textShadow: "2px 2px 5px rgba(0,0,0,1)",
              }}
            >
              Top-Selling Solutions for Every Need
            </Typography>
          </Box>{" "}
          <Grid container>
            <Grid item xs={12} md={4}>
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
                      height="140"
                      image="/images/psbvpipe.jpg"
                      alt="Steel Pipe"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Premium Steel Pipes
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#54595f" }}>
                        Trusted for strength and corrosion resistance, our
                        stainless steel pipes are ideal for both industrial and
                        residential applications.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        "&:hover": {
                          color: "black",
                          backgroundColor: "#9eef0a",
                          boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                        },
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
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
                      height="140"
                      image="/images/psbvroundbar.jpg"
                      alt="Round Bars"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        High Quality Round-bars
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#54595f" }}>
                        Designed to withstand the toughest environments, our
                        roundbars are perfect for high-pressure installations.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        "&:hover": {
                          color: "black",
                          backgroundColor: "#9eef0a",
                          boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                        },
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
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
                      height="140"
                      image="/images/psbvfittings.jpg"
                      alt="Pipe Fittings"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Heavy-Duty Pipe Fittings
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#54595f" }}>
                        Our top-selling pipe fittings ensure secure, tight,
                        compatible and leak-proof connections in any piping
                        system.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        "&:hover": {
                          color: "black",
                          backgroundColor: "#9eef0a",
                          boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
                        },
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Box>{" "}
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ textAlign: "center" }}>
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
            View All Products
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default ProductSection;