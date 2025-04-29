"use client";

import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
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

const SkillCategory = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "2rem",
  borderBottom: "1px solid #000",
  paddingBottom: "0.5rem",
  marginBottom: "1.5rem",
  width: "100%",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: "-1px",
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: "#000",
  },
}));

const SkillItem = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.25rem",
  marginBottom: "0.75rem",
  display: "flex",
  alignItems: "center",
  "&:before": {
    content: '"•"',
    marginRight: "0.5rem",
    color: "#000",
  },
}));

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box>
        <SectionTitle>SKILLS AND EXPERTISE</SectionTitle>
        <MainTitle>How I Add Value</MainTitle>
        <SubTitle>
          Backed by a strong foundation in Computer Science, I bring a versatile
          skill set to every project.
        </SubTitle>

        {/* Skills Section */}
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ mb: 5 }}>
              <SkillCategory>Machine Learning</SkillCategory>
              <Box sx={{ width: "100%" }}>
                <SkillItem>
                  Experienced in implementing supervised and unsupervised
                  learning algorithms for classification and clustering.
                </SkillItem>
                <SkillItem>
                  Developed a face recognition model, using the face_recognition
                  library and OpenCV, which uses pre- trained models for face
                  detection and encoding.
                </SkillItem>
                <SkillItem>
                  Developed multiple object detection models using YOLO v11.
                </SkillItem>
                <SkillItem>
                  Trained a natural language processing (NLP) model for text
                  analysis and sentiment classification.
                </SkillItem>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <SkillCategory>Front-end Web Development</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <SkillItem>
                  Developed multiple web and mobile projects using front-end
                  frameworks including React, React Native, Next.js, Vue.js, and
                  ASP.NET.
                </SkillItem>
                <SkillItem>
                  Skilled in designing user-friendly interfaces for web and
                  mobile applications using Figma.
                </SkillItem>
                <SkillItem>
                  Proficient in using different styling frameworks such as
                  TailwindCSS, Material UI, DaisyUI, and Bootstrap.
                </SkillItem>
                <SkillItem>
                  Created dashboards and data visualizations using ChartJs.
                </SkillItem>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <SkillCategory>Back-end Web Development</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <SkillItem>
                  Created RESTful APIs using Express.js and Flask.
                </SkillItem>
                <SkillItem>
                  Has experience in using and integrating difference Database
                  Management Systems like MS SQL, MySQL, Firebase, Supabase, and
                  MongoDB.
                </SkillItem>
                <SkillItem>
                  Knowledgeable in software design and architecture of software
                  projects.
                </SkillItem>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <SkillCategory>Project Management</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <SkillItem>
                  Spearheaded different teams through the planning, analysis,
                  design, and implementation of various software projects.
                </SkillItem>
                <SkillItem>
                  Used project management tools such as Trello, Jira, and GitHub
                  for managing project deliverables
                </SkillItem>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
