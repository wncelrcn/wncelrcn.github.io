"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#4DB4D7",
  textTransform: "uppercase",
  letterSpacing: "5px",
  marginBottom: "1rem",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "3.5rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.2rem",
  color: "#666",
  marginBottom: "3rem",
  maxWidth: "1000px",
}));

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box>
        <SectionTitle>PROJECTS</SectionTitle>
        <MainTitle>Projects I've Made</MainTitle>
        <SubTitle>
          I did all sorts of projects – from building dynamic web apps to
          exploring machine learning algorithms.
        </SubTitle>
      </Box>
    </Container>
  );
}
