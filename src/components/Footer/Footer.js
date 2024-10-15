import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.7)",
          p: 2,
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        <Box
          sx={{
            borderBottom: "2px solid white",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              p: 4,
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "600",
              letterSpacing: "0.1rem",
              color: "#9eef0a",
              textShadow: "2px 2px 5px rgba(0,0,0,1)",
            }}
          >
            P.S.B.V. Pipe & Fitting
          </Typography>
        </Box>
        <Box sx={{ display: "flex", m: { xs: 1, md: 4 } }}>
          <Box
            sx={{
              width: "50%",
              borderRight: "2px  solid white",
            }}
          >
            <Box sx={{ pb: 2 }}>
              {" "}
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                  color: "#9eef0a",
                  textShadow: "2px 2px 5px rgba(0,0,0,1)",
                }}
              >
                Address:
              </Typography>
              <Typography sx={{ width: { xs: "90%", md: "60%" } }}>
                Plot No. 3, Shop No. 1, Thakur Complex, Opp. Escort Heroin,
                Mujessar, Faridabad – 121005, Haryana INDIA
              </Typography>
            </Box>
            <Box sx={{ pb: 2 }}>
              {" "}
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                  color: "#9eef0a",
                  textShadow: "2px 2px 5px rgba(0,0,0,1)",
                }}
              >
                Call Us:
              </Typography>
              <Typography>+91 9899575061</Typography>
            </Box>
            <Box sx={{ pb: 2 }}>
              {" "}
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                  color: "#9eef0a",
                  textShadow: "2px 2px 5px rgba(0,0,0,1)",
                }}
              >
                Mail us:
              </Typography>
              <Typography>psbv73@gmail.com</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              pl: 2,
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              width: "50%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: "600",
                letterSpacing: "0.1rem",
                color: "#9eef0a",
                textShadow: "2px 2px 5px rgba(0,0,0,1)",
              }}
            >
              Business Hours:
            </Typography>
            <Typography sx={{ pb: 1 }}>MON : 09.30 – 06.00 </Typography>

            <Typography sx={{ pb: 1 }}>TUE : 09.30 – 06.00 </Typography>
            <Typography sx={{ pb: 1 }}>WED : 09.30 – 06.00 </Typography>
            <Typography sx={{ pb: 1 }}>THU : 09.30 – 06.00 </Typography>
            <Typography sx={{ pb: 1 }}>FRI : 09.30 – 06.00 </Typography>
            <Typography sx={{ pb: 1 }}>SAT : 09.30 – 06.00 </Typography>
            <Typography sx={{ pb: 1 }}>SUN : Closed...</Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <FacebookIcon sx={{ fontSize: "2rem", m: 2, cursor: "pointer" }} />
          <XIcon sx={{ fontSize: "2rem", m: 2, cursor: "pointer" }} />
          <LinkedInIcon sx={{ fontSize: "2rem", m: 2, cursor: "pointer" }} />
        </Box>
        <Box sx={{ textAlign: "center", borderTop: "1px solid white", pt: 2 }}>
          Copyright &copy; 2024 P.S.B.V. Pipe & Fitting
        </Box>
      </Box>
    </>
  );
};
export default Footer;
