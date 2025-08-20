"use client";

import React from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageCarousel from "../../components/ImageCarousel";

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

// Motion components
const MotionContainer = motion(Container);
const MotionBox = motion(Box);
const MotionSectionHeading = motion(SectionHeading);
const MotionExperienceItem = motion(ExperienceItem);
const MotionListItem = motion(ListItem);
const MotionTypography = motion(Typography);

export default function Experience() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sectionHeadingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const experienceItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const highlightCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Highlight events with their respective images
  const highlightEvents = [
    {
      title: "DLSU Hackercup 2025",
      images: [
        "./exp/hackercup-pic.jpg",
        "./exp/hackercup-2.jpeg",
        "./exp/metrowatch.png",
      ],
    },
    {
      title: "National AI Prompt Design Challenge 2025",
      images: [
        "./exp/ai prompt-2.jpeg",
        "./exp/ai prompt-3.jpeg",
        "./exp/kaiya.png",
        "./exp/kAIya-2.png",
        "./exp/ai prompt.png",
      ],
    },
    {
      title: "Datacamp Scholarship 2025 - Data Engineering Pilipinas",
      images: ["./exp/datacamp-scholarship.png"],
    },
    {
      title: "UPLB Warframes Web Design Competition",
      images: [
        "./exp/warframes-2.jpeg",
        "./exp/warframes-1.jpeg",
        "./exp/warframes-cert.png",
      ],
    },
    {
      title: "CodeChum National Programming Challenge 2024",
      images: ["./exp/codechum-1.jpeg", "./exp/codechum-cert.png"],
    },
  ];

  return (
    <MotionContainer
      maxWidth="lg"
      sx={{ mt: 8, pb: 8 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox variants={headingVariants}>
        <SectionTitle>EXPERIENCE AND EDUCATION</SectionTitle>
        <MainTitle>Career & Academic Background</MainTitle>
        <SubTitle>
          My educational and professional journey, built on continuous learning
          and real-world challenges.
        </SubTitle>
      </MotionBox>

      <MotionSectionHeading variants={sectionHeadingVariants}>
        EXPERIENCE
      </MotionSectionHeading>
      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox>
              <Image
                src="./exp/codebility.jpeg"
                alt="Codebility"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </IconBox>
            <ExperienceTitle>UI/UX Designer Intern</ExperienceTitle>
          </TitleWithIcon>
          <DateRange>Jun 2025 - Present</DateRange>
        </ExperienceHeader>
        <BulletList>
          <MotionListItem variants={listItemVariants}>
            Designed wireframes and high-fidelity mockups and prototypes for
            mobile apps and websites, focusing on user experience, and
            functionality.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Built interactive Figma prototypes and a component-based design
            system with reusable styles and variants.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Ran quick usability checks and iterated on feedback to improve task
            completion time and visual consistency.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox>
              <Image
                src="./exp/freelance.png"
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
          <MotionListItem variants={listItemVariants}>
            Sourced and engaged clients through online platforms, primarily
            Facebook, to secure project commissions.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Delivered diverse coding projects, ranging from simple assignments
            to comprehensive full-stack systems.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Worked on a flexible, commission-based model, tailoring solutions to
            meet client requirements and deadlines.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox style={{ backgroundColor: "#000" }}>
              <Image
                src="./exp/headstarter.png"
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
          <MotionListItem variants={listItemVariants}>
            Built 5 AI-integrated web development projects, combining AI
            technologies with modern web frameworks.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Participated in hackathons, collaborating with diverse teams to
            develop innovative solutions under tight deadlines.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Enhanced technical proficiency in AI and web development, gaining
            hands-on experience in creating user-centric applications.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionSectionHeading variants={sectionHeadingVariants}>
        EDUCATION
      </MotionSectionHeading>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/mmcl.png"
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
          <MotionListItem variants={listItemVariants}>
            President's Lister and Dean's Lister throughout my current stay at
            Mapúa Malayan Colleges Laguna (Running GWA of 1.162)
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Currently a Fourth Year BS Computer Science Student
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Currently taking Machine Learning Specialization Track
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/scitech.png"
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
          <MotionListItem variants={listItemVariants}>
            Took up the STEM Strand in Santa Rosa Science and Technology High
            School
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Graduated with High Honors, overall grade of 97.40
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionSectionHeading variants={sectionHeadingVariants}>
        ORGANIZATIONS
      </MotionSectionHeading>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/acm.jpg"
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
          <MotionListItem variants={listItemVariants}>
            Conducted programming workshops and mentoring sessions to support
            the learning and development of fellow Computer Science students.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Served as a mentor, guiding peers in understanding core programming
            concepts and best practices.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Assisted in organizing, facilitating, and managing Mapúa MCL
            ACM-hosted programming competitions within the university.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Represented the organization in external programming competitions as
            a participant.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#B33131", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/jpcs.jpg"
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
          <MotionListItem variants={listItemVariants}>
            Acted as the primary liaison between the JPCS organization and the
            2nd year student body.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Relayed official announcements, event details, and updates from JPCS
            to fellow 2nd year students.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Provided assistance and coordination for students needing support or
            clarification regarding JPCS activities.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Helped foster communication and engagement between the organization
            and the 2nd year community.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionSectionHeading variants={sectionHeadingVariants}>
        COMPETITIONS AND AWARDS
      </MotionSectionHeading>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#000000", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/hackercup.jpg"
                alt="Hackercup"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </IconBox>
            <ExperienceTitle>DLSU Hackercup 2025 - Participant</ExperienceTitle>
          </TitleWithIcon>
          <DateRange>Aug 2025</DateRange>
        </ExperienceHeader>
        <BulletList>
          <MotionListItem variants={listItemVariants}>
            Participated in DLSU's award-winning nationwide hackathon focused on
            SDG 11 (Sustainable Cities and Communities) with ₱35,000 in total
            prizes.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Developed MetroWatch, a community-driven safety platform featuring
            mobile app and web dashboard for real-time incident reporting and
            community awareness.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Collaborated in a 2-day intensive hackathon to build practical
            solutions addressing everyday community hassles and urban
            inefficiencies.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Gained hands-on experience in mobile and web development while
            participating in workshops and receiving mentorship from industry
            professionals.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#ffffff", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/straits.jpg"
                alt="AI Prompt"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </IconBox>
            <ExperienceTitle>
              National AI Prompt Design Challenge Philippines 2025 - Participant
            </ExperienceTitle>
          </TitleWithIcon>
          <DateRange>Jun 2025</DateRange>
        </ExperienceHeader>
        <BulletList>
          <MotionListItem variants={listItemVariants}>
            Collaborated with team members to design AI-powered solutions using
            advanced prompt engineering techniques and LLM instruction
            optimization.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Gained hands-on experience with the CAPABARA platform for prompt
            experimentation and learned ethical AI development practices from
            industry experts.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Developed and submitted KAIya - an AI-Powered Fitness and Wellness
            Coach prototype tailored for the Filipino market, addressing local
            health and wellness needs.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Enhanced understanding of LLM integration in software projects,
            focusing on efficiency, user experience, and practical
            implementation strategies.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#02ef61", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/datacamp.jpg"
                alt="Warframes"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </IconBox>
            <ExperienceTitle>
              Datacamp Scholarship Recipient - Data Engineering Pilipinas
            </ExperienceTitle>
          </TitleWithIcon>
          <DateRange>Apr 2025</DateRange>
        </ExperienceHeader>
        <BulletList>
          <MotionListItem variants={listItemVariants}>
            Awarded a one-year scholarship to DataCamp by the Data Engineering
            Pilipinas Community.
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Gained access to premium courses covering data engineering, data
            science, and machine learning, with hands-on training in Python,
            SQL, cloud tools, data pipelines, and machine learning model
            development.
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#98A3E5", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/coss.jpg"
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
          <MotionListItem variants={listItemVariants}>
            Secured 3rd place in the prestigious Warframes Web Design
            Competition 2025, competing against top senior high and college
            students across the Philippines
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Designed and developed a data visualization web application
            prototype focused on the competition theme "Visualizing the Reading
            Crisis"
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Employed advanced data analysis techniques to identify key factors
            affecting reading comprehension among Filipino students
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionExperienceItem variants={experienceItemVariants}>
        <ExperienceHeader>
          <TitleWithIcon>
            <IconBox
              style={{ backgroundColor: "#fff", border: "1px solid #eee" }}
            >
              <Image
                src="./exp/codechum.jpg"
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
          <MotionListItem variants={listItemVariants}>
            Participated in Group Stage 3 of the prestigious CodeChum National
            Programming Challenge 2024, securing 5th place against top
            programming talent nationwide
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Successfully navigated through multiple rounds of competition,
            including the Group Stage and Finals, showcasing problem-solving
            skills and coding expertise
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Demonstrated proficiency in various programming languages and
            algorithms, including Python, Java, and C++
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            Exhibited strong analytical thinking and code optimization skills
            critical for competitive programming
          </MotionListItem>
        </BulletList>
      </MotionExperienceItem>

      <MotionBox mt={6} variants={headingVariants}>
        <MotionTypography
          variant="h3"
          sx={{
            fontFamily: "var(--font-urbanist)",
            fontWeight: "600",
            fontSize: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Competition Highlights and Achievements
        </MotionTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },
            gap: 3,
            mt: 2,
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {highlightEvents.map((event, index) => (
            <MotionBox
              key={index}
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
              variants={highlightCardVariants}
            >
              <ImageCarousel
                images={event.images}
                alt={event.title}
                height={250}
              />
              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-urbanist)",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {event.title}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </MotionBox>
    </MotionContainer>
  );
}
