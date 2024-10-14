"use client";
import React, { useRef, useEffect, useState } from "react";
import { Typography, Box, Card, CardContent, Grid, Icon } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import styles from "../styles/ClientSuccessMap.module.css";

const clientSuccesses = [
  {
    id: 1,
    client: "Tanzania Ports Authority",
    project: "Dar es Salaam Port Expansion",
    outcome:
      "Increased cargo handling capacity by 25% and reduced vessel waiting time by 30%",
    icon: <BuildIcon />,
    location: [-6.8235, 39.2695],
  },
  {
    id: 2,
    client: "Kenya Ports Authority",
    project: "Mombasa Port Modernization",
    outcome:
      "Implemented automated systems, improving efficiency by 40% and reducing operating costs by 15%",
    icon: <SpeedIcon />,
    location: [-4.0435, 39.6682],
  },
  {
    id: 3,
    client: "Djibouti Ports & Free Zones Authority",
    project: "Doraleh Container Terminal Upgrade",
    outcome:
      "Enhanced terminal operations, increasing throughput by 35% and reducing turnaround times by 20%",
    icon: <TrendingUpIcon />,
    location: [11.6025, 43.1542],
  },
];

export default function ClientSuccessMap() {
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    import("../MapComponent").then((mod) => {
      setMapComponent(() => mod.default);
    });
  }, []);

  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Typography variant="h2" className={styles.title}>
          Client Success Stories
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className={styles.mapContainer}>
              {MapComponent && (
                <MapComponent clientSuccesses={clientSuccesses} />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={styles.successCards}>
              {clientSuccesses.map((success) => (
                <Card key={success.id} className={styles.successCard}>
                  <CardContent>
                    <Box className={styles.iconContainer}>
                      <Icon className={styles.icon}>{success.icon}</Icon>
                    </Box>
                    <Typography variant="h5" className={styles.clientName}>
                      {success.client}
                    </Typography>
                    <Typography variant="h6" className={styles.projectName}>
                      {success.project}
                    </Typography>
                    <Typography variant="body1" className={styles.outcome}>
                      {success.outcome}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
