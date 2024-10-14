"use client";
import React, { useState } from "react";
import { Typography, Box, Container, Grid, Paper, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Clients.module.css";

const clients = [
  {
    name: "ALISTAIR GROUP",
    industry: "Logistics and Transportation",
    description: "A leading provider of logistics solutions in East Africa.",
    logo: "/images/Alistair.png",
  },
  {
    name: "ASCO",
    industry: "Oil and Gas Services",
    description:
      "Global integrated materials and logistics management company.",
    logo: "/images/asco_group_logo.jpg",
  },
  {
    name: "AFRICA BOLLORE LOGISTIC",
    industry: "Logistics",
    description: "Major player in international transport and logistics.",
    logo: "/images/bollore.png",
  },
  {
    name: "EXPORT TRADING CARGO (ETC)",
    industry: "Cargo Handling",
    description: "Specializes in cargo handling and transportation services.",
    logo: "/images/etc.png",
  },
  {
    name: "EXPORT TRADING Co. LIMITED (ETG)",
    industry: "Agricultural Commodities",
    description:
      "One of the largest and fastest-growing integrated agricultural supply chain groups in Africa.",
    logo: "/images/etg.jfif",
  },
  {
    name: "SCANIA TANZANIA LIMITED",
    industry: "Automotive",
    description: "Provider of transport solutions, including trucks and buses.",
    logo: "/images/scania.jfif",
  },
  {
    name: "TANZANIA ELECTRICAL MECHANICAL ELECTRONIC AGENCY (TEMESA)",
    industry: "Government Agency",
    description:
      "Responsible for electrical, mechanical, and electronic services in Tanzania.",
    logo: "/images/TEMESA.jfif",
  },
  {
    name: "TANZANIA PACIFIC LOGISTICS LIMITED",
    industry: "Logistics",
    description: "Offers comprehensive logistics solutions in Tanzania.",
    logo: "/images/tpl.png",
  },
  {
    name: "TANZANIA PORTS AUTHORITY (TPA)",
    industry: "Port Management",
    description: "Manages all sea and inland waterway ports in Tanzania.",
    logo: "/images/tpa.jfif",
  },
  {
    name: "ZANZIBAR PORTS CORPORATION (ZPC)",
    industry: "Port Management",
    description: "Manages and operates ports in Zanzibar.",
    logo: "/images/zpc.png",
  },
];

const testimonials = [
  {
    quote:
      "Port Marine Solutions has consistently delivered top-notch services, greatly improving our port operations.",
    author: "John Doe",
    position: "Operations Manager, Tanzania Ports Authority",
  },
  {
    quote:
      "Their expertise in marine engineering has been invaluable to our projects in East Africa.",
    author: "Jane Smith",
    position: "Project Lead, ASCO",
  },
  {
    quote:
      "PMSL's training programs have significantly enhanced the skills of our workforce.",
    author: "Robert Johnson",
    position: "HR Director, Export Trading Co. Limited",
  },
];

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <>
      <Navbar />
      <Box className={styles.heroSection}>
        <Image
          src="/images/handshake.jpg"
          alt="PMSL Clients"
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
                Our Valued Clients
              </Typography>
              <Typography variant="h4" className={styles.heroSubtitle}>
                Partnering for Success Across East Africa
              </Typography>
            </motion.div>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" className={styles.mainContent}>
        <Typography variant="h2" className={styles.sectionTitle}>
          Trusted by Industry Leaders
        </Typography>
        <Grid container spacing={4}>
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Paper
                  elevation={3}
                  className={styles.clientCard}
                  onClick={() => setSelectedClient(client)}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                  <Typography variant="h6" className={styles.clientName}>
                    {client.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <AnimatePresence>
          {selectedClient && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={styles.clientDetails}
            >
              <Paper elevation={3} className={styles.clientDetailsPaper}>
                <Typography variant="h4" className={styles.clientDetailsName}>
                  {selectedClient.name}
                </Typography>
                <Typography
                  variant="h6"
                  className={styles.clientDetailsIndustry}
                >
                  {selectedClient.industry}
                </Typography>
                <Typography
                  variant="body1"
                  className={styles.clientDetailsDescription}
                >
                  {selectedClient.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setSelectedClient(null)}
                  className={styles.closeButton}
                >
                  Close
                </Button>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>

        <Box className={styles.testimonialsSection}>
          <Typography variant="h3" className={styles.sectionTitle}>
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={3} className={styles.testimonialCard}>
                  <Typography
                    variant="body1"
                    className={styles.testimonialQuote}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="h6" className={styles.testimonialAuthor}>
                    {testimonial.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.testimonialPosition}
                  >
                    {testimonial.position}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
