"use client";

import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Image from "next/image";

export default function ImageCarousel({ images, alt, height = 250 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // If only one image, don't show carousel controls
  if (images.length === 1) {
    return (
      <Box sx={{ height, position: "relative" }}>
        <Image src={images[0]} alt={alt} fill style={{ objectFit: "cover" }} />
      </Box>
    );
  }

  return (
    <Box sx={{ height, position: "relative", overflow: "hidden" }}>
      {/* Main Image */}
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
      />

      {/* Navigation Arrows */}
      <IconButton
        onClick={prevImage}
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
          zIndex: 2,
        }}
        size="small"
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={nextImage}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
          zIndex: 2,
        }}
        size="small"
      >
        <ChevronRight />
      </IconButton>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor:
                index === currentIndex ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor:
                  index === currentIndex ? "white" : "rgba(255,255,255,0.8)",
              },
            }}
          />
        ))}
      </Box>

      {/* Image Counter */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: "0.75rem",
          fontFamily: "var(--font-urbanist)",
          zIndex: 2,
        }}
      >
        {currentIndex + 1} / {images.length}
      </Box>
    </Box>
  );
}
