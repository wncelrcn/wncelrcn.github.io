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

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
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
              <Box sx={{ ml: 1 }}>
                <BulletList>
                  <ListItem>
                    Experienced in implementing supervised and unsupervised
                    learning algorithms for classification and clustering.
                  </ListItem>
                  <ListItem>
                    Developed a face recognition model, using the
                    face_recognition library and OpenCV, which uses pre- trained
                    models for face detection and encoding.
                  </ListItem>
                  <ListItem>
                    Developed multiple object detection models using YOLO v11.
                  </ListItem>
                  <ListItem>
                    Trained a natural language processing (NLP) model for text
                    analysis and sentiment classification.
                  </ListItem>
                </BulletList>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <SkillCategory>Front-end Development</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <BulletList>
                  <ListItem>
                    Developed multiple web and mobile projects using front-end
                    frameworks including React, React Native, Next.js, Vue.js,
                    and ASP.NET.
                  </ListItem>
                  <ListItem>
                    Skilled in designing user-friendly interfaces for web and
                    mobile applications using Figma.
                  </ListItem>
                  <ListItem>
                    Proficient in using different styling frameworks such as
                    TailwindCSS, Material UI, DaisyUI, and Bootstrap.
                  </ListItem>
                  <ListItem>
                    Created dashboards and data visualizations using ChartJs.
                  </ListItem>
                </BulletList>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <SkillCategory>Back-end Development</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <BulletList>
                  <ListItem>
                    Created RESTful APIs using Express.js and Flask.
                  </ListItem>
                  <ListItem>
                    Has experience in using and integrating difference Database
                    Management Systems like MS SQL, MySQL, Firebase, Supabase,
                    and MongoDB.
                  </ListItem>
                  <ListItem>
                    Knowledgeable in software design and architecture of
                    software projects.
                  </ListItem>
                </BulletList>
              </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
              <SkillCategory>Project Management</SkillCategory>
              <Box sx={{ ml: 1 }}>
                <BulletList>
                  <ListItem>
                    Spearheaded different teams through the planning, analysis,
                    design, and implementation of various software projects.
                  </ListItem>
                  <ListItem>
                    Used project management tools such as Trello, Jira, and
                    GitHub for managing project deliverables
                  </ListItem>
                </BulletList>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
