"use client";
import React, { useState, useEffect } from "react";
import { Typography, Container, Box, Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCards from "./components/ServiceCards";
import AnimatedInfographics from "./components/AnimatedInfographics";
import Footer from "./components/Footer";
import styles from "./styles/Home.module.css";
import YoutubeContent from "./components/YoutubeContent";

export default function Home() {
  const [ClientSuccessMap, setClientSuccessMap] = useState(null);

  useEffect(() => {
    import("./components/ClientSuccessMap").then((mod) => {
      setClientSuccessMap(() => mod.default);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <ServiceCards />

      {ClientSuccessMap && <ClientSuccessMap />}

      <AnimatedInfographics />

      <Container maxWidth="lg" className={styles.whyChooseUs}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          className={styles.sectionTitle}
        >
          Why Choose Port Marine Solutions?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          align="center"
          className={styles.sectionText}
        >
          With over a decade of experience in the East African market, we offer
          competitive and innovative engineering solutions tailored to your
          needs. Our commitment to excellence and customer satisfaction sets us
          apart in the marine engineering industry.
        </Typography>
        <Box className={styles.ctaContainer}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            className={styles.ctaButton}
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            href="/about"
            className={styles.ctaButton}
          >
            Learn More
          </Button>
        </Box>
      </Container>

      <YoutubeContent />

      <Footer />
    </>
  );
}
