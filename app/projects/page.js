"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectBox from "../../components/ProjectBox";
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

// Motion components
const MotionContainer = motion(Container);
const MotionBox = motion(Box);
const MotionProjectBox = motion.div;

export default function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const row1Projects = [
    {
      title: "MindMap",
      imageSrc: "./banners/mindmap.png",
      imageAlt: "MindMap",
      projectUrl: "https://github.com/wncelrcn/MindMap",
      description:
        "A Digital Journaling Web Application for Mental Wellness Support using Natural Language Processing and Generative AI.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl:
        "https://www.canva.com/design/DAGtPG5Ku3g/pbFaw0qbf_BuTLlj0WwFQw/view?utm_content=DAGtPG5Ku3g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha25ddf02d0",
      websiteUrl: "https://mindmap-journals.vercel.app",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "Material UI", color: "#4DB4D7" },
        { name: "Supabase", color: "#4DB4D7" },
        { name: "NVIDIA Nemotron Ultra", color: "#4DB4D7" },
        { name: "Deep Learning", color: "#4DB4D7" },
        { name: "Neural Networks", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/mindmap_1.png",
        "./project-pictures/mindmap_2.png",
        "./project-pictures/mindmap_3.png",
        "./project-pictures/mindmap_4.png",
        "./project-pictures/mindmap_5.png",
        "./project-pictures/mindmap_6.png",
        "./project-pictures/mindmap_7.png",
        "./project-pictures/mindmap_8.png",
        "./project-pictures/mindmap_9.png",
        "./project-pictures/mindmap_10.png",
        "./project-pictures/mindmap_11.png",
        "./project-pictures/mindmap_12.png",
        "./project-pictures/mindmap_13.png",
        "./project-pictures/mindmap_14.png",
      ],
    },
    {
      title: "NeuroView",
      imageSrc: "./banners/neuroview.png",
      imageAlt: "NeuroView",
      githubUrls: [
        "https://github.com/wncelrcn/NeuroView",
        "https://github.com/wncelrcn/NeuroView-Mobile",
      ],
      description:
        "NeuroView is a comprehensive web and mobile application designed for medical professionals to analyze brain MRI scans using custom-built artificial intelligence. The platform provides accurate, fast, and user-friendly tumor detection with detailed visual insights to support clinical decision-making.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "https://neuroview-brainscans.vercel.app",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "TailwindCSS", color: "#4DB4D7" },
        { name: "Supabase", color: "#4DB4D7" },
        { name: "Android", color: "#4DB4D7" },
        { name: "Kotlin", color: "#4DB4D7" },
        { name: "Deep Learning", color: "#4DB4D7" },
        { name: "Neural Networks", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/neuroview_1.png",
        "./project-pictures/neuroview_2.png",
        "./project-pictures/neuroview_3.png",
        "./project-pictures/neuroview_4.png",
        "./project-pictures/neuroview_5.png",
        "./project-pictures/neuroview_6.png",
        "./project-pictures/neuroview_7.png",
        "./project-pictures/neuroview_8.png",
        "./project-pictures/neuroview_9.png",
        "./project-pictures/neuroview_10.png",
        "./project-pictures/neuroview_11.png",
        "./project-pictures/neuroview_12.png",
        "./project-pictures/neuroview_13.png",
        "./project-pictures/neuroview_14.png",
      ],
    },
    {
      title: "Fashion MNIST Classification",
      imageSrc: "./banners/fashion.png",
      imageAlt: "Fashion MNIST Classification Project",
      projectUrl: "https://github.com/wncelrcn/Fashion-MNIST-Classification",
      description:
        "A CS190-2P (Introduction to Machine Learning Theory) Final Lab Project. Made a comprehensive Fashion-MNIST classification using classical ML and deep learning (CNN, MLP), with preprocessing, augmentation, and model comparison.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Machine Learning", color: "#4DB4D7" },
        { name: "scikit-learn", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/fashion_1.png",
        "./project-pictures/fashion_2.png",
        "./project-pictures/fashion_3.png",
        "./project-pictures/fashion_4.png",
        "./project-pictures/fashion_5.png",
        "./project-pictures/fashion_6.png",
        "./project-pictures/fashion_7.png",
        "./project-pictures/fashion_8.png",
        "./project-pictures/fashion_9.png",
        "./project-pictures/fashion_10.png",
        "./project-pictures/fashion_11.png",
        "./project-pictures/fashion_12.png",
      ],
    },
    {
      title: "eloura",
      imageSrc: "./banners/eloura.png",
      imageAlt: "Fashion E-commerce UI/UX Project",
      paperUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      figmaUrl:
        "https://www.figma.com/proto/icSgEVxScFwbmQHCR2KHNv/eloura--Mobile-E-Commerce-App-?node-id=34-1513&t=ggCGLLQMCwnSA8zy-1",
      description:
        "A Fashion E-commerce UI/UX Project made using Figma. This project is a part of my Technical Assessment for the Codebility UI/UX Internship.",
      techStack: [
        { name: "Figma", color: "#4DB4D7" },
        { name: "UI/UX", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/eloura_1.png",
        "./project-pictures/eloura_2.png",
        "./project-pictures/eloura_3.png",
        "./project-pictures/eloura_4.png",
        "./project-pictures/eloura_5.png",
        "./project-pictures/eloura_6.png",
        "./project-pictures/eloura_7.png",
        "./project-pictures/eloura_8.png",
        "./project-pictures/eloura_9.png",
        "./project-pictures/eloura_10.png",
        "./project-pictures/eloura_11.png",
        "./project-pictures/eloura_12.png",
        "./project-pictures/eloura_13.png",
        "./project-pictures/eloura_14.png",
        "./project-pictures/eloura_15.png",
      ],
    },
    {
      title: "Colorectal Cancer Prediction",
      imageSrc: "./banners/colorectal.png",
      imageAlt: "Colorectal Cancer ML Project",
      projectUrl: "https://github.com/wncelrcn/Colorectal-Cancer-Prediction",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      description:
        "A Mini Machine Learning Project that aims to predict the survivability status of the patient with cancer using the Colorectal Cancer Risk & Survival Dataset.",
      techStack: [
        { name: "Machine Learning", color: "#4DB4D7" },
        { name: "scikit-learn", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/colorectal_1.png",
        "./project-pictures/colorectal_2.png",
        "./project-pictures/colorectal_3.png",
        "./project-pictures/colorectal_4.png",
        "./project-pictures/colorectal_5.png",
        "./project-pictures/colorectal_6.png",
        "./project-pictures/colorectal_7.png",
        "./project-pictures/colorectal_8.png",
        "./project-pictures/colorectal_9.png",
        "./project-pictures/colorectal_10.png",
      ],
    },
    {
      title: "Energy Efficiency in Buildings",
      imageSrc: "./banners/energy.png",
      imageAlt: "E-commerce Platform Screenshot",
      projectUrl: "https://github.com/wncelrcn/Energy_Efficiency",
      description:
        "A CS190-1 (Introduction to Computational Learning Theory) Machine Learning Project that focuses on estimating the heating load (Y1) in simulated buildings with different Linear Regression Algorithms using the Energy Efficiency Dataset.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Machine Learning", color: "#4DB4D7" },
        { name: "scikit-learn", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/energy_1.png",
        "./project-pictures/energy_2.png",
        "./project-pictures/energy_3.png",
        "./project-pictures/energy_4.png",
        "./project-pictures/energy_5.png",
        "./project-pictures/energy_6.png",
        "./project-pictures/energy_7.png",
        "./project-pictures/energy_8.png",
        "./project-pictures/energy_9.png",
        "./project-pictures/energy_10.png",
        "./project-pictures/energy_11.png",
      ],
    },
    {
      title: "Wizzy",
      imageSrc: "./banners/wizzy.png",
      imageAlt: "AI Flashcard App",
      projectUrl: "https://github.com/wncelrcn/Wizzy",
      description:
        "Wizzy is an AI-powered flashcard app designed to enhance your learning experience. Made using Next.JS, Material UI, Groq AI API, and Firebase.",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "Material UI", color: "#4DB4D7" },
        { name: "Firebase", color: "#4DB4D7" },
        { name: "Groq AI API", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "https://wizzyflashcards.vercel.app/",
      additionalImages: [
        "./project-pictures/wizzy_1.png",
        "./project-pictures/wizzy_2.png",
        "./project-pictures/wizzy_3.png",
      ],
    },
    {
      title: "EduBot",
      imageSrc: "./banners/eduot.png",
      imageAlt: "EduBot",
      projectUrl: "https://github.com/wncelrcn/EduBot",
      description:
        "An AI ChatBot aimed to help students in Coding, Grammar, Research, and Plagiarism. This project is part of the required projects for the Headstarter AI Software Engineering Fellowship.",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "Firebase", color: "#4DB4D7" },
        { name: "Groq AI API", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "https://edubot-headstarter.vercel.app/login",
      additionalImages: ["./project-pictures/edubot_1.png"],
    },
    {
      title: "ClassMate",
      imageSrc: "./banners/classmate.png",
      imageAlt: "ClassMate",
      projectUrl: "https://github.com/wncelrcn/ClassMate",
      description:
        "An Android Xamarin App Project for IT123P - A Student Companion App aimed to improve students' productivity levels",
      techStack: [
        { name: "Android", color: "#4DB4D7" },
        { name: "Xamarin", color: "#4DB4D7" },
        { name: "C#", color: "#4DB4D7" },
        { name: "MySQL", color: "#4DB4D7" },
        { name: "PHP", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      additionalImages: [
        "./project-pictures/classmate_1.png",
        "./project-pictures/classmate_2.png",
        "./project-pictures/classmate_3.png",
        "./project-pictures/classmate_4.png",
        "./project-pictures/classmate_5.png",
        "./project-pictures/classmate_6.png",
        "./project-pictures/classmate_7.png",
      ],
    },
    {
      title: "TrendLease",
      imageSrc: "./banners/trendlease.png",
      imageAlt: "Trendlease",
      projectUrl: "https://github.com/wncelrcn/ClassMate",
      description:
        "A Fashion Renting Service Web App for IT114L Machine Problem Project - Made using ASP.NET WebForms, SQL, CSS, Bootstrap",
      techStack: [
        { name: "ASP.NET", color: "#4DB4D7" },
        { name: "C#", color: "#4DB4D7" },
        { name: "MS SQL", color: "#4DB4D7" },
        { name: "Bootstrap", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "https://trendlease.azurewebsites.net",
      additionalImages: [
        "./project-pictures/trendlease_1.png",
        "./project-pictures/trendlease_2.png",
        "./project-pictures/trendlease_3.png",
      ],
    },
    {
      title: "Telelet",
      imageSrc: "./banners/telelet.png",
      imageAlt: "Telelet",
      projectUrl: "https://github.com/wncelrcn/Telelet",
      description:
        "A Twitter Clone Project for IT114L - Made using HTML, CSS, JavaScript, Node.js, TwitterCloneApi and Free News Api",
      techStack: [
        { name: "HTML", color: "#4DB4D7" },
        { name: "CSS", color: "#4DB4D7" },
        { name: "JavaScript", color: "#4DB4D7" },
        { name: "Node.js", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      additionalImages: [
        "./project-pictures/telelet_1.png",
        "./project-pictures/telelet_2.png",
      ],
    },
    {
      title: "Personal Portfolio",
      imageSrc: "./banners/portfolio.png",
      imageAlt: "Portfolio",
      projectUrl: "https://github.com/wncelrcn/wncelrcnn",
      description:
        "Personal Portfolio Website - Made using Next.js, and Material UI",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "Material UI", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "https://wncelrcn.github.io",
      additionalImages: [
        "./project-pictures/portfolio_1.png",
        "./project-pictures/portfolio_2.png",
        "./project-pictures/portfolio_3.png",
        "./project-pictures/portfolio_5.png",
        "./project-pictures/portfolio_6.png",
      ],
    },
    {
      title: "Mapúa MCL Bus Tap",
      imageSrc: "./banners/bustap.png",
      imageAlt: "Mapúa MCL Bus Tap",
      projectUrl: "#",
      description:
        "A Mobile Shuttle Booking Application UI/UX for Mapúa MCL - Made using Figma",
      techStack: [
        { name: "Figma", color: "#4DB4D7" },
        { name: "UI/UX", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl:
        "https://www.figma.com/proto/oNrph44LtbwUmXTyAKSWac/Mapua-MCL-Bus-Tap?page-id=403%3A1650&type=design&node-id=434-1920&viewport=323%2C92%2C0.02&scaling=scale-down&starting-point-node-id=434%3A1920&show-proto-sidebar=1",
      presentationUrl: "#",
      websiteUrl: "#",
      additionalImages: [
        "./project-pictures/bustap_1.png",
        "./project-pictures/bustap_2.png",
      ],
    },
  ];

  const row2Projects = [
    {
      title: "MindMap Emotion Classifier",
      imageSrc: "./banners/mindmap-ml.png",
      imageAlt: "MindMap Emotion Classifier",
      description:
        "A fine-tuned multi-label emotion classification model based on microsoft/deberta-v3-base and microsoft/MiniLM-L12-H384-uncased and trained on the GoEmotions dataset. This model is designed to power emotional tagging for personal journaling and mental wellness applications like MindMap.",
      projectUrl: "#",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      colabUrls: [
        "https://colab.research.google.com/drive/1SARFNxLlkhkl7QZcmkodvR5nhCv97YNK?usp=sharing",
        "https://colab.research.google.com/drive/1RipLfwWYsWEiCe-Vpxv58nFT6A6xKVbi?usp=sharing",
      ],
      huggingFaceUrls: [
        "https://huggingface.co/wncelrcn/mindmap-deBERTa-goemotions-multilabel",
        "https://huggingface.co/wncelrcn/mindmap-MiniLM-goemotions-v1",
      ],
      websiteUrl: "#",
      techStack: [
        { name: "Deep Learning", color: "#4DB4D7" },
        { name: "NLP", color: "#4DB4D7" },
        { name: "Sentiment Analysis", color: "#4DB4D7" },
        { name: "PyTorch", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/nlp_1.png",
        "./project-pictures/nlp_2.png",
      ],
    },
    {
      title: "Brain Tumor MRI Classification",
      imageSrc: "./banners/neuroview-ml.png",
      imageAlt: "NeuroView's Machine Learning Model",
      projectUrl: "https://github.com/wncelrcn/Brain-Tumor-MRI-Classification",
      description:
        "A CS190-3P (Neural Networks & Deep Learning) Final Project, and the ML Model used in NeuroView. Brain Tumor MRI Classification using deep neural networks – achieving 93.5% accuracy across 4 classes (Glioma, Meningioma, Pituitary, No Tumor). Includes model experiments, analysis, and deployment-ready architecture.",
      paperUrl: "#",
      figmaUrl: "#",
      colabUrl:
        "https://colab.research.google.com/drive/1fAmR5DdCRzRlyuF3Dhkk8w8l5_1VLj2s",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Deep Learning", color: "#4DB4D7" },
        { name: "Neural Networks", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/brain_1.png",
        "./project-pictures/brain_2.png",
        "./project-pictures/brain_3.png",
        "./project-pictures/brain_4.png",
        "./project-pictures/brain_5.png",
        "./project-pictures/brain_6.png",
      ],
    },
    {
      title: "California Housing Data",
      imageSrc: "./banners/california.png",
      imageAlt: "California Housing Data Regression Project",
      projectUrl: "https://github.com/wncelrcn/California-Housing-Data",
      description:
        "A CS190-2P (Introduction to Machine Learning Theory) Final Lab Project. Made California housing price prediction using regression analysis. Includes EDA, preprocessing, feature engineering, and systematic comparison of linear, tree-based, and ensemble models (Random Forest, Gradient Boosting, XGBoost).",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Machine Learning", color: "#4DB4D7" },
        { name: "scikit-learn", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/housing_1.png",
        "./project-pictures/housing_2.png",
        "./project-pictures/housing_3.png",
        "./project-pictures/housing_4.png",
        "./project-pictures/housing_5.png",
        "./project-pictures/housing_6.png",
        "./project-pictures/housing_7.png",
      ],
    },
    {
      title: "Predictive Modeling for Agriculture",
      imageSrc: "./banners/agriculture.png",
      imageAlt: "Predictive Modeling for Agriculture",
      projectUrl:
        "https://github.com/wncelrcn/Predictive-Modeling-for-Agriculture",
      description:
        "A DataCamp Machine Learning Project that predicts the best crop for a field using soil metrics through EDA, preprocessing, and classification models.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Machine Learning", color: "#4DB4D7" },
        { name: "scikit-learn", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/agriculture_1.png",
        "./project-pictures/agriculture_2.png",
        "./project-pictures/agriculture_3.png",
        "./project-pictures/agriculture_4.png",
        "./project-pictures/agriculture_5.png",
        "./project-pictures/agriculture_6.png",
      ],
    },

    {
      title: "Breast Cancer Classification",
      imageSrc: "./banners/breast.png",
      imageAlt: "Breast Cancer ML Project",
      projectUrl: "https://github.com/wncelrcn/Breast-Cancer-Diagnosis",
      description:
        "A CS190-1 (Introduction to Computational Learning Theory) Machine Learning Project that focuses on applying and comparing various machine learning algorithms to classify breast tumors as benign or malignant using the Breast Cancer Wisconsin (Diagnostic) dataset.",
      paperUrl:
        "https://drive.google.com/file/d/1TAI-I2Be56vEgABKIIq6hgHxP9ZyDMJN/view?usp=sharing",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Machine Learning", color: "#4DB4D7" },
        { name: "scikit-learn", color: "#4DB4D7" },
        { name: "EDA", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/breast_1.png",
        "./project-pictures/breast_2.png",
        "./project-pictures/breast_3.png",
        "./project-pictures/breast_4.png",
        "./project-pictures/breast_5.png",
        "./project-pictures/breast_6.png",
        "./project-pictures/breast_7.png",
        "./project-pictures/breast_8.png",
        "./project-pictures/breast_9.png",
        "./project-pictures/breast_10.png",
        "./project-pictures/breast_11.png",
        "./project-pictures/breast_12.png",
        "./project-pictures/breast_13.png",
        "./project-pictures/breast_14.png",
        "./project-pictures/breast_15.png",
      ],
    },
    {
      title: "SkyTrack",
      imageSrc: "./banners/skytrack.png",
      imageAlt: "Realtime Weather App",
      projectUrl: "https://github.com/wncelrcn/SkyTrack",
      description:
        "A sleek weather app featuring real-time location tracking and interactive maps. Built with Next.js, Material UI, and powered by the OpenWeather API.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrL: "#",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "Material UI", color: "#4DB4D7" },
        { name: "OpenWeather", color: "#4DB4D7" },
      ],
      additionalImages: ["./project-pictures/skytrack_1.png"],
    },
    {
      title: "Presenza",
      imageSrc: "./banners/presenza.png",
      imageAlt: "Presenza",
      projectUrl: "https://github.com/wncelrcn/Presenza",
      description:
        "An Event-based Attendance Management System with Face Recognition Technology. This is the Event Organizer System. Made using Next.JS, Daisy UI, Firebase, and OpenCV Python.",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "Next.js", color: "#4DB4D7" },
        { name: "Daisy UI", color: "#4DB4D7" },
        { name: "OpenCV", color: "#4DB4D7" },
        { name: "Firebase", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/presenza_1.png",
        "./project-pictures/presenza_2.png",
        "./project-pictures/presenza_3.png",
        "./project-pictures/presenza_4.png",
        "./project-pictures/presenza_5.png",
      ],
    },
    {
      title: "XOXO",
      imageSrc: "./banners/xoxo.png",
      imageAlt: "XOXO",
      projectUrl: "https://github.com/wncelrcn/XOXO",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      description:
        "This is a simple and fun Tic-Tac-Toe Game built using Swift and SwiftUI.",
      techStack: [
        { name: "Swift", color: "#4DB4D7" },
        { name: "SwiftUI", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/xoxo_1.png",
        "./project-pictures/xoxo_2.png",
        "./project-pictures/xoxo_3.png",
      ],
    },
    {
      title: "JLR Food Products Trading",
      imageSrc: "./banners/jlr.png",
      imageAlt: "JLR Food Products Trading Project Management Paper",
      projectUrl: "#",
      paperUrl:
        "https://drive.google.com/file/d/1d2Ht0118uzwjjWE7GmBVd4QKGhh-_7VO/view",
      figmaUrls: [
        "https://www.figma.com/proto/eKdswARLABQaAg2zgaDyfx/Customer-Website-Prototype?node-id=0-1&t=7CVfLre8lTIALmvH-1",
        "https://www.figma.com/proto/WYgoRCaEx2esymLNMbMc0e/Admin-and-Employee-Website-Prototype?node-id=0-1&t=uweDvXfCgUO2aKMO-1",
      ],
      presentationUrl: "#",
      websiteUrl: "#",
      description:
        "A comprehensive Project Management Paper for the development of the Order, Sales, and Inventory Management System (OSIMS) at JLR Food Products Trading. The paper outlined project scope, objectives, timelines, risk management strategies, and resource allocation. It emphasized stakeholder engagement, project milestones, and deliverables to ensure successful implementation and operational efficiency.",
      techStack: [
        { name: "Project Management", color: "#4DB4D7" },
        { name: "UI/UX", color: "#4DB4D7" },
        { name: "Figma", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/jlr_1.png",
        "./project-pictures/jlr_2.png",
        "./project-pictures/jlr_3.png",
        "./project-pictures/jlr_4.png",
        "./project-pictures/jlr_5.png",
        "./project-pictures/jlr_6.png",
        "./project-pictures/jlr_7.png",
      ],
    },
    {
      title: "JLR OSIMS",
      imageSrc: "./banners/osims.png",
      imageAlt: "JLR Food Products Trading OSIMS",
      projectUrl: "https://github.com/wncelrcn/JLR-FoodProducts-Trading-WebApp",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      description:
        "An Order, Sales, And Inventory Management Website for JLR Food Products Trading",
      techStack: [
        { name: "ASP.NET", color: "#4DB4D7" },
        { name: "C#", color: "#4DB4D7" },
        { name: "MS SQL", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/osims_1.png",
        "./project-pictures/osims_2.png",
      ],
    },
    {
      title: "ShuttleEase",
      imageSrc: "./banners/shuttleease.png",
      imageAlt: "ShuttleEase",
      projectUrl: "#",
      description:
        "A Tech Startup Project for Technopreneurship Course - A Mobile Shuttle Booking Application for Mapúa MCL",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl:
        "https://www.canva.com/design/DAGAbQzi6E4/OLF8hlegg01uq3ngW_-GXA/edit?utm_content=DAGAbQzi6E4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      websiteUrl: "#",
      techStack: [{ name: "Technopreneurship", color: "#4DB4D7" }],
      additionalImages: ["./project-pictures/shuttleease_1.png"],
    },
    {
      title: "Pixel Quest",
      imageSrc: "./banners/pixelquest.png",
      imageAlt: "Pixel Quest",
      projectUrl: "https://github.com/wncelrcn/PixelQuest",
      description:
        "A Machine Problem Project for IT111L, A Pixel Maze Game made in C# WinForms",
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      techStack: [
        { name: "C#", color: "#4DB4D7" },
        { name: "Windows Forms", color: "#4DB4D7" },
      ],
      additionalImages: [
        "./project-pictures/pixelquest_1.png",
        "./project-pictures/pixelquest_2.png",
        "./project-pictures/pixelquest_3.png",
      ],
    },
    {
      title: "4Pycs1Word",
      imageSrc: "./banners/4pycs.png",
      imageAlt: "4Pycs1Word",
      projectUrl: "https://github.com/wncelrcn/4Pics1Word-PythonEdition",
      description:
        "A 4 Pics 1 Word Clone Game made in Python - Made using Python, and Tkinter",
      techStack: [
        { name: "Python", color: "#4DB4D7" },
        { name: "Tkinter", color: "#4DB4D7" },
      ],
      paperUrl: "#",
      figmaUrl: "#",
      presentationUrl: "#",
      websiteUrl: "#",
      additionalImages: [
        "./project-pictures/4pycs_1.png",
        "./project-pictures/4pycs_2.png",
        "./project-pictures/4pycs_4.png",
      ],
    },
  ];

  return (
    <MotionContainer
      maxWidth="lg"
      sx={{ mt: 8 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox variants={headingVariants}>
        <SectionTitle>PROJECTS</SectionTitle>
        <MainTitle>Projects I've Made</MainTitle>
        <SubTitle>
          From intelligent AI applications to full-stack web solutions – I
          transform ideas into powerful, user-focused technology that solves
          real problems.
        </SubTitle>
      </MotionBox>

      <ProjectsWrapper>
        <ProjectsContainer>
          <ProjectRows>
            <ProjectRow>
              {row1Projects.map((project, index) => (
                <MotionProjectBox
                  key={index}
                  variants={projectVariants}
                  custom={index}
                >
                  <ProjectBox {...project} />
                </MotionProjectBox>
              ))}
            </ProjectRow>
            <ProjectRow>
              {row2Projects.map((project, index) => (
                <MotionProjectBox
                  key={index}
                  variants={projectVariants}
                  custom={index}
                >
                  <ProjectBox {...project} />
                </MotionProjectBox>
              ))}
            </ProjectRow>
          </ProjectRows>
        </ProjectsContainer>
      </ProjectsWrapper>
    </MotionContainer>
  );
}
