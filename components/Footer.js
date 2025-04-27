"use client";

import React from "react";
import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const FooterContainer = styled(Box)({
  backgroundColor: "#222222",
  color: "white",
  padding: "60px 0 40px",
  width: "100%",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
});

const FooterSection = styled(Box)({
  marginBottom: "20px",
});

const FooterHeading = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
});

const FooterText = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "0.9rem",
  color: "white",
});

const FooterLink = styled(MuiLink)({
  color: "white",
  textDecoration: "none",
  marginRight: "10px",
  fontFamily: "var(--font-urbanist)",
  "&:hover": {
    textDecoration: "underline",
  },
});

const FooterGreeting = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "50px",
});

const CopyrightText = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "0.9rem",
  color: "#4DB4D7",
});

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterGreeting variant="h6">
          Thanks for stopping by, let's chat! 👋
        </FooterGreeting>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderRadius: "20px 20px 0 0",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <FooterSection>
            <FooterHeading>CONTACT ME 📬</FooterHeading>
            <FooterText>
              <MuiLink
                href="mailto:rivanowincelarcen@gmail.com"
                color="inherit"
                underline="none"
                sx={{ "&:hover": { textDecoration: "underline" } }}
              >
                rivanowincelarcen@gmail.com
              </MuiLink>
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterHeading>LET'S CONNECT 🤝</FooterHeading>
            <Box>
              <FooterLink
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </FooterLink>
              {" | "}
              <FooterLink
                href="https://linkedin.com/in/wincelarcen"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </FooterLink>
              {" | "}
              <FooterLink
                href="https://github.com/wncelrcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </FooterLink>
            </Box>
          </FooterSection>

          <FooterSection>
            <CopyrightText>© 2025 WINCE LARCEN RIVANO</CopyrightText>
            <FooterText>All rights reserved.</FooterText>
          </FooterSection>
        </Box>
      </Container>
    </FooterContainer>
  );
}
