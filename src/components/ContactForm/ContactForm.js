"use client";
import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    comment: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          companyName: "",
          phoneNumber: "",
          email: "",
          comment: "",
        });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography
        sx={{
          fontSize: { xs: "3rem", md: "3rem" },
          color: "#9eef0a",
          textShadow: "2px 2px 2px rgba(0,0,0,0.5)",
          fontWeight: "600",
        }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          required
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#9eef0a", // Change border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#9eef0a", // Change label color when focused
              },
            },
          }}
        />
        <TextField
          label="Company Name"
          name="companyName"
          fullWidth
          margin="normal"
          value={formData.companyName}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#9eef0a", // Change border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#9eef0a", // Change label color when focused
              },
            },
          }}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          required
          fullWidth
          margin="normal"
          value={formData.phoneNumber}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#9eef0a", // Change border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#9eef0a", // Change label color when focused
              },
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          required
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#9eef0a", // Change border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#9eef0a", // Change label color when focused
              },
            },
          }}
        />
        <TextField
          label="Comment"
          name="comment"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.comment}
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#9eef0a", // Change border color when focused
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#9eef0a", // Change label color when focused
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            py: 1,
            my: 2,
            backgroundColor: " #9eef0a",
            color: "black",
            borderRadius: "2px",
            boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",

            transition: "all 0.4s ease",
            "&:hover": {
              transform: "scale(1.1)",
              backgroundColor: "#9eef0a",
              boxShadow: " 5px 5px 5px rgba(0,0,0,0.7)",
            },
          }}
          fullWidth
        >
          Let&apos;s Connect
        </Button>
      </Box>
      {status && (
        <Typography variant="body2" color="textSecondary" mt={2}>
          {status}
        </Typography>
      )}
    </Container>
  );
};
export default ContactForm;
