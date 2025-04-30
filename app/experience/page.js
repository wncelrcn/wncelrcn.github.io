"use client";

import React from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#4DB4D7",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: "1rem",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "2.5rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#666",
  marginBottom: "3rem",
  maxWidth: "1000px",
}));

const ExperienceTitle = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
});

const DateRange = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  color: "#4DB4D7",
  fontWeight: "600",
  fontSize: "1.25rem",
  textAlign: "right",
});

const ExperienceSection = styled(Box)({
  marginBottom: "2rem",
});

const SectionHeading = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "2rem",
  marginTop: "2rem",
  marginBottom: "2rem",
});

const ExperienceItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
});

const ExperienceHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1rem",
});

const IconBox = styled(Box)({
  width: "48px",
  height: "48px",
  borderRadius: "6px",
  overflow: "hidden",
  marginRight: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
});

const BulletList = styled(List)({
  paddingLeft: "1rem",
  "& li": {
    display: "list-item",
    padding: "0.25rem 0",
    fontFamily: "var(--font-urbanist)",
    fontSize: "1.25rem",
  },
  listStyleType: "disc",
  marginLeft: "1rem",
});

const TitleWithIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export default function Experience() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, pb: 8 }}>
      <Box>
        <SectionTitle>EXPERIENCE AND EDUCATION</SectionTitle>
        <MainTitle>Career & Academic Background</MainTitle>
        <SubTitle>
          My educational and professional journey, built on continuous learning
          and real-world challenges.
        </SubTitle>

        <SectionHeading>EXPERIENCE</SectionHeading>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox>
                <span role="img" style={{ fontSize: "2rem" }}>
                  👨‍💻
                </span>
              </IconBox>
              <ExperienceTitle>Freelance Software Developer</ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Dec 2024 - Feb 2025</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ListItem>
            <ListItem>Aenean vel nunc ac urna elementum malesuada.</ListItem>
            <ListItem>
              Praesent condimentum vel turpis mollis vulputate.
            </ListItem>
            <ListItem>
              Duis nibh lacus, fermentum at posuere id, laoreet in tellus.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox style={{ backgroundColor: "#000" }}>
                <span
                  role="img"
                  style={{ fontSize: "1.5rem", color: "#00f5d4" }}
                >
                  🚀
                </span>
              </IconBox>
              <ExperienceTitle>Software Engineering Fellow</ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Jul 2024 - Sept 2024</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ListItem>
            <ListItem>Aenean vel nunc ac urna elementum malesuada.</ListItem>
            <ListItem>
              Praesent condimentum vel turpis mollis vulputate.
            </ListItem>
            <ListItem>
              Duis nibh lacus, fermentum at posuere id, laoreet in tellus.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <SectionHeading>EDUCATION</SectionHeading>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
              >
                <span
                  role="img"
                  style={{ fontSize: "1.5rem", color: "#ef233c" }}
                >
                  🎓
                </span>
              </IconBox>
              <ExperienceTitle>
                BS in Computer Science with Specialization in Machine Learning
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Aug 2022 - Present</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ListItem>
            <ListItem>Aenean vel nunc ac urna elementum malesuada.</ListItem>
            <ListItem>
              Praesent condimentum vel turpis mollis vulputate.
            </ListItem>
            <ListItem>
              Duis nibh lacus, fermentum at posuere id, laoreet in tellus.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
              >
                <span role="img" style={{ fontSize: "1.5rem" }}>
                  🧪
                </span>
              </IconBox>
              <ExperienceTitle>
                Science, Technology, Engineering, and Mathematics (STEM)
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Jun 2016 - Aug 2022</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ListItem>
            <ListItem>Aenean vel nunc ac urna elementum malesuada.</ListItem>
            <ListItem>
              Praesent condimentum vel turpis mollis vulputate.
            </ListItem>
            <ListItem>
              Duis nibh lacus, fermentum at posuere id, laoreet in tellus.
            </ListItem>
          </BulletList>
        </ExperienceItem>
      </Box>
    </Container>
  );
}
