"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HelloBubble = styled(Box)({
  backgroundColor: "white",
  padding: "8px 20px",
  borderRadius: "30px",
  display: "inline-flex",
  alignItems: "center",
  margin: "0 auto 20px auto",
  position: "relative",
  border: "1px solid #333",
});

const NameText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  lineHeight: 1.1,
  "& .highlight": {
    color: "#4DB4D7",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  lineHeight: 1.1,
  marginBottom: "2rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const HalfCircle = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "600px",
  marginTop: "4rem",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "400px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "50% 100%",
    borderTopRightRadius: "50% 100%",
    backgroundColor: "#4DB4D7",
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
}));

const StarSvg = styled("svg")({
  position: "absolute",
  width: "80px",
  height: "80px",
  color: "#47D2FE",
  zIndex: 1,
});

const ConnectButtonGroup = styled(Box)({
  position: "absolute",
  bottom: "5%",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const ConnectButton = styled(Button)({
  color: "white",
  borderColor: "white",
  borderRadius: "50px",
  padding: "10px 20px",
  textTransform: "none",
  fontFamily: "var(--font-urbanist)",
  fontSize: "1rem",
  "&:hover": {
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#6e6e6e",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "1rem",
}));

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
  borderRadius: "10px",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  },
}));

const ValueTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "0.75rem",
  color: "#333",
}));

const ValueDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  color: "#666",
  lineHeight: 1.6,
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 6, md: 12 },
        mb: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative SVG in top right corner */}
      <StarSvg
        viewBox="0 0 82 84"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        sx={{ top: "20px", right: "100px" }}
      >
        <path
          d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M49.3429 34.6508L52.917 28.1667"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M32.9786 50.3504L28.6387 54.6391"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M52.6361 48.6656L56.9506 51.5758"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
        <path
          d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586"
          stroke="#47D2FE"
          strokeWidth="1.90596"
          strokeLinecap="round"
          fill="#47D2FE"
        ></path>
      </StarSvg>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <HelloBubble>
          <Typography
            variant="body1"
            sx={{ fontFamily: "var(--font-urbanist)", fontWeight: 500 }}
          >
            Hello!
          </Typography>
        </HelloBubble>

        <Box sx={{ mt: 2, mb: 4 }}>
          <NameText variant="h1">
            I'm <span className="highlight">Wince Larcen</span>,
          </NameText>
          <TitleText variant="h1">Aspiring Software Engineer</TitleText>
        </Box>
      </Box>

      {/* Half Circle element with profile picture and connect buttons */}
      <HalfCircle>
        {/* Profile picture */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "350px", sm: "550px", md: "650px" },
            height: "auto",
            zIndex: 1,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Box
            component="img"
            src="./profile-picture.png"
            alt="Wince Larcen"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
              marginBottom: "-5px",
            }}
          />
        </Box>

        {/* Connect buttons at the bottom */}
        <ConnectButtonGroup>
          <ConnectButton
            variant="outlined"
            startIcon={<Typography sx={{ mr: 1 }}>Connect with me:</Typography>}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <a
                href="https://github.com/wncelrcn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <GitHubIcon fontSize="medium" sx={{ marginTop: "5px" }} />
              </a>
              <a
                href="https://linkedin.com/in/wincelarcen"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <LinkedInIcon fontSize="medium" sx={{ marginTop: "5px" }} />
              </a>
              <a
                href="mailto:rivanowincelarcen@gmail.com"
                style={{ color: "white" }}
              >
                <EmailIcon fontSize="medium" sx={{ marginTop: "5px" }} />
              </a>
              <Box
                sx={{
                  width: 1,
                  height: "20px",
                  borderLeft: "1px solid white",
                  mx: 1,
                }}
              />
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  fontFamily: "var(--font-urbanist)",
                }}
              >
                Resume <ArrowOutwardIcon fontSize="small" sx={{ ml: 0.5 }} />
              </a>
            </Box>
          </ConnectButton>
        </ConnectButtonGroup>
      </HalfCircle>

      {/* About Me Section */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { md: 8, xs: 5 },
          }}
        >
          {/* Left Column - About Me */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-urbanist)",
                textTransform: "uppercase",
                fontWeight: "500",
                color: "#aaa",
                mb: 2,
              }}
            >
              A LITTLE ABOUT ME
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "var(--font-urbanist)",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Hi, I'm Wince Larcen!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-urbanist)",
                color: "#666",
                mb: 2,
                lineHeight: 1.8,
              }}
            >
              I am currently a Third Year BS in Computer Science Student at
              Mapua Malayan Colleges Laguna.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-urbanist)",
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vel nunc ac urna elementum malesuada. Praesent condimentum vel
              turpis mollis vulputate. Duis nibh lacus, fermentum at posuere id,
              laoreet in tellus. Aliquam erat volutpat. Maecenas varius, mauris
              nec auctor consequat, odio nibh lobortis dolor, a aliquam tellus
              nisl non lacus.
            </Typography>
          </Box>

          {/* Right Column - Values */}
          <Box sx={{ flex: 1 }}>
            <SectionTitle>MY VALUES</SectionTitle>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <ValueCard>
                  <ValueTitle>Value 1</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel nunc ac urna elementum malesuada.
                  </ValueDescription>
                </ValueCard>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueCard>
                  <ValueTitle>Value 2</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel nunc ac urna elementum malesuada.
                  </ValueDescription>
                </ValueCard>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueCard>
                  <ValueTitle>Value 3</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel nunc ac urna elementum malesuada.
                  </ValueDescription>
                </ValueCard>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueCard>
                  <ValueTitle>Value 4</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel nunc ac urna elementum malesuada.
                  </ValueDescription>
                </ValueCard>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ValueCard>
                  <ValueTitle>Value 5</ValueTitle>
                  <ValueDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vel nunc ac urna elementum malesuada.
                  </ValueDescription>
                </ValueCard>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
