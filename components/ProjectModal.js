"use client";

import React from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const ModalContainer = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "90vh",
    maxHeight: "90vh",
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  position: "relative",
  backgroundColor: "#E0E0E0",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "40%",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "60%",
    padding: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "16px",
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    marginBottom: "12px",
  },
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "32px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "16px",
    gap: "8px",
  },
}));

const TechTag = styled(Box)(({ color = "#4DB4D7", theme }) => ({
  padding: "4px 16px",
  borderRadius: "20px",
  border: `1px solid ${color}`,
  color: color,
  fontSize: "0.875rem",
  fontFamily: "var(--font-urbanist)",
  [theme.breakpoints.down("sm")]: {
    padding: "2px 12px",
    fontSize: "0.75rem",
  },
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "#333",
  marginBottom: "32px",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    marginBottom: "24px",
    fontSize: "0.95rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "16px",
    fontSize: "0.9rem",
  },
}));

const GitHubLink = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const PaperLink = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const FigmaLink = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const PresentationLink = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const WebsiteLink = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.1rem",
  color: "#4DB4D7",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  marginBottom: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  color: "#333",
  zIndex: 10,
  [theme.breakpoints.down("sm")]: {
    top: "8px",
    right: "8px",
  },
}));

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
    figmaUrls: [],
    presentationUrl: "#",
    websiteUrl: "#",
    techStack: [
      { name: "ML", color: "#4DB4D7" },
      { name: "ML", color: "#4DB4D7" },
      { name: "ML", color: "#4DB4D7" },
    ],
    additionalImages: [],
  },
}) {
  // Debug log to check what values are coming in
  console.log("Project data:", {
    websiteUrl: project.websiteUrl,
    projectUrl: project.projectUrl,
    paperUrl: project.paperUrl,
    figmaUrl: project.figmaUrl,
    figmaUrls: project.figmaUrls,
    presentationUrl: project.presentationUrl,
  });

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
  const handleFigmaClick = (url) => {
    if (url !== "#") {
      window.open(url, "_blank");
    }
  };
  const handlePresentationClick = () => {
    if (project.presentationUrl !== "#") {
      window.open(project.presentationUrl, "_blank");
    }
  };

  const handleWebsiteClick = () => {
    if (project.websiteUrl !== "#") {
      let url = project.websiteUrl;
      // Add https:// protocol if the URL doesn't have one
      if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
      }
      window.open(url, "_blank");
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>

        <ImageSection>
          {project.additionalImages && project.additionalImages.length > 0 ? (
            <Box
              sx={(theme) => ({
                width: "100%",
                height: "100%",
                overflowX: "auto",
                display: "flex",
                scrollbarWidth: "none", // <-- For Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // <-- For Chrome, Safari, Edge
                },
                [theme.breakpoints.down("md")]: {
                  height: "100%",
                },
              })}
            >
              {project.additionalImages.map((src, index) => (
                <Box
                  key={index}
                  sx={(theme) => ({
                    minWidth: "100%",
                    height: "100%",
                    position: "relative",
                    [theme.breakpoints.down("md")]: {
                      height: "100%",
                    },
                  })}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
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
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          ) : (
            <Box
              sx={(theme) => ({
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
                fontSize: "5rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "3rem",
                },
              })}
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

          {project.paperUrl !== "#" && (
            <PaperLink onClick={handlePaperClick}>View Paper</PaperLink>
          )}
          {project.figmaUrls && project.figmaUrls.length > 0
            ? project.figmaUrls.map((url, index) => (
                <FigmaLink key={index} onClick={() => handleFigmaClick(url)}>
                  View Figma{" "}
                  {project.figmaUrls.length > 1 ? `#${index + 1}` : ""}
                </FigmaLink>
              ))
            : project.figmaUrl !== "#" && (
                <FigmaLink onClick={() => handleFigmaClick(project.figmaUrl)}>
                  View Figma
                </FigmaLink>
              )}
          {project.presentationUrl &&
            project.presentationUrl.trim() !== "#" && (
              <PresentationLink onClick={handlePresentationClick}>
                View Presentation
              </PresentationLink>
            )}

          {project.websiteUrl && project.websiteUrl !== "#" && (
            <WebsiteLink onClick={handleWebsiteClick}>View Website</WebsiteLink>
          )}

          {project.projectUrl !== "#" && (
            <GitHubLink onClick={handleGitHubClick}>
              View Project on GitHub
            </GitHubLink>
          )}
        </ContentSection>
      </ModalContainer>
    </Modal>
  );
}
