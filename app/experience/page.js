"use client";

import React from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "600",
  color: "#4DB4D7",
  textTransform: "uppercase",
  letterSpacing: "5px",
  marginBottom: "1rem",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "3.5rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.2rem",
  color: "#666",
  marginBottom: "3rem",
  maxWidth: "1000px",
}));

const ExperienceTitle = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginBottom: "0.5rem",
});

const DateRange = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  color: "#4DB4D7",
  fontWeight: "600",
  fontSize: "1.25rem",
  textAlign: "right",
});

const ExperienceSection = styled(Box)({
  marginBottom: "2rem",
});

const SectionHeading = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  fontSize: "2rem",
  marginTop: "2rem",
  marginBottom: "2rem",
});

const ExperienceItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
});

const ExperienceHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1rem",
});

const IconBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "6px",
  overflow: "hidden",
  marginRight: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f0f0",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const BulletList = styled(List)({
  paddingLeft: "1rem",
  "& li": {
    display: "list-item",
    padding: "0.25rem 0",
    fontFamily: "var(--font-urbanist)",
    fontSize: "1.25rem",
  },
  listStyleType: "disc",
  marginLeft: "1rem",
});

const TitleWithIcon = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export default function Experience() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, pb: 8 }}>
      <Box>
        <SectionTitle>EXPERIENCE AND EDUCATION</SectionTitle>
        <MainTitle>Career & Academic Background</MainTitle>
        <SubTitle>
          My educational and professional journey, built on continuous learning
          and real-world challenges.
        </SubTitle>

        <SectionHeading>EXPERIENCE</SectionHeading>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox>
                <Image
                  src="/exp/freelance.png"
                  alt="Freelance Software Developer"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>Freelance Software Developer</ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Dec 2024 - Feb 2025</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Sourced and engaged clients through online platforms, primarily
              Facebook, to secure project commissions.
            </ListItem>
            <ListItem>
              Delivered diverse coding projects, ranging from simple assignments
              to comprehensive full-stack systems.
            </ListItem>
            <ListItem>
              Worked on a flexible, commission-based model, tailoring solutions
              to meet client requirements and deadlines.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox style={{ backgroundColor: "#000" }}>
                <Image
                  src="/exp/headstarter.png"
                  alt="Software Engineering Fellow"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>Software Engineering Fellow</ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Jul 2024 - Sept 2024</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Built 5 AI-integrated web development projects, combining AI
              technologies with modern web frameworks.
            </ListItem>
            <ListItem>
              Participated in hackathons, collaborating with diverse teams to
              develop innovative solutions under tight deadlines.
            </ListItem>
            <ListItem>
              Enhanced technical proficiency in AI and web development, gaining
              hands-on experience in creating user-centric applications.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <SectionHeading>EDUCATION</SectionHeading>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
              >
                <Image
                  src="/exp/mmcl.png"
                  alt="BS in Computer Science"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>
                BS in Computer Science with Specialization in Machine Learning
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Aug 2022 - Present</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              President's Lister and Dean's Lister throughout my current stay at
              Mapúa Malayan Colleges Laguna (Running GWA of 1.1762)
            </ListItem>
            <ListItem>
              Currently a Third Year BS Computer Science Student
            </ListItem>
            <ListItem>
              Currently taking Machine Learning Specialization Track
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
              >
                <Image
                  src="/exp/scitech.png"
                  alt="STEM Education"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>
                Science, Technology, Engineering, and Mathematics (STEM)
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Jun 2016 - Aug 2022</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Took up the STEM Strand in Santa Rosa Science and Technology High
              School
            </ListItem>
            <ListItem>
              Graduated with High Honors, overall grade of 97.40
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <SectionHeading>ORGANIZATIONS</SectionHeading>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
              >
                <Image
                  src="/exp/acm.jpg"
                  alt="acm"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>
                Association for Computing Machinery - Mapúa MCL Chapter
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Aug 2024 - Present</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Conducted programming workshops and mentoring sessions to support
              the learning and development of fellow Computer Science students.
            </ListItem>
            <ListItem>
              Served as a mentor, guiding peers in understanding core
              programming concepts and best practices.
            </ListItem>
            <ListItem>
              Assisted in organizing, facilitating, and managing Mapúa MCL
              ACM-hosted programming competitions within the university.
            </ListItem>
            <ListItem>
              Represented the organization in external programming competitions
              as a participant.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#B33131", border: "1px solid #eee" }}
              >
                <Image
                  src="/exp/jpcs.jpg"
                  alt="JPCS"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>
                Junior Philippine Computer Society - Mapúa MCL Chapter{" "}
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Aug 2023 - Jun 2024</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Acted as the primary liaison between the JPCS organization and the
              2nd year student body.
            </ListItem>
            <ListItem>
              Relayed official announcements, event details, and updates from
              JPCS to fellow 2nd year students.
            </ListItem>
            <ListItem>
              Provided assistance and coordination for students needing support
              or clarification regarding JPCS activities.
            </ListItem>
            <ListItem>
              Helped foster communication and engagement between the
              organization and the 2nd year community.
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <SectionHeading>HONORS & AWARDS</SectionHeading>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#98A3E5", border: "1px solid #eee" }}
              >
                <Image
                  src="/exp/coss.jpg"
                  alt="Warframes"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>
                Warframes: Web Design Competition 2025 - 3rd Placer
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Mar 2025</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Secured 3rd place in the prestigious Warframes Web Design
              Competition 2025, competing against top senior high and college
              students across the Philippines
            </ListItem>
            <ListItem>
              Designed and developed a data visualization web application
              prototype focused on the competition theme "Visualizing the
              Reading Crisis"
            </ListItem>
            <ListItem>
              Employed advanced data analysis techniques to identify key factors
              affecting reading comprehension among Filipino students
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHeader>
            <TitleWithIcon>
              <IconBox
                style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
              >
                <Image
                  src="/exp/codechum.jpg"
                  alt="CodeChum"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </IconBox>
              <ExperienceTitle>
                CodeChum National Programming Challenge 2024 - Group Stage 3 5th
                Placer
              </ExperienceTitle>
            </TitleWithIcon>
            <DateRange>Nov 2024</DateRange>
          </ExperienceHeader>
          <BulletList>
            <ListItem>
              Participated in Group Stage 3 of the prestigious CodeChum National
              Programming Challenge 2024, securing 5th place against top
              programming talent nationwide
            </ListItem>
            <ListItem>
              Successfully navigated through multiple rounds of competition,
              including the Group Stage and Finals, showcasing problem-solving
              skills and coding expertise
            </ListItem>
            <ListItem>
              Demonstrated proficiency in various programming languages and
              algorithms, including Python, Java, and C++
            </ListItem>
            <ListItem>
              Exhibited strong analytical thinking and code optimization skills
              critical for competitive programming
            </ListItem>
          </BulletList>
        </ExperienceItem>

        <Box mt={6}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "var(--font-urbanist)",
              fontWeight: "600",
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Achievement Highlights
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 3,
              mt: 2,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                border: "1px solid #eee",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ height: 250, position: "relative" }}>
                <Image
                  src="/exp/warframes-cert.png"
                  alt="Warframes Web Design Competition Certificate"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  Warframes Web Design Competition
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                border: "1px solid #eee",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ height: 250, position: "relative" }}>
                <Image
                  src="/exp/codechum-cert.png"
                  alt="CodeChum Programming Challenge"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  CodeChum National Programming Challenge
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
