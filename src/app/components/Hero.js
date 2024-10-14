"use client";
import React, { useState, useEffect } from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

const slideImages = [
  "/images/hero-background.jpg",
  "/images/hero-backgound2.jpg",
  "/images/oil.jpg",
  "/images/oil2.jpg",
  "/images/oil3.jpg",
];

const heroContent = [
  {
    title: "Engineering Excellence in East Africa",
    subtitle: "Innovative Solutions for Mechanical and Marine Industries",
    description:
      "Port Marine Solutions: Your trusted partner in developing the East African market with competitive engineering solutions since 2014.",
  },
  {
    title: "Powering Progress in Ports and Beyond",
    subtitle: "From Automation to Heavy-Duty Machinery",
    description:
      "Experience our world-class service support for heavy duty mechanical lifting equipment and marine engineering solutions.",
  },
  {
    title: "Fueling the Future of Oil and Gas",
    subtitle: "Expertise Across the Supply Chain",
    description:
      "PMSL offers cutting-edge solutions and support for the oil and gas industry, ensuring efficiency and reliability.",
  },
  {
    title: "Comprehensive Marine Engineering",
    subtitle: "Navigating Challenges, Delivering Results",
    description:
      "Our team of experts provides innovative solutions for all aspects of marine engineering, from design to implementation.",
  },
  {
    title: "Driving Efficiency in Port Operations",
    subtitle: "Streamlined Processes, Enhanced Productivity",
    description:
      "PMSL's advanced port operation services ensure smooth, efficient, and cost-effective management of your maritime facilities.",
  },
];

const slideAnimation = keyframes`
  0% { opacity: 0; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
`;

const ParallaxContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
}));

const SlideImage = styled(Image)({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
  animation: `${slideAnimation} 1s ease-in-out`,
});

const ContentContainer = styled(Container)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.common.white,
  position: "relative",
  zIndex: 2,
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Roboto Slab', serif",
  fontWeight: 500,
  marginBottom: theme.spacing(3),
  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
}));

const HeroDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "'Lato', sans-serif",
  marginBottom: theme.spacing(4),
  maxWidth: "600px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 700,
  padding: theme.spacing(1, 4),
}));

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ParallaxContainer className={styles.parallax}>
      <SlideImage
        src={slideImages[currentSlide]}
        alt={`Port Marine Solutions - ${heroContent[currentSlide].title}`}
        layout="fill"
        priority
        className={styles.parallax}
      />
      <ContentContainer maxWidth="lg">
        <HeroTitle variant="h1" component="h1">
          {heroContent[currentSlide].title}
        </HeroTitle>
        <HeroSubtitle variant="h4" component="h2">
          {heroContent[currentSlide].subtitle}
        </HeroSubtitle>
        <HeroDescription variant="body1">
          {heroContent[currentSlide].description}
        </HeroDescription>
        <Box>
          <StyledButton
            variant="contained"
            color="secondary"
            size="large"
            href="/services"
          >
            Explore Our Services
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="primary"
            size="large"
            sx={{ ml: 2 }}
            href="/contact"
          >
            Contact Us
          </StyledButton>
        </Box>
      </ContentContainer>
    </ParallaxContainer>
  );
}
