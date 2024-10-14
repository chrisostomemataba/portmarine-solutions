"use client";
import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, LinkedIn } from "@mui/icons-material";
import { Send, Phone, Email, LocationOn } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Contact.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    import("./MapComponent").then((mod) => {
      setMapComponent(() => mod.default);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSnackbar({ open: true, message: "Message sent successfully!" });
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          throw new Error("Failed to send message");
        }
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again.",
        });
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Navbar />
      <Box className={styles.heroSection}>
        <Image
          src="/images/customer-service.jpeg"
          alt="Customer Service"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.heroImage}
        />
        <Box className={styles.heroOverlay}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h1" className={styles.heroTitle}>
                Contact Us
              </Typography>
              <Typography variant="h4" className={styles.heroSubtitle}>
                One Stop Shop for Port Equipment, Spare Parts & Marine Solutions
              </Typography>
            </motion.div>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" className={styles.mainContent}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={styles.formPaper}>
              <Typography variant="h5" className={styles.formTitle}>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={!!formErrors.name}
                  helperText={formErrors.name}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  error={!!formErrors.message}
                  helperText={formErrors.message}
                  margin="normal"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<Send />}
                  className={styles.submitButton}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={styles.contactInfoPaper}>
              <Typography variant="h5" className={styles.contactInfoTitle}>
                Contact Information
              </Typography>
              <Box className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <Typography>+255 22 2112090 / +255 754 050505</Typography>
              </Box>
              <Box className={styles.contactItem}>
                <Email className={styles.contactIcon} />
                <Typography>info@portmarinesolutions.com</Typography>
              </Box>
              <Box className={styles.contactItem}>
                <LocationOn className={styles.contactIcon} />
                <Typography>
                  Plot / House No: 72/11, Gerezani, Dar Es Salaam, Tanzania
                </Typography>
              </Box>
              <Box className={styles.socialLinks}>
                <IconButton
                  className={styles.facebookIcon}
                  href="https://www.facebook.com/portmarinesolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  className={styles.linkedinIcon}
                  href="https://www.linkedin.com/company/port-marine-solutions-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box className={styles.mapSection}>
        <Container maxWidth="lg">
          <Typography variant="h5" className={styles.mapTitle}>
            Our Location
          </Typography>
          <div className={styles.mapContainer}>
            {MapComponent && <MapComponent />}
          </div>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />

      <Footer />
    </>
  );
};

export default ContactPage;
