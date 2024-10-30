import ContactForm from "@/components/ContactForm/ContactForm";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Box>
      {/* HeroAboutSection */}
      <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Image
          src={"/images/worldTablet-min.jpg"}
          fill
          style={{ objectFit: "cover" }}
          alt="About-Entry-Page"
        />

        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
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
              Honored to earn your trust
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#fff",
                fontWeight: "500",
                mt: 2,
                width: { xs: "80%", md: "80%" },
                textAlign: "justify",
              }}
            >
              Thank you for your interest in P.S.B.V. Pipe & Fitting. Whether
              you have questions about our products, need assistance with an
              order, or simply want to learn more about how we can meet your
              piping needs, we're here to help.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#fff",
                fontWeight: "500",
                fontStyle: "italic",
                mt: 4,
                textShadow: "2px 2px 2px rgba(0,0,0,0.5)",
                width: { xs: "80%", md: "80%" },
                textAlign: "center",
              }}
            >
              "Your Queries Matter – Drop Us a Line!"
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Form  */}
      <Box sx={{ backgroundColor: "#fffff0", p: 4 }}>
        {" "}
        <ContactForm />
      </Box>
    </Box>
  );
};
export default ContactPage;
