"use client";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styles from "../styles/ServiceCards.module.css";

const services = [
  {
    title: "Marine Engineering",
    description:
      "Cutting-edge solutions for all marine engineering challenges.",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M20,21C20,21.55 19.55,22 19,22H5C4.45,22 4,21.55 4,21V9H20V21M6,11V19H8V11H6M10,11V19H12V11H10M14,11V19H16V11H14M18,11V19H20V11H18M20,7H4C3.45,7 3,6.55 3,6C3,5.45 3.45,5 4,5H20C20.55,5 21,5.45 21,6C21,6.55 20.55,7 20,7Z"
        />
      </svg>
    ),
  },
  {
    title: "Port Operations",
    description: "Optimizing port efficiency with advanced management systems.",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"
        />
      </svg>
    ),
  },
  {
    title: "Heavy Lifting",
    description: "Expert handling of heavy-duty mechanical lifting equipment.",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M19.5,14.5V9.5H18V5H15V9.5H13.5V5H10.5V9.5H9V5H6V9.5H4.5V14.5H6V19H9V14.5H10.5V19H13.5V14.5H15V19H18V14.5H19.5M21,16A2,2 0 0,1 19,18H5A2,2 0 0,1 3,16V8A2,2 0 0,1 5,6H19A2,2 0 0,1 21,8V16Z"
        />
      </svg>
    ),
  },
  {
    title: "Oil & Gas",
    description: "Comprehensive solutions for the oil and gas supply chain.",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.94L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.06L8.12,8.11M6.5,12V13H5V12H6.5Z"
        />
      </svg>
    ),
  },
];

function ServiceCard({ service }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconContainer}>{service.icon}</div>
      <Typography variant="h5" className={styles.serviceTitle}>
        {service.title}
      </Typography>
      <Typography variant="body2" className={styles.serviceDescription}>
        {service.description}
      </Typography>
    </motion.div>
  );
}

export default function ServiceCards() {
  return (
    <Box className={styles.serviceCardsContainer}>
      <Typography variant="h2" className={styles.sectionTitle}>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
