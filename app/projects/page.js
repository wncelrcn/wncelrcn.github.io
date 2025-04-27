"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectBox from "../../components/ProjectBox";

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

const ProjectsWrapper = styled(Box)({
  overflow: "hidden",
  margin: "0 -24px", // Negative margin to allow full-width scrolling
  padding: "0 24px", // Padding to maintain content alignment
});

const ProjectsContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE/Edge
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none", // Chrome/Safari/Opera
  },
});

const ProjectRows = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  paddingTop: "10px",
  paddingBottom: "48px",
  width: "max-content",
});

const ProjectRow = styled(Box)({
  display: "flex",
  gap: "24px",
});

export default function Projects() {
  const row1Projects = [
    {
      title: "AI Image Generator",
      imageSrc: "/projects/ai-image-generator.png",
      imageAlt: "AI Image Generator Project",
      projectUrl: "https://github.com/yourusername/ai-image-generator",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      description:
        "A deep learning-based image generation tool that uses GANs to create realistic images from text descriptions. Built with TensorFlow and deployed on a React-based UI, this project demonstrates advanced ML concepts and user-friendly design.",
      techStack: [
        { name: "Python", color: "#3776AB" },
        { name: "TensorFlow", color: "#FF6F00" },
        { name: "React", color: "#61DAFB" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
    {
      title: "E-commerce Platform",
      imageSrc: "/projects/ecommerce.png",
      imageAlt: "E-commerce Platform Screenshot",
      projectUrl: "https://github.com/yourusername/ecommerce",
      description:
        "A full-featured e-commerce solution built with Next.js, MongoDB, and Stripe integration. This platform includes user authentication, product management, shopping cart functionality, secure checkout, and responsive design for all devices.",
      techStack: [
        { name: "Next.js", color: "#000000" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Stripe", color: "#008CDD" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
    {
      title: "Weather Dashboard",
      imageSrc: "/projects/weather-app.png",
      imageAlt: "Weather Dashboard Interface",
      projectUrl: "https://github.com/yourusername/weather-dashboard",
      description:
        "An interactive weather application providing real-time forecasts, historical data, and visual weather patterns. This React-based dashboard utilizes the OpenWeather API and features geolocation, interactive charts, and customizable alerts.",
      techStack: [
        { name: "React", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "OpenWeather", color: "#EB6E4B" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
    {
      title: "Task Management App",
      imageSrc: "/projects/task-app.png",
      imageAlt: "Task Management Application",
      projectUrl: "https://github.com/yourusername/task-manager",
      description:
        "A productivity tool built with Vue.js and Firebase that helps users organize tasks, set priorities, and track progress. Features include drag-and-drop organization, deadline reminders, team collaboration, and customizable workspaces.",
      techStack: [
        { name: "Vue.js", color: "#4FC08D" },
        { name: "Firebase", color: "#FFCA28" },
        { name: "Tailwind", color: "#06B6D4" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
  ];

  const row2Projects = [
    {
      title: "Social Media Analytics",
      imageSrc: "/projects/social-analytics.png",
      imageAlt: "Social Media Analytics Dashboard",
      projectUrl: "https://github.com/yourusername/social-analytics",
      description:
        "A comprehensive analytics platform for social media performance tracking. Built with Django and PostgreSQL, this tool aggregates metrics across multiple platforms, provides sentiment analysis, and generates actionable insights through an intuitive dashboard.",
      techStack: [
        { name: "Python", color: "#3776AB" },
        { name: "Django", color: "#092E20" },
        { name: "PostgreSQL", color: "#336791" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
    {
      title: "Real-time Chat App",
      imageSrc: "/projects/chat-app.png",
      imageAlt: "Real-time Chat Application",
      projectUrl: "https://github.com/yourusername/chat-app",
      description:
        "A modern messaging application utilizing Socket.io for real-time communication. Features include private and group conversations, message encryption, file sharing, and user presence detection, all built on a scalable Express and MongoDB backend.",
      techStack: [
        { name: "Socket.io", color: "#010101" },
        { name: "Express", color: "#000000" },
        { name: "MongoDB", color: "#47A248" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
    {
      title: "Fitness Tracker",
      imageSrc: "/projects/fitness-tracker.png",
      imageAlt: "Fitness Tracking Application",
      projectUrl: "https://github.com/yourusername/fitness-tracker",
      description:
        "A mobile fitness application built with React Native that enables users to track workouts, monitor nutrition, and achieve health goals. The app features exercise libraries, personalized workout plans, progress visualization, and social sharing capabilities.",
      techStack: [
        { name: "React Native", color: "#61DAFB" },
        { name: "GraphQL", color: "#E10098" },
        { name: "AWS", color: "#FF9900" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
    {
      title: "Budget Management",
      imageSrc: "/projects/budget-app.png",
      imageAlt: "Budget Management Application",
      projectUrl: "https://github.com/yourusername/budget-app",
      description:
        "A personal finance tool built with Angular that helps users track expenses, set budgets, and visualize spending patterns. Features include account integration, expense categorization, goal setting, and financial projection tools with interactive charts.",
      techStack: [
        { name: "Angular", color: "#DD0031" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Chart.js", color: "#FF6384" },
      ],
      additionalImages: [
        "/projects/ai-image-generator-1.png",
        "/projects/ai-image-generator-2.png",
      ],
    },
  ];

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

      <ProjectsWrapper>
        <ProjectsContainer>
          <ProjectRows>
            <ProjectRow>
              {row1Projects.map((project, index) => (
                <ProjectBox key={index} {...project} />
              ))}
            </ProjectRow>
            <ProjectRow>
              {row2Projects.map((project, index) => (
                <ProjectBox key={index} {...project} />
              ))}
            </ProjectRow>
          </ProjectRows>
        </ProjectsContainer>
      </ProjectsWrapper>
    </Container>
  );
}
