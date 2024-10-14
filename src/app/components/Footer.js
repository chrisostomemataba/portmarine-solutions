"use client";
import React from "react";
import { Typography, Box, Grid, Container, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const partnerLogos = [
  { src: "/images/logo1.jpg", alt: "Partner 1" },
  { src: "/images/logo three.jpg", alt: "Partner 3" },
  { src: "/images/logo four.png", alt: "Partner 4" },
  { src: "/images/gpt.jpg", alt: "GPT" },
  { src: "/images/konecrane.png", alt: "Konecrane" },
  { src: "/images/smag_logo_peiner.gif", alt: "SMAG Peiner" },
];

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: LinkedIn, href: "#" },
  { Icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className={styles.sectionTitle}>
              Our Partners
            </Typography>
            <Typography variant="body1" className={styles.partnerText}>
              PMSL collaborates with multi-disciplinary partners to offer a wide
              range of services.
            </Typography>
            <Box className={styles.partnerLogos}>
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={50}
                    objectFit="contain"
                  />
                </motion.div>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" className={styles.sectionTitle}>
              Connect with Us
            </Typography>
            <Box className={styles.socialIcons}>
              {socialIcons.map(({ Icon, href }, index) => (
                <SocialIconButton
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </SocialIconButton>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" className={styles.sectionTitle}>
              Contact Us
            </Typography>
            <Typography variant="body1" className={styles.contactInfo}>
              P.O. Box 20966, Plot / House No: 72/11
              <br />
              Gerezani, Dar Es Salaam, Tanzania
              <br />
              Tel: +255 22 2112090
              <br />
              Cell: +255 754 050505
              <br />
              Email: info@portmarinesolutions.com
            </Typography>
          </Grid>
        </Grid>
        <Box className={styles.copyright}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Port Marine Solutions Limited. All
            rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
