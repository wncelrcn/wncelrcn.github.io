"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
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

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: "30px",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginBottom: "40px",
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

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

const FooterGreeting = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    textAlign: "center",
    marginBottom: "40px",
  },
}));

const CopyrightText = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "0.9rem",
  color: "#4DB4D7",
});

export default function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{ padding: { xs: "0 20px", md: "0 24px" } }}>
        <FooterGreeting variant="h6">
          Thanks for stopping by, let's chat! 👋
        </FooterGreeting>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" },
            borderRadius: "20px 20px 0 0",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "0" },
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
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "10px", sm: "0" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FooterLink
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </FooterLink>
              {!isMobile && "     "}
              <FooterLink
                href="https://linkedin.com/in/wincelarcen"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </FooterLink>
              {!isMobile && "     "}
              <FooterLink
                href="https://github.com/wncelrcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </FooterLink>
            </Box>
          </FooterSection>

          <FooterSection sx={{ textAlign: { xs: "center", md: "right" } }}>
            <CopyrightText>© 2025 WINCE LARCEN RIVANO</CopyrightText>
            <FooterText>All rights reserved.</FooterText>
          </FooterSection>
        </Box>
      </Container>
    </FooterContainer>
  );
}
