/**
 * ==============================================================================
 * DHRUV KASHIV PORTFOLIO CONFIGURATION
 * ==============================================================================
 * Centralized configuration for all social links, project repositories, and contact info.
 * Update placeholders with your actual URLs and credentials.
 */

export const CONFIG = {
  name: "Dhruv Kashiv",
  tagline: "Aspiring Engineer × Content Creator",
  headline: "I BUILD THINGS. I CAPTURE STORIES.",
  subtext: "Exploring the intersection of technology, storytelling, and visual creativity.",
  location: "India",
  status: "Available for engineering & creative collaborations",

  // ============================================================================
  // SOCIAL & CONTACT LINKS (Replace placeholders with your real handles)
  // ============================================================================
  social: {
    // [PLACEHOLDER - REPLACE WITH YOUR REAL GITHUB PROFILE URL]
    github: "https://github.com/dhruvkashiv",

    // [PLACEHOLDER - REPLACE WITH YOUR REAL INSTAGRAM URL]
    // Defaulting to clean Instagram home until your username is configured
    instagram: "https://instagram.com", 

    // [PLACEHOLDER - REPLACE WITH YOUR REAL EMAIL ADDRESS]
    email: "dhruvkashiv.contact@gmail.com",

    // Optional LinkedIn or X profile
    linkedin: "https://linkedin.com",
  },

  // ============================================================================
  // PROJECT REPOSITORIES & DEMO URLS
  // ============================================================================
  projects: [
    {
      id: "truelens",
      number: "01",
      title: "TrueLens",
      category: "AI / COMPUTER VISION",
      tagline: "AI-Powered Deepfake Detection Platform",
      description:
        "An AI-powered deepfake detection web application designed to help users analyze images for potential manipulation and synthesized artifacts in real-time.",
      stack: ["React", "JavaScript", "Node.js", "Express.js", "Sightengine", "Gemini"],
      githubUrl: "https://github.com/dhruvkashiv/Team-4pi", // Active repository
      demoUrl: null, // [PLACEHOLDER: Add live demo URL if available]
      isPlaceholderLink: false,
      aspectRatio: "16:10",
      featured: true,
      meta: {
        architecture: "Client-Server Vision Pipeline",
        models: "Sightengine Media API + Google Gemini Multimodal",
        status: "Production Ready",
      },
      highlights: [
        "Multi-layer forensic analysis checking compression inconsistencies & facial landmark coherence",
        "Deep integration with Google Gemini for explainable forensic rationale breakdown",
        "Fast client-side upload pipeline with immediate frame-by-frame confidence scoring",
      ],
    },
    {
      id: "hostlur",
      number: "02",
      title: "Hostlur",
      category: "WEB PLATFORM / AUTOMATION",
      tagline: "Smart Hostel Management & Complaint Resolution System",
      description:
        "A hostel management and complaint-resolution platform connecting students with hostel administration through organized reporting, priority routing, and AI-assisted triage.",
      stack: ["React", "Node.js", "Express.js", "MongoDB", "AI Triage"],
      githubUrl: "#", // [PLACEHOLDER - REPLACE WITH HOSTLUR GITHUB REPOSITORY URL]
      demoUrl: null, // [PLACEHOLDER: Add live demo URL if available]
      isPlaceholderLink: true,
      aspectRatio: "16:10",
      featured: true,
      meta: {
        architecture: "Full-Stack Portal with Ticket State Engine",
        target: "Collegiate Living & Student Housing",
        status: "In Active Development",
      },
      highlights: [
        "Structured issue logging categorized by electrical, plumbing, sanitation, and room logistics",
        "AI-assisted sentiment and priority estimation for administrative escalations",
        "Transparent real-time resolution timeline tracking for resident peace of mind",
      ],
    },
    {
      id: "urbanpulse-ai",
      number: "03",
      title: "UrbanPulse AI",
      category: "AI / GEOSPATIAL INTELLIGENCE",
      tagline: "City-Scale Spatial Intelligence & Decision Support",
      description:
        "An AI-powered urban intelligence concept focused on synthesizing complex environmental, traffic, and municipal telemetry into actionable insights for modern cities.",
      stack: ["Python", "Computer Vision", "FastAPI", "React", "Data Analytics"],
      githubUrl: "#", // [PLACEHOLDER - REPLACE WITH URBANPULSE GITHUB REPOSITORY URL]
      demoUrl: null, // [PLACEHOLDER: Add live demo URL if available]
      isPlaceholderLink: true,
      aspectRatio: "16:10",
      featured: true,
      meta: {
        architecture: "Spatial Stream Processing & Heuristic Modeling",
        target: "Smart City Infrastructure Planning",
        status: "Concept & Prototyping",
      },
      highlights: [
        "Aggregates multimodal sensor feeds and pedestrian flow distributions",
        "Predictive spatial modeling for urban anomaly detection and transit planning",
        "Minimalist command dashboard engineered for real-time clarity and low latency",
      ],
    },
  ],

  // ============================================================================
  // CREATOR / VIDEO EDITING WORKS ("BEHIND THE SCENES")
  // ============================================================================
  creatorWorks: [
    {
      id: "c1",
      title: "Cinematic Narrative & Pace Study",
      category: "COLOR GRADING · SOUND DESIGN",
      duration: "01:42",
      aspectRatio: "2.39:1",
      description: "Exploration of rhythmic jump cuts, dynamic color temperature transitions, and diegetic sound design.",
      videoUrl: "#", // [PLACEHOLDER - REPLACE WITH YOUTUBE / DRIVE / VIMEO LINK]
      timecode: "00:01:42:18",
      fps: "24 FPS RAW",
    },
    {
      id: "c2",
      title: "Tech Minimalism & Product Reveal",
      category: "MOTION GRAPHICS · EDITING",
      duration: "00:58",
      aspectRatio: "16:9",
      description: "High-contrast typography animations, kinetic cuts, and macro hardware lighting reveals.",
      videoUrl: "#", // [PLACEHOLDER - REPLACE WITH YOUTUBE / DRIVE / VIMEO LINK]
      timecode: "00:00:58:04",
      fps: "60 FPS CRISP",
    },
    {
      id: "c3",
      title: "Visual Diary: City in Motion",
      category: "STREET DOCUMENTARY · EDITING",
      duration: "02:15",
      aspectRatio: "4:3",
      description: "Atmospheric street frames, vintage film emulations, and ambient environmental audio scoring.",
      videoUrl: "#", // [PLACEHOLDER - REPLACE WITH YOUTUBE / DRIVE / VIMEO LINK]
      timecode: "00:02:15:12",
      fps: "24 FPS 16MM",
    },
    {
      id: "c4",
      title: "Micro-Short: The Night Shift",
      category: "LIGHTING · COLOR DYNAMICS",
      duration: "01:10",
      aspectRatio: "2.35:1",
      description: "Low-light experimentation pairing neon hues with deep charcoal contrast and crisp sound sync.",
      videoUrl: "#", // [PLACEHOLDER - REPLACE WITH YOUTUBE / DRIVE / VIMEO LINK]
      timecode: "00:01:10:00",
      fps: "24 FPS LOG",
    },
  ],

  // ============================================================================
  // CORE SKILLS
  // ============================================================================
  skills: [
    { name: "Video Editing", type: "Creative", level: "Premier / DaVinci Resolve", code: "CUT_01" },
    { name: "Storytelling", type: "Creative", level: "Narrative Arc & Pacing", code: "SCR_02" },
    { name: "Content Creation", type: "Creative", level: "Visual Concepts & Media", code: "CON_03" },
    { name: "Python", type: "Engineering", level: "AI / Automation / Scripts", code: "PY_04" },
    { name: "Web Development", type: "Engineering", level: "React, Node.js, Modern CSS", code: "WEB_05" },
    { name: "UI/UX", type: "Hybrid", level: "Aesthetic Interfaces & Systems", code: "DSN_06" },
    { name: "Creative Problem Solving", type: "Mindset", level: "Engineering Meets Art", code: "SOL_07" },
  ],
};
