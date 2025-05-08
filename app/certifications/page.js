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

const mlCertifications = [
  {
    title: "Exploratory Data Analysis for Machine Learning",
    organization: "IBM",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/XBOVKP7LNE39",
  },
];

const cloudCertifications = [
  {
    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9180528?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title:
      "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9384110?qlcampaign=1p-EDUCR-GCCF-MMCL-STUDENT-PH-APR2024-27&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9378066?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title:
      "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9403909?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },

  {
    title: "Attention Mechanism",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9951576?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Create Image Captioning Models",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9955947?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Encoder-Decoder Architecture",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9951691?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Introduction to Vertex AI Studio",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9955343?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Transformer Models and BERT Model",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9955998?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Build a Secure Google Cloud Network",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9559758?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Set Up an App Dev Environment on Google Cloud",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9542534?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9566318?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9566280?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Introduction to Responsible AI",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9556909?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Introduction to Large Language Models",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9556824?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Introduction to Image Generation",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9566346?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Introduction to Generative AI",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9556866?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Implement Load Balancing on Compute Engine",
    organization: "Google Cloud Skills Boost",
    certificateUrl:
      "https://www.cloudskillsboost.google/public_profiles/962bc156-2b74-456e-98d5-1dc8461a9cea/badges/9533722?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
];

const webDevCertifications = [
  {
    title: "Python for Data Science, AI & Development",
    organization: "IBM",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/AY9JON3ZWI44",
  },
];

const pythonCertifications = [
  {
    title: "Learn Python Certificate",
    organization: "Kaggle",
    certificateUrl:
      "https://www.kaggle.com/learn/certification/wincelarcen/python",
  },
  {
    title: "Problem Solving (Basic) Certificate",
    organization: "HackerRank",
    certificateUrl: "https://www.hackerrank.com/certificates/d9de6349f5c9",
  },
  {
    title: "Python (Basic) Certificate",
    organization: "HackerRank",
    certificateUrl: "https://www.hackerrank.com/certificates/9fdbeebcbd17",
  },
  {
    title: "Introduction to Programming Using Python",
    organization: "CodeChum",
    certificateUrl: "#",
  },
];

const otherCertifications = [
  {
    title: "Graphic Design Essentials",
    organization: "Canva",
    certificateUrl:
      "https://www.canva.com/design-school/certification-award/22e1b11e-946a-4ed3-80b3-7bf4c47d67f1",
  },
  {
    title: "Getting Started with Technology Startups",
    organization: "University of Colorado Boulder",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/HN99XSVV99Q4",
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

        <CategoryTitle>WEB DEVELOPMENT CERTIFICATIONS</CategoryTitle>
        <ScrollableRow>
          <FixedWidthContainer>
            {webDevCertifications.map((cert, index) => (
              <CertificationBox
                key={index}
                title={cert.title}
                organization={cert.organization}
                certificateUrl={cert.certificateUrl}
              />
            ))}
          </FixedWidthContainer>
        </ScrollableRow>

        <CategoryTitle>PYTHON CERTIFICATIONS</CategoryTitle>
        <ScrollableRow>
          <FixedWidthContainer>
            {pythonCertifications.map((cert, index) => (
              <CertificationBox
                key={index}
                title={cert.title}
                organization={cert.organization}
                certificateUrl={cert.certificateUrl}
              />
            ))}
          </FixedWidthContainer>
        </ScrollableRow>

        <CategoryTitle>GOOGLE CLOUD CERTIFICATIONS</CategoryTitle>
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

        <CategoryTitle>OTHER CERTIFICATIONS</CategoryTitle>
        <ScrollableRow>
          <FixedWidthContainer>
            {otherCertifications.map((cert, index) => (
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
