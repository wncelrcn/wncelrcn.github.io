"use client";

import React from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const ModalContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "1200px",
  height: "80vh",
  maxHeight: "700px",
  backgroundColor: "white",
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  overflow: "hidden",
});

const ImageSection = styled(Box)({
  width: "50%",
  height: "100%",
  position: "relative",
  backgroundColor: "#E0E0E0",
});

const ContentSection = styled(Box)({
  width: "50%",
  height: "100%",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
});

const ProjectTitle = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "24px",
});

const TagsContainer = styled(Box)({
  display: "flex",
  gap: "12px",
  marginBottom: "32px",
});

const TechTag = styled(Box)(({ color = "#4DB4D7" }) => ({
  padding: "4px 16px",
  borderRadius: "20px",
  border: `1px solid ${color}`,
  color: color,
  fontSize: "0.875rem",
  fontFamily: "var(--font-urbanist)",
}));

const ProjectDescription = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "#333",
  marginBottom: "32px",
  flex: 1,
});

const GitHubLink = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const PaperLink = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const FigmaLink = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const PresentationLink = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "16px",
  right: "16px",
  color: "#333",
  zIndex: 10,
});

export default function ProjectModal({
  open,
  onClose,
  project = {
    title: "Project Title",
    imageSrc: null,
    imageAlt: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel nunc ac urna elementum malesuada. Praesent condimentum vel turpis mollis vulputate.",
    projectUrl: "#",
    paperUrl: "#",
    figmaUrl: "#",
    presentationUrl: "#",
    techStack: [
      { name: "ML", color: "#4DB4D7" },
      { name: "ML", color: "#4DB4D7" },
      { name: "ML", color: "#4DB4D7" },
    ],
    additionalImages: [],
  },
}) {
  const handleGitHubClick = () => {
    if (project.projectUrl !== "#") {
      window.open(project.projectUrl, "_blank");
    }
  };
  const handlePaperClick = () => {
    if (project.paperUrl !== "#") {
      window.open(project.paperUrl, "_blank");
    }
  };
  const handleFigmaClick = () => {
    if (project.figmaUrl !== "#") {
      window.open(project.figmaUrl, "_blank");
    }
  };
  const handlePresentationClick = () => {
    if (project.presentationUrl !== "#") {
      window.open(project.presentationUrl, "_blank");
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <ImageSection>
          {project.additionalImages && project.additionalImages.length > 0 ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflowX: "auto",
                display: "flex",
                scrollbarWidth: "none", // <-- For Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // <-- For Chrome, Safari, Edge
                },
              }}
            >
              {project.additionalImages.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Box>
          ) : project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt || project.title}
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
                fontSize: "5rem",
              }}
            >
              🖼️
            </Box>
          )}
        </ImageSection>

        <ContentSection>
          <ProjectTitle id="project-modal-title">{project.title}</ProjectTitle>

          <TagsContainer>
            {project.techStack.map((tech, index) => (
              <TechTag key={index} color={tech.color}>
                {tech.name}
              </TechTag>
            ))}
          </TagsContainer>

          <ProjectDescription id="project-modal-description">
            {project.description}
          </ProjectDescription>

          <GitHubLink onClick={handleGitHubClick}>
            View Project on GitHub
          </GitHubLink>
        </ContentSection>
      </ModalContainer>
    </Modal>
  );
}
