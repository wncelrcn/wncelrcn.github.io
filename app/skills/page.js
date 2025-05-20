"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

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

// Motion components
const MotionContainer = motion(Container);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);
const MotionListItem = motion(ListItem);

export default function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skillCategoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <MotionContainer
      maxWidth="lg"
      sx={{ mt: 8, mb: 8 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox variants={headingVariants}>
        <SectionTitle>SKILLS AND EXPERTISE</SectionTitle>
        <MainTitle>How I Add Value</MainTitle>
        <SubTitle>
          Backed by a strong foundation in Computer Science, I bring a versatile
          skill set to every project.
        </SubTitle>
      </MotionBox>

      {/* Skills Section */}
      <MotionGrid container>
        <Grid item xs={12}>
          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Machine Learning</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Experienced in implementing supervised and unsupervised
                  learning algorithms for classification and clustering.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Developed a face recognition model, using the face_recognition
                  library and OpenCV, which uses pre- trained models for face
                  detection and encoding.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Developed multiple object detection models using YOLO v11.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Trained a natural language processing (NLP) model for text
                  analysis and sentiment classification.
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Front-end Development</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Developed multiple web and mobile projects using front-end
                  frameworks including React, React Native, Next.js, Vue.js, and
                  ASP.NET.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Skilled in designing user-friendly interfaces for web and
                  mobile applications using Figma.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Proficient in using different styling frameworks such as
                  TailwindCSS, Material UI, DaisyUI, and Bootstrap.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Created dashboards and data visualizations using ChartJs.
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Back-end Development</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Created RESTful APIs using Express.js and Flask.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Has experience in using and integrating difference Database
                  Management Systems like MS SQL, MySQL, Firebase, Supabase, and
                  MongoDB.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Knowledgeable in software design and architecture of software
                  projects.
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Project Management</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Spearheaded different teams through the planning, analysis,
                  design, and implementation of various software projects.
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Used project management tools such as Trello, Jira, and GitHub
                  for managing project deliverables
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>
        </Grid>
      </MotionGrid>
    </MotionContainer>
  );
}
