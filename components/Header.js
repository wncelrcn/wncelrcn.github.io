"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  marginLeft: "0.5rem",
});

const MobileNavItem = styled(ListItem)({
  padding: "1rem 2rem",
});

export default function Header() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/certifications", label: "Certifications" },
  ];

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

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ color: "#000000", mr: "0.3rem" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  width: "70%",
                  maxWidth: "300px",
                  backgroundColor: "#EDF7F7",
                  paddingTop: "1rem",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 1rem 1rem",
                }}
              >
                <Logo variant="h6">MENU</Logo>
                <IconButton onClick={toggleDrawer}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navItems.map((item) => (
                  <MobileNavItem key={item.path}>
                    <Link
                      href={item.path}
                      style={{ textDecoration: "none", width: "100%" }}
                      onClick={toggleDrawer}
                    >
                      <Typography
                        sx={{
                          color: "#000000",
                          fontWeight: 600,
                          fontFamily: "var(--font-urbanist)",
                          borderBottom:
                            pathname === item.path
                              ? "2px solid #4DB4D7"
                              : "none",
                          display: "inline-block",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Link>
                  </MobileNavItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: "1.5rem" }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                style={{ textDecoration: "none" }}
              >
                <NavButton
                  sx={{
                    borderBottom:
                      pathname === item.path ? "2px solid #4DB4D7" : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </NavButton>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
}
