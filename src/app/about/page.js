"use client";
import React from "react";
import { Typography, Box, Container, Grid, Paper, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { Build, Speed, EmojiPeople, Loyalty } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

const stats = [
  { value: "2014", label: "Founded" },
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Countries Served" },
  { value: "100+", label: "Satisfied Clients" },
];

const values = [
  {
    icon: <Build />,
    title: "Innovation",
    description: "Constantly seeking new and improved engineering solutions",
  },
  {
    icon: <Speed />,
    title: "Efficiency",
    description:
      "Optimizing operations to maximize productivity and minimize costs",
  },
  {
    icon: <EmojiPeople />,
    title: "Expertise",
    description: "Highly skilled team with extensive industry knowledge",
  },
  {
    icon: <Loyalty />,
    title: "Reliability",
    description: "Committed to delivering high-quality services consistently",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Box className={styles.heroSection}>
        <Image
          src="/images/marine-workers.jpg"
          alt="Marine Workers"
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
                About Port Marine Solutions
              </Typography>
              <Typography variant="h4" className={styles.heroSubtitle}>
                Navigating the Future of Marine Engineering
              </Typography>
            </motion.div>
          </Container>
        </Box>
      </Box>

      <Box className={styles.aboutContainer}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="h2" className={styles.sectionTitle}>
              Our Journey
            </Typography>
            <Typography variant="body1" className={styles.sectionText}>
              Since 2014, Port Marine Solutions has been at the forefront of
              marine engineering innovation in East Africa. Our journey is
              marked by a relentless pursuit of excellence, driven by our
              passion for transforming port operations and marine
              infrastructure.
            </Typography>
          </motion.div>

          <Grid container spacing={4} className={styles.section}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography variant="h4" className={styles.subsectionTitle}>
                  Our Story
                </Typography>
                <Typography variant="body1" className={styles.subsectionText}>
                  Port Marine Solutions Limited (PMSL) was formed in 2014 with a
                  vision to offer specific and highly competitive engineering
                  solutions for the developing East African market. With over a
                  decade of experience in the major port and marine
                  infrastructure growth in Tanzania and East Africa, we have
                  witnessed and been part of the vibrant growth in demand
                  towards the services PMSL offers.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Image
                  src="/images/port-operations.jpg"
                  alt="Port Operations"
                  width={600}
                  height={400}
                  layout="responsive"
                  className={styles.image}
                />
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={4} className={styles.section}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Typography variant="h4" className={styles.subsectionTitle}>
                  Our Mission
                </Typography>
                <Typography variant="body1" className={styles.subsectionText}>
                  To become the most competent and trusted business enterprise
                  enabling mechanical and marine engineering industries to
                  operate at maximum capacity. We strive for excellence in
                  everything we do, constantly innovating our services to meet
                  the demands of a highly competitive market.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Typography variant="h4" className={styles.subsectionTitle}>
                  Our Vision
                </Typography>
                <Typography variant="body1" className={styles.subsectionText}>
                  To be an East African supply chain provider proposing secured
                  "intelligent" and "alternative" 360° solutions to our
                  customers, and being recognized as excellent in the eyes of
                  customers, employees, and other important stakeholders of the
                  organization.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className={styles.section}
          >
            <Typography variant="h4" className={styles.sectionTitle}>
              Our Values
            </Typography>
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper elevation={3} className={styles.valuePaper}>
                    <Avatar className={styles.valueIcon}>{value.icon}</Avatar>
                    <Typography variant="h6" className={styles.valueTitle}>
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.valueDescription}
                    >
                      {value.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className={styles.section}
          >
            <Typography variant="h4" className={styles.sectionTitle}>
              PMSL by the Numbers
            </Typography>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Paper elevation={3} className={styles.statPaper}>
                    <Typography variant="h3" className={styles.statValue}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" className={styles.statLabel}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
