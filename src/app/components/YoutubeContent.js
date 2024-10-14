"use client";
import React from "react";
import YouTube from "react-youtube";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "../styles/YoutubeContent.module.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "rgba(255, 255, 255, 0.9)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
  },
}));

const videoIds = ["biCPn_qOVbY", "biCPn_qOVbY"];

const videoDescriptions = [
  "Experience the power of Port Marine Solutions' cutting-edge technology and expertise in action. This video showcases our state-of-the-art port operations and marine engineering solutions, demonstrating how we're revolutionizing the industry across East Africa.",
  "Dive into the world of advanced marine engineering with Port Marine Solutions. This insightful video highlights our innovative approaches to port management, cargo handling, and maritime infrastructure development, showcasing our commitment to efficiency and sustainability.",
];

export default function YoutubeContent() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Discover Our Expertise
      </Typography>
      <Grid container spacing={4}>
        {videoIds.map((videoId, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledPaper elevation={3}>
              <YouTube videoId={videoId} opts={opts} className={styles.video} />
              <Typography variant="body1" className={styles.description}>
                {videoDescriptions[index]}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
