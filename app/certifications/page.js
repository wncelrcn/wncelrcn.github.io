"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CertificationBox from "@/components/CertificationBox";

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

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
  marginTop: "3rem",
}));

const ScrollableRow = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  paddingBottom: "1.5rem",
  maxWidth: "100%",
  justifyContent: "center",
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#4DB4D7",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#3a8daa",
  },
  [theme.breakpoints.down("sm")]: {
    overflowX: "hidden",
  },
}));

const FixedWidthContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 320px)",
  gap: "1.5rem",
  minWidth: "calc(3 * 320px + 2 * 1.5rem)",
  margin: "0 auto",
  marginTop: "1rem",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(3, 320px)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 320px)",
    minWidth: "calc(2 * 320px + 1.5rem)",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    minWidth: "unset",
    width: "100%",
    maxWidth: "320px",
  },
}));

// Sample certification data (replace with your actual data)
const mlCertifications = [
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
];

const cloudCertifications = [
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl: "#",
  },
];

export default function Certifications() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Box>
        <SectionTitle>CERTIFICATIONS</SectionTitle>
        <MainTitle>Licenses & Certifications</MainTitle>
        <SubTitle>
          Recognized credentials that validate my skills and ongoing commitment
          to professional development.
        </SubTitle>
      </Box>

      <Box>
        <CategoryTitle>MACHINE LEARNING CERTIFICATIONS</CategoryTitle>
        <ScrollableRow>
          <FixedWidthContainer>
            {mlCertifications.map((cert, index) => (
              <CertificationBox
                key={index}
                title={cert.title}
                organization={cert.organization}
                certificateUrl={cert.certificateUrl}
              />
            ))}
          </FixedWidthContainer>
        </ScrollableRow>

        <CategoryTitle>CLOUD COMPUTING CERTIFICATIONS</CategoryTitle>
        <ScrollableRow>
          <FixedWidthContainer>
            {cloudCertifications.map((cert, index) => (
              <CertificationBox
                key={index}
                title={cert.title}
                organization={cert.organization}
                certificateUrl={cert.certificateUrl}
              />
            ))}
          </FixedWidthContainer>
        </ScrollableRow>
      </Box>
    </Container>
  );
}
