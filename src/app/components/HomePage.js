"use client";

import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="text.primary"
                gutterBottom
              >
                Port Marine Solutions
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Your trusted partner in mechanical and marine engineering
                solutions. We provide innovative and competitive services for
                the East African market.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href="/services"
                  sx={{ mr: 2 }}
                >
                  Our Services
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  href="/contact"
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/hero-image.jpg"
                alt="Port Marine Solutions"
                width={600}
                height={400}
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Services Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Our Featured Services
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Add 3-4 featured services here */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Mechanical Engineering
              </Typography>
              <Typography color="text.secondary">
                Comprehensive mechanical engineering solutions for various
                industries.
              </Typography>
            </Grid>
            {/* Repeat for other services */}
          </Grid>
        </Container>
      </Box>

      {/* About Us Preview Section */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            About Port Marine Solutions
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
          >
            Founded in 2014, Port Marine Solutions has been at the forefront of
            providing innovative engineering solutions for the East African
            market. Our commitment to quality and service has made us a trusted
            partner in the industry.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              href="/about"
            >
              Learn More About Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
