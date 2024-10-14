"use client";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  LocalShipping,
  DirectionsBoat,
  LocalGasStation,
  School,
  Build,
  GetApp,
} from "@mui/icons-material";
import styles from "../styles/Services.module.css";

const serviceCategories = [
  {
    icon: <LocalShipping />,
    title: "Port & Cargo Services",
    color: "#023047",
    content:
      "PMSL provides a full range of services for cargo and port terminals across Tanzania. Our quality standards are unmatched in the industry, offering machinery that moves cargo quickly, safely, and efficiently. We provide innovative features like economical and environmentally compatible drive systems from world-renowned manufacturers. Our approach to service is simple: a single, responsive point of contact to address all your needs and serve as your go-to expert. We understand the importance of quick response and uptime for your operations.",
  },
  {
    icon: <DirectionsBoat />,
    title: "Marine Solutions",
    color: "#219ebc",
    content:
      "PMSL offers a wide range of solutions for all types of marine vessels, on-shore and off-shore marine equipment across Tanzania. We provide solutions for marine engines, spare parts, liferafts, and life jackets. Our navaids products include aid to navigation, all types of buoys, remote monitoring control, oceanography tsunami equipment, and more. We also offer services for marine propulsion systems for vessels of all sizes and types, specializing in the development, design, production, and marketing of azimuthing propulsion and maneuvering systems.",
  },
  {
    icon: <LocalGasStation />,
    title: "Oil & Gas Services",
    color: "#ffb703",
    content:
      "PMSL provides a range of services to the oil and gas sector, including surface and offshore services for producers focused on drilling, producing gas, and associated gas services. With multi-discipline expertise, we offer services for instrumentation, mechanical, fluid connector, filtration systems, automation, pipeline, and safety works standard parts. We can provide services for all rigging items such as slings, shackles, bulldog clips, safety gear, and much more.",
  },
  {
    icon: <School />,
    title: "Training Programs",
    color: "#8ecae6",
    content:
      "In partnership with Global Port Training (GPT), PMSL provides tailor-made training programs to equip personnel with the necessary knowledge and skills for safe and efficient port operations. Our training programs include General Training Manual Lifting, Port Operations, Lashing & Securing, Forklift Operations, Crane Operations, and Safety and Communication. These trainings can be facilitated locally and internationally, depending on our customer requirements.",
  },
  {
    icon: <Build />,
    title: "Special Services",
    color: "#fb8500",
    content:
      "PMSL offers special services including preventative maintenance, field breakdown service, fully equipped fleet services, high-level manufacturer technical support, major annual detailed inspections & refurbishment, and hydraulic hose repair and replacement. We also provide high-end diagnostic tools for Heavy Duty Trucks, Reach Stackers, Empty Handlers, Forklifts, and Cranes. Our devices are based on the Android system and offer online reporting capabilities. We recommend genuine replacement parts to maximize equipment value, optimize productivity, and extend lifespan. Our parts come with a one-year warranty and are backed by our world-class Parts Distribution Centre.",
  },
];

const trainingPrograms = [
  "General Training Manual Lifting",
  "Port Operations",
  "Lashing & Securing",
  "Forklift Operations",
  "Crane Operations",
  "Safety and Communication",
];

const BentoGrid = () => (
  <div className={styles.bentoGrid}>
    <div className={styles.bentoItem1}>
      <Image
        src="/images/bento1.jpg"
        alt="Logistics 1"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.bentoItem2}>
      <Image
        src="/images/bento2.jpg"
        alt="Logistics 2"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.bentoItem3}>
      <Image
        src="/images/bento3.jpg"
        alt="Logistics 3"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.bentoItem4}>
      <Image
        src="/images/logistics-worker.jpg"
        alt="Logistics Worker"
        layout="fill"
        objectFit="cover"
      />
    </div>
  </div>
);

export default function ServicesPage() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (index) => {
    setOpenModal(index);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <>
      <Navbar />
      <Box className={styles.heroSection}>
        <Image
          src="/images/port0.jpg"
          alt="Port Services"
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
                Our Services
              </Typography>
              <Typography variant="h4" className={styles.heroSubtitle}>
                Comprehensive Solutions for Marine and Port Industries
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<GetApp />}
                className={styles.downloadBtn}
                href="/documents/company-profile.pdf"
                download
              >
                Download Company Profile
              </Button>
            </motion.div>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" className={styles.mainContent}>
        <Grid container spacing={4}>
          {serviceCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  className={styles.categoryCard}
                  style={{ borderColor: category.color }}
                >
                  <Box
                    className={styles.iconWrapper}
                    style={{ backgroundColor: category.color }}
                  >
                    {category.icon}
                  </Box>
                  <Typography variant="h5" className={styles.categoryTitle}>
                    {category.title}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={styles.learnMoreBtn}
                    onClick={() => handleOpenModal(index)}
                  >
                    Learn More
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className={styles.section}>
          <Typography variant="h3" className={styles.sectionTitle}>
            Our Training Programs
          </Typography>
          <Box className={styles.hexGrid}>
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                className={styles.hexItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Typography variant="body1">{program}</Typography>
              </motion.div>
            ))}
          </Box>
        </Box>

        <Box className={styles.section}>
          <Typography variant="h3" className={styles.sectionTitle}>
            Our Training Facilities
          </Typography>
          <BentoGrid />
        </Box>
      </Container>

      {serviceCategories.map((category, index) => (
        <Dialog
          open={openModal === index}
          onClose={handleCloseModal}
          key={index}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle className={styles.modalTitle}>
            {category.title}
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" className={styles.modalContent}>
              {category.content}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ))}

      <Footer />
    </>
  );
}
