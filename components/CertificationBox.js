import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled } from "@mui/material/styles";

const CertificationCard = styled(Box)(({ theme }) => ({
  border: "2px solid #39B1DE",
  borderRadius: "12px",
  padding: "1.5rem",
  width: "320px",
  height: "180px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: "1rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "600",
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  textAlign: "center",
}));

const Organization = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  color: "#666",
  marginBottom: "auto",
  textAlign: "center",
}));

const ViewButton = styled(Button)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  color: "#4DB4D7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0",
  textTransform: "none",
  margin: "0 auto",
  "&:hover": {
    background: "transparent",
  },
  "& .MuiSvgIcon-root": {
    marginLeft: "0.5rem",
    backgroundColor: "#4DB4D7",
    color: "white",
    borderRadius: "50%",
    padding: "0.3rem",
  },
}));

export default function CertificationBox({
  title,
  organization,
  certificateUrl,
}) {
  return (
    <CertificationCard>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Title>{title}</Title>
        <Organization>{organization}</Organization>
      </Box>
      <ViewButton
        endIcon={<ArrowForwardIcon />}
        onClick={() => window.open(certificateUrl, "_blank")}
      >
        View Certificate
      </ViewButton>
    </CertificationCard>
  );
}
