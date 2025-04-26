"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#EDF7F7",
  boxShadow: "none",
  padding: "0.5rem 0",
});

const NavButton = styled(Button)({
  color: "#000000",
  fontWeight: 600,
  fontFamily: "var(--font-urbanist)",
  textTransform: "none",
  fontSize: "1rem",
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
});

const Logo = styled(Typography)({
  color: "#000000",
  fontWeight: "medium",
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  letterSpacing: "5px",
});

export default function Header() {
  const pathname = usePathname();

  return (
    <StyledAppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo variant="h6">WINCE LARCEN</Logo>
        </Link>

        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <NavButton
              sx={{
                borderBottom:
                  pathname === "/projects" ? "2px solid #4DB4D7" : "none",
                borderRadius: 0,
              }}
            >
              Projects
            </NavButton>
          </Link>
          <Link href="/skills" style={{ textDecoration: "none" }}>
            <NavButton
              sx={{
                borderBottom:
                  pathname === "/skills" ? "2px solid #4DB4D7" : "none",
                borderRadius: 0,
              }}
            >
              Skills
            </NavButton>
          </Link>
          <Link href="/experience" style={{ textDecoration: "none" }}>
            <NavButton
              sx={{
                borderBottom:
                  pathname === "/experience" ? "2px solid #4DB4D7" : "none",
                borderRadius: 0,
              }}
            >
              Experience
            </NavButton>
          </Link>
          <Link href="/certifications" style={{ textDecoration: "none" }}>
            <NavButton
              sx={{
                borderBottom:
                  pathname === "/certifications" ? "2px solid #4DB4D7" : "none",
                borderRadius: 0,
              }}
            >
              Certifications
            </NavButton>
          </Link>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
