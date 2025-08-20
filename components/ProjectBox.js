"use client";

import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

const ProjectCard = styled(Paper)(({ theme }) => ({
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "white",
  width: "400px",
  minWidth: "400px",
  height: "360px",
  minHeight: "360px",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

const ImageContainer = styled(Box)({
  width: "100%",
  height: "220px",
  minHeight: "220px",
  position: "relative",
  backgroundColor: "#E0E0E0",
});

const ContentWrapper = styled(Box)({
  padding: "24px",
  height: "140px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ProjectTitle = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const TechStack = styled(Box)({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  flex: 1,
  overflow: "hidden",
});

const TechTag = styled(Box)(({ color = "#000" }) => ({
  padding: "4px 12px",
  borderRadius: "20px",
  border: `1px solid ${color}`,
  fontSize: "0.875rem",
  fontFamily: "var(--font-urbanist)",
  whiteSpace: "nowrap",
  color: color,
}));

const ArrowButton = styled(Box)({
  width: "40px",
  height: "40px",
  minWidth: "40px",
  minHeight: "40px",
  borderRadius: "50%",
  backgroundColor: "#4DB4D7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: "#3CA3C6",
  },
});

export default function ProjectBox({
  title = "Project Title",
  imageSrc = null,
  imageAlt = "",
  projectUrl = "#",
  description = "Lorem ipsum...",
  techStack = [
    { name: "ML", color: "#FF6B6B" },
    { name: "React", color: "#4DB4D7" },
    { name: "AWS", color: "#FF9F1C" },
  ],
  additionalImages = [],
  paperUrl = null,
  figmaUrl = null,
  websiteUrl = null,
  presentationUrl = null,
  figmaUrls = null,
  huggingFaceUrl = null,
  colabUrl = null,
  githubUrls = null,
  huggingFaceUrls = null,
  colabUrls = null,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const projectData = {
    title,
    imageSrc,
    imageAlt,
    description,
    projectUrl,
    techStack,
    additionalImages,
    paperUrl,
    figmaUrl,
    websiteUrl,
    presentationUrl,
    figmaUrls,
    huggingFaceUrl,
    colabUrl,
    githubUrls,
    huggingFaceUrls,
    colabUrls,
  };

  return (
    <>
      <ProjectCard elevation={0}>
        <ImageContainer>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontSize: "4rem",
              }}
            >
              🖼️
            </Box>
          )}
        </ImageContainer>
        <ContentWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TechStack>
              {techStack.map((tech, index) => (
                <TechTag key={index} color={tech.color}>
                  {tech.name}
                </TechTag>
              ))}
            </TechStack>
            <ArrowButton onClick={handleArrowClick}>
              <ArrowOutwardIcon />
            </ArrowButton>
          </Box>
        </ContentWrapper>
      </ProjectCard>

      <ProjectModal
        open={modalOpen}
        onClose={handleCloseModal}
        project={projectData}
      />
    </>
  );
}
