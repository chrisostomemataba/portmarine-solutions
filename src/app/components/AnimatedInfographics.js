"use client";
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "../styles/AnimatedInfographics.module.css";

const statistics = [
  {
    value: 95,
    label: "Client Satisfaction",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    ),
  },
  {
    value: 30,
    label: "Efficiency Increase",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"
        />
      </svg>
    ),
  },
  {
    value: 1000,
    label: "Tons Lift Capacity",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.icon}>
        <path
          fill="currentColor"
          d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
        />
      </svg>
    ),
  },
];

function StatisticCard({ statistic }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={styles.statCard}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.iconContainer}>{statistic.icon}</div>
      <Typography variant="h3" className={styles.statValue}>
        {inView && <CountUp end={statistic.value} duration={2.5} />}
      </Typography>
      <Typography variant="h6" className={styles.statLabel}>
        {statistic.label}
      </Typography>
    </motion.div>
  );
}

export default function AnimatedInfographics() {
  return (
    <Box className={styles.infographicsContainer}>
      <Typography variant="h2" className={styles.sectionTitle}>
        Our Impact
      </Typography>
      <Grid container spacing={4}>
        {statistics.map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StatisticCard statistic={stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
