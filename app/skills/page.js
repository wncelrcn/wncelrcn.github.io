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
          As a Computer Science student specializing in Machine Learning with
          hands-on experience across AI, full-stack development, and cloud
          technologies, I deliver comprehensive solutions from concept to
          deployment.
        </SubTitle>
      </MotionBox>

      {/* Skills Section */}
      <MotionGrid container>
        <Grid item xs={12}>
          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>
              Artificial Intelligence & Machine Learning
            </SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Built custom neural networks (MLP, CNN) achieving 93.5%
                  accuracy in brain tumor classification using
                  PyTorch/TensorFlow
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Developed computer vision systems: YOLO v11 object detection,
                  face recognition (OpenCV), medical image analysis pipelines
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Fine-tuned transformer models (DeBERTa, MiniLM) for NLP tasks,
                  deployed on Hugging Face, integrated LLM APIs (Groq, NVIDIA)
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Expert in supervised learning: SVM, Random Forest, XGBoost,
                  Logistic Regression with hyperparameter optimization
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Applied unsupervised methods: K-Means clustering, PCA/t-SNE
                  dimensionality reduction, pattern discovery techniques
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>
          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Data Science & Analytics</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Proficient in Python data science stack: pandas, numpy,
                  matplotlib, seaborn for EDA and statistical analysis
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Experienced in data preprocessing, feature engineering, and ML
                  pipeline development across multiple domains
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Applied statistical methods: regression analysis, hypothesis
                  testing, A/B testing, and model evaluation metrics
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>UI/UX Design</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  UI/UX Designer Intern creating wireframes, high-fidelity
                  mockups, and interactive Figma prototypes with design systems
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Conducted usability testing and iterative design improvements
                  to enhance user task completion and visual consistency
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Designed user interfaces for e-commerce, shuttle booking, and
                  business management applications
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Full-Stack Web Development</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Expert in React, Next.js, ASP.NET WebForms; proficient in
                  TailwindCSS, Material UI, Bootstrap for responsive design
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Built RESTful APIs (Express.js, Flask), integrated databases
                  (Supabase, Firebase, MySQL, MongoDB), Node.js/PHP backends
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Developed interactive data dashboards with Chart.js for
                  competition projects and business applications
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Mobile Development</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Built cross-platform apps (React Native) and native apps
                  (Kotlin Android, Swift/SwiftUI iOS, Xamarin C#)
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Implemented mobile features: camera integration, real-time
                  data, offline capabilities, responsive UI design
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>

          <MotionBox sx={{ mb: 5 }} variants={skillCategoryVariants}>
            <SkillCategory>Project Management & Leadership</SkillCategory>
            <Box sx={{ ml: 1 }}>
              <BulletList>
                <MotionListItem variants={listItemVariants}>
                  Led software development teams through complete project
                  lifecycles using Trello, Jira, and GitHub workflows
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Competed in programming competitions and hackathons (DLSU
                  Hackercup, CodeChum National Challenge) managing tight
                  deadlines
                </MotionListItem>
                <MotionListItem variants={listItemVariants}>
                  Conducted programming workshops and mentored CS students
                  through Mapúa MCL-ACM Student Chapter
                </MotionListItem>
              </BulletList>
            </Box>
          </MotionBox>
        </Grid>
      </MotionGrid>
    </MotionContainer>
  );
}
