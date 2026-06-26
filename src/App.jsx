import { useState, useEffect, useRef } from "react";

const data = {
  name: "Ayu Hutasoit",
  tagline: "Informatics Student",
  location: "Siborongborong, North Sumatra, Indonesia",
  about:
    "An Informatics undergraduate student passionate about software development. Skilled in programming, algorithms, and problem-solving, with a strong willingness to learn and gain practical experience in developing innovative software solutions.",
  contact: {
    email: "ayuhutasoit3523@gmail.com",
    whatsapp: "https://wa.me/6281262985900",
    linkedin: "https://www.linkedin.com/in/ayuhutasoit",
    github: "https://github.com/ayuhutasoit2004",
  },
  experience: [
    {
      role: "Product Management Intern",
      company: "PT Jejaring Tiga Artha (Zi.Care) – Kota Jakarta, Indonesia",
      period: "June 2026 – August 2026",
      points: [
        "Supported the development of healthcare software solutions by gathering and documenting product requirements.",
        "Coordinating with cross-functional teams and contributing to the successful delivery of product features.",
      ],
    },
    {
      role: "Committee – Blood Donation Event",
      company: "Institut Teknologi Del",
      period: "Aug 2025 – Oct 2025",
      points: [
        "Organized campus blood donation events in collaboration with the Indonesian Red Cross.",
        "Handled planning, coordination, and participant engagement for humanitarian activities.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of S1 Informatika (GPA 2.96/4.00)",
      institution: "Institut Teknologi Del – Laguboti, Indonesia",
      period: "Aug 2023 – Sep 2027 (Expected)",
    },
  ],
  organizations: [
    {
      role: "Department Secretary",
      org: "Student Executive Board (BEM) – Public Relations & Community Service Dept, Institut Teknologi Del",
      period: "Feb 2026 – Present",
      desc: "Manages department administration, documentation, and correspondence, while supporting effective coordination of organizational and community service programs.",
    },
    {
      role: "Deputy Department Secretary",
      org: "Student Executive Board (BEM) – Public Relations & Community Service Dept, Institut Teknologi Del",
      period: "Sep 2024 – Jan 2026",
      desc: "",
    },
  ],
  skills: {
    hard: [
      { label: "Languages", items: ["JavaScript", "Python", "Java", "Kotlin", "PHP", "C", "SQL"] },
      { label: "Mobile", items: ["Kotlin", "Flutter", "Android Jetpack (Compose, ViewModel)", "MVVM Architecture", "Retrofit", "REST API"] },
      { label: "Web", items: ["React.js", "Node.js", "Laravel", "Inertia.js", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "RESTful API", "Authentication (JWT)"] },
      { label: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "MariaDB"] },
      { label: "Tools", items: ["Git & GitHub", "Docker", "Postman", "Figma", "VS Code", "IntelliJ IDEA", "Android Studio", "Maestro"] },
    ],
    soft: ["Analytical Thinking", "Problem Solving", "Communication", "Team Collaboration"],
    languages: ["English (Fluent)", "Indonesian (Native)"],
    interests: ["Product Management", "Quality Assurance (QA)", "Frontend Engineer (FE)"],
  },
  achievements: [
    {
      year: "2026",
      title: "Bronze Medal – Lombok Essay Competition (LEC) 6",
      org: "Universitas Muhammadiyah Mataram & RISKI",
      link: "https://drive.google.com/file/d/1cjbhqwRxaMGx_vRdwv3J-vb0_doZB4Q-/view?usp=sharing",
    },
    {
      year: "2025",
      title: "1st Winner – Himasti Design Competition",
      org: "Divisi Riset dan Teknologi Himasti, Institut Teknologi Del",
      link: "https://drive.google.com/file/d/16LNyTZXOgYYLbAMeGE_kByQLsaemYD9Q/view?usp=sharing",
    },
  ],
  certifications: [
    {
      title: "Automation Webinar – UiPath x Indosat Ooredoo Hutchison",
      year: "2026",
      link: "https://drive.google.com/file/d/1ZLIt28qdjPLiL39f7MtLtTio_-9DdcnB/view?usp=sharing",
    },
    {
      title: "Information System Analysis and Design – GreatNusa x BINUS",
      year: "2025",
      link: "https://drive.google.com/file/d/157FA_xIfLJXd-rOod83EY1Ujd3q2l3i7/view?usp=sharing",
    },
    {
      title: "Microsoft Azure AI Fundamentals (AI-900T00-A) – Microsoft & ElevAlte",
      year: "2025",
      link: "https://drive.google.com/file/d/1ulx2sd022xblmRhS2G7fEyqN61pkns-E/view?usp=sharing",
    },
    {
      title: "KIO® English Examination – Kampung Inggris Online (Avg. 75)",
      year: "2025",
      link: "https://drive.google.com/file/d/1-CSHDoY91ArPzvHhz30qUmMUL9ekBy0m/view?usp=sharing",
    },
    {
      title: "BooKil Bootcamp – Human Resources, Harisenin.com",
      year: "2025",
      link: "https://drive.google.com/file/d/1VAoBQQ8uh_YYFdWfXJoaeEsF83v34U8B/view?usp=sharing",
    },
  ],
  projects: [
    {
      title: "School Information System – SMK Negeri 1 Sigumpar",
      role: "System Analyst",
      year: "2026",
      desc: "Web-based school information system. Analyzed system requirements, designed process flows, and defined system specifications for academic and administrative processes.",
      links: [
        { label: "Web App", url: "https://github.com/weslyambaritaa/smk-n1-sigumpar-app" },
        { label: "Microservice", url: "https://github.com/weslyambaritaa/proyek-smk-n1-sigumpar-microservice" },
        { label: "Mobile", url: "https://github.com/lolagracea/smk_sigumpar_mobile" },
      ],
      tags: ["System Analyst", "Web", "Microservice", "Mobile"],
    },
    {
      title: "Android App – MVVM + Ktor RESTful API",
      role: "Developer",
      year: "2026",
      desc: "MVVM-based Android app integrated with RESTful API using Ktor, featuring authentication, CRUD operations, and Jetpack Compose.",
      links: [{ label: "GitHub", url: "https://github.com/ayuhutasoit2004/pam_p8_2026_ifs23015" }],
      tags: ["Kotlin", "Ktor", "Jetpack Compose", "MVVM"],
    },
    {
      title: "Post Management App – React.js + Redux Toolkit",
      role: "Developer",
      year: "2025",
      desc: "Post management web app with CRUD features and state management using Redux Toolkit.",
      links: [{ label: "GitHub", url: "https://github.com/ayuhutasoit2004/11S23015-proyek-post" }],
      tags: ["React.js", "Redux Toolkit", "CRUD"],
    },
    {
      title: "LPPM Journal Registration Fund System – QA",
      role: "Quality Assurance",
      year: "2025",
      desc: "Quality assurance in the development of the LPPM Journal Registration Fund Application System.",
      links: [{ label: "GitHub", url: "https://github.com/JeremyMarcll/LPPM-Proyek" }],
      tags: ["QA", "Testing"],
    },
  ],
};

// ── Palette ──────────────────────────────────────────────────────
const C = {
  blush: "#F2D7D9",
  rose: "#C9869A",
  deepRose: "#8B3A52",
  mauve: "#6B3A57",
  ivory: "#FAF7F5",
  warmWhite: "#FFFFFF",
  softGray: "#F5F0F2",
  textDark: "#2A1A20",
  textMid: "#6B4D57",
  textLight: "#A8889A",
  accent: "#D4A0B0",
  gold: "#C6956A",
};

const styles = {
  root: {
    fontFamily: "'Georgia', 'Times New Roman', serif",
    background: C.ivory,
    color: C.textDark,
    minHeight: "100vh",
    overflowX: "hidden",
  },

  // NAV
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: "rgba(250,247,245,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: `1px solid ${C.blush}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 48px",
  },
  navLogo: {
    fontFamily: "'Georgia', serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: C.deepRose,
    letterSpacing: "0.06em",
    textDecoration: "none",
  },
  navLinks: {
    display: "flex",
    gap: "28px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.78rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: C.textMid,
    cursor: "pointer",
    transition: "color 0.2s",
    textDecoration: "none",
    background: "none",
    border: "none",
  },

  // HERO
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 48px 80px",
    position: "relative",
    overflow: "hidden",
    background: `linear-gradient(145deg, ${C.ivory} 0%, #F7ECF0 60%, #EDD8DF 100%)`,
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },
  heroInner: {
    maxWidth: 720,
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  heroEyebrow: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.72rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: C.rose,
    marginBottom: 20,
    display: "block",
  },
  heroName: {
    fontFamily: "'Georgia', serif",
    fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
    fontWeight: 400,
    lineHeight: 1.12,
    color: C.deepRose,
    margin: "0 0 12px",
    letterSpacing: "-0.01em",
  },
  heroNameAccent: {
    color: C.deepRose,
    fontStyle: "normal",
  },
  heroTagline: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "1rem",
    color: C.textMid,
    marginBottom: 28,
    fontWeight: 400,
    letterSpacing: "0.02em",
  },
  heroLocation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.82rem",
    color: C.textLight,
    marginBottom: 44,
  },
  heroDivider: {
    width: 48,
    height: 1,
    background: `linear-gradient(90deg, transparent, ${C.rose}, transparent)`,
    margin: "0 auto 44px",
  },
  heroContactRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
  },
  heroContactBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "10px 22px",
    borderRadius: 50,
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.8rem",
    letterSpacing: "0.04em",
    cursor: "pointer",
    transition: "all 0.25s",
    textDecoration: "none",
  },
  heroBtnPrimary: {
    background: C.deepRose,
    color: "#fff",
    border: `1.5px solid ${C.deepRose}`,
  },
  heroBtnSecondary: {
    background: "transparent",
    color: C.deepRose,
    border: `1.5px solid ${C.rose}`,
  },

  // SECTION
  section: {
    padding: "88px 48px",
  },
  sectionAlt: {
    background: C.softGray,
  },
  sectionInner: {
    maxWidth: 900,
    margin: "0 auto",
  },
  sectionLabel: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.68rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: C.rose,
    marginBottom: 8,
    display: "block",
  },
  sectionTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "2rem",
    fontWeight: 400,
    color: C.textDark,
    marginBottom: 40,
    position: "relative",
  },
  sectionTitleLine: {
    display: "inline-block",
    borderBottom: `2px solid ${C.blush}`,
    paddingBottom: 4,
  },

  // ABOUT
  aboutText: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: C.textMid,
    maxWidth: 680,
  },
  aboutHighlight: {
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
    color: C.deepRose,
  },

  // TIMELINE (experience / education / org)
  timeline: {
    position: "relative",
    paddingLeft: 32,
  },
  timelineBar: {
    position: "absolute",
    left: 0,
    top: 8,
    bottom: 8,
    width: 2,
    background: `linear-gradient(180deg, ${C.rose} 0%, ${C.blush} 100%)`,
    borderRadius: 2,
  },
  timelineItem: {
    position: "relative",
    marginBottom: 40,
    paddingLeft: 24,
  },
  timelineDot: {
    position: "absolute",
    left: -38,
    top: 6,
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: C.deepRose,
    border: `2px solid ${C.ivory}`,
    boxShadow: `0 0 0 3px ${C.blush}`,
  },
  timelineRole: {
    fontFamily: "'Georgia', serif",
    fontSize: "1.1rem",
    fontWeight: 600,
    color: C.textDark,
    marginBottom: 2,
  },
  timelineCompany: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.88rem",
    color: C.rose,
    marginBottom: 4,
    fontWeight: 500,
  },
  timelinePeriod: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.76rem",
    color: C.textLight,
    marginBottom: 12,
    letterSpacing: "0.04em",
  },
  timelinePoints: {
    paddingLeft: 16,
    margin: 0,
  },
  timelinePoint: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.9rem",
    color: C.textMid,
    lineHeight: 1.6,
    marginBottom: 6,
  },

  // SKILLS
  skillGroup: {
    marginBottom: 28,
  },
  skillGroupLabel: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.textLight,
    marginBottom: 10,
  },
  skillTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  skillTag: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.8rem",
    padding: "5px 14px",
    borderRadius: 50,
    background: C.warmWhite,
    color: C.textMid,
    border: `1px solid ${C.blush}`,
    transition: "all 0.2s",
  },
  skillTagAccent: {
    background: C.blush,
    color: C.deepRose,
    border: `1px solid ${C.rose}`,
  },

  // PROJECTS
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
    gap: 24,
  },
  projectCard: {
    background: C.warmWhite,
    border: `1px solid ${C.blush}`,
    borderRadius: 16,
    padding: 28,
    transition: "all 0.25s",
    cursor: "default",
  },
  projectYear: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.rose,
    marginBottom: 8,
  },
  projectTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "1.05rem",
    fontWeight: 600,
    color: C.textDark,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  projectRole: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.78rem",
    color: C.gold,
    marginBottom: 12,
    fontStyle: "italic",
  },
  projectDesc: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.88rem",
    color: C.textMid,
    lineHeight: 1.65,
    marginBottom: 16,
  },
  projectTagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 16,
  },
  projectTag: {
    fontSize: "0.72rem",
    padding: "3px 10px",
    borderRadius: 50,
    background: C.softGray,
    color: C.textMid,
    fontFamily: "system-ui, sans-serif",
  },
  projectLinks: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  projectLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: "0.78rem",
    fontFamily: "system-ui, sans-serif",
    color: C.deepRose,
    textDecoration: "none",
    padding: "4px 12px",
    borderRadius: 50,
    border: `1px solid ${C.rose}`,
    transition: "all 0.2s",
  },

  // ACHIEVEMENTS
  achGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 20,
  },
  achCard: {
    background: C.warmWhite,
    border: `1px solid ${C.blush}`,
    borderRadius: 14,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  achYear: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.rose,
  },
  achTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: "1rem",
    fontWeight: 600,
    color: C.textDark,
    lineHeight: 1.4,
  },
  achOrg: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.82rem",
    color: C.textMid,
  },
  achLink: {
    alignSelf: "flex-start",
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.76rem",
    color: C.deepRose,
    textDecoration: "none",
    padding: "3px 10px",
    border: `1px solid ${C.rose}`,
    borderRadius: 50,
    transition: "all 0.2s",
    marginTop: 4,
  },

  // CERTIFICATIONS
  certList: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  certItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    background: C.warmWhite,
    border: `1px solid ${C.blush}`,
    borderRadius: 12,
    padding: "18px 22px",
  },
  certDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: C.rose,
    flexShrink: 0,
    marginTop: 6,
  },
  certYear: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    color: C.rose,
    flexShrink: 0,
    minWidth: 36,
    paddingTop: 2,
  },
  certTitle: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.9rem",
    color: C.textDark,
    flex: 1,
    lineHeight: 1.5,
  },
  certLink: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.75rem",
    color: C.deepRose,
    textDecoration: "none",
    flexShrink: 0,
    padding: "3px 10px",
    border: `1px solid ${C.rose}`,
    borderRadius: 50,
    whiteSpace: "nowrap",
    alignSelf: "center",
    transition: "all 0.2s",
  },

  // FOOTER
  footer: {
    background: C.textDark,
    color: C.blush,
    padding: "48px",
    textAlign: "center",
  },
  footerName: {
    fontFamily: "'Georgia', serif",
    fontSize: "1.4rem",
    fontStyle: "italic",
    color: C.blush,
    marginBottom: 12,
  },
  footerLinks: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap",
    marginBottom: 24,
  },
  footerLink: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.78rem",
    color: C.accent,
    textDecoration: "none",
    letterSpacing: "0.08em",
  },
  footerCopy: {
    fontFamily: "system-ui, sans-serif",
    fontSize: "0.72rem",
    color: C.textLight,
    letterSpacing: "0.06em",
  },
};

// ── Floating petal decorations ────────────────────────────────────
const PetalSvg = ({ style }) => (
  <svg viewBox="0 0 80 80" style={{ ...style, opacity: 0.18 }} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="40" rx="22" ry="38" fill={C.rose} transform="rotate(0 40 40)" />
    <ellipse cx="40" cy="40" rx="22" ry="38" fill={C.rose} transform="rotate(60 40 40)" />
    <ellipse cx="40" cy="40" rx="22" ry="38" fill={C.rose} transform="rotate(120 40 40)" />
  </svg>
);

// ── Animated section wrapper ──────────────────────────────────────
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────
function Nav() {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const links = ["about", "experience", "projects", "skills", "achievements", "contact"];
  return (
    <nav style={styles.nav}>
      <span style={styles.navLogo}>A · H</span>
      <ul style={styles.navLinks}>
        {links.map((l) => (
          <li key={l}>
            <button className="nav-link-btn" onClick={() => scroll(l)}>
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={styles.hero} id="hero">
      {/* decorative petals */}
      <div style={styles.heroBg}>
        <PetalSvg style={{ position: "absolute", width: 320, top: "-60px", right: "5%", transform: "rotate(20deg)" }} />
        <PetalSvg style={{ position: "absolute", width: 200, bottom: "10%", left: "3%", transform: "rotate(-15deg)" }} />
        <PetalSvg style={{ position: "absolute", width: 140, top: "60%", right: "12%", transform: "rotate(40deg)" }} />
      </div>
      <div style={styles.heroInner}>
        <span style={styles.heroEyebrow}>Portfolio</span>
        <h1 style={styles.heroName}>
          Ayu{" "}
          <span style={styles.heroNameAccent}>Hutasoit</span>
        </h1>
        <p style={styles.heroTagline}>{data.tagline}</p>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#C9869A", marginBottom: 28, letterSpacing: "0.04em" }}>
          {data.skills.interests.join("  ·  ")}
        </p>
        <div style={styles.heroLocation}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {data.location}
        </div>
        <div style={styles.heroDivider} />
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.82rem", color: "#6B4D57", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9869A" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 7 10-7" />
          </svg>
          {data.contact.email}
        </div>
        <div style={styles.heroContactRow} className="hero-contact-row">
          <a href={`https://mail.google.com/mail/?view=cm&to=${data.contact.email}`} target="_blank" rel="noreferrer" className="btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            Email Me
          </a>
          <a href="/cv-ayu-hutasoit.pdf" download="CV_Ayu_Hutasoit.pdf" className="btn-primary">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="btn-primary">
            LinkedIn
          </a>
          <a href={data.contact.github} target="_blank" rel="noreferrer" className="btn-primary">
            GitHub
          </a>
          <a href={data.contact.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Section header helper ─────────────────────────────────────────
function SectionHeader({ label, title }) {
  return (
    <>
      <span style={styles.sectionLabel}>{label}</span>
      <h2 style={styles.sectionTitle}>
        <span style={styles.sectionTitleLine}>{title}</span>
      </h2>
    </>
  );
}

// ── About ─────────────────────────────────────────────────────────
function About() {
  return (
    <section style={{ ...styles.section, ...styles.sectionAlt }} id="about">
      <div style={styles.sectionInner}>
        <FadeIn>
          <SectionHeader label="Who I Am" title="About Me" />
          <p style={styles.aboutText}>
            {data.about}{" "}
            <span style={styles.aboutHighlight}>
              I thrive where creativity meets logic — building interfaces that are both beautiful and functional.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────
function Experience() {
  return (
    <section style={styles.section} id="experience">
      <div style={styles.sectionInner}>
        <FadeIn>
          <SectionHeader label="Career" title="Experience" />
          <div style={styles.timeline}>
            <div style={styles.timelineBar} />
            {data.experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot} />
                  <div style={styles.timelineRole}>{exp.role}</div>
                  <div style={styles.timelineCompany}>{exp.company}</div>
                  <div style={styles.timelinePeriod}>{exp.period}</div>
                  <ul style={styles.timelinePoints}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={styles.timelinePoint}>{p}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <SectionHeader label="Learning" title="Education" />
            <div style={styles.timeline}>
              <div style={styles.timelineBar} />
              {data.education.map((edu, i) => (
                <div key={i} style={styles.timelineItem}>
                  <div style={styles.timelineDot} />
                  <div style={styles.timelineRole}>{edu.degree}</div>
                  <div style={styles.timelineCompany}>{edu.institution}</div>
                  <div style={styles.timelinePeriod}>{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <SectionHeader label="Involvement" title="Organisations" />
            <div style={styles.timeline}>
              <div style={styles.timelineBar} />
              {data.organizations.map((org, i) => (
                <div key={i} style={styles.timelineItem}>
                  <div style={styles.timelineDot} />
                  <div style={styles.timelineRole}>{org.role}</div>
                  <div style={styles.timelineCompany}>{org.org}</div>
                  <div style={styles.timelinePeriod}>{org.period}</div>
                  {org.desc ? <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", color: "#6B4D57", lineHeight: 1.6 }}>{org.desc}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────
function Projects() {
  return (
    <section style={{ ...styles.section, ...styles.sectionAlt }} id="projects">
      <div style={styles.sectionInner}>
        <FadeIn>
          <SectionHeader label="Work" title="Projects" />
        </FadeIn>
        <div style={styles.projectGrid} className="project-grid">
          {data.projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="project-card">
                <div style={styles.projectYear}>{p.year}</div>
                <div style={styles.projectTitle}>{p.title}</div>
                <div style={styles.projectRole}>{p.role}</div>
                <p style={styles.projectDesc}>{p.desc}</p>
                <div style={styles.projectTagRow}>
                  {p.tags.map((t, j) => (
                    <span key={j} style={styles.projectTag}>{t}</span>
                  ))}
                </div>
                <div style={styles.projectLinks}>
                  {p.links.map((l, j) => (
                    <a key={j} href={l.url} target="_blank" rel="noreferrer" className="btn-outline">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────
function Skills() {
  return (
    <section style={styles.section} id="skills">
      <div style={styles.sectionInner}>
        <FadeIn>
          <SectionHeader label="Toolkit" title="Skills" />
          {data.skills.hard.map((group, i) => (
            <div key={i} style={styles.skillGroup}>
              <div style={styles.skillGroupLabel}>{group.label}</div>
              <div style={styles.skillTags}>
                {group.items.map((item, j) => (
                  <span key={j} style={{ ...styles.skillTag, ...(i === 0 ? styles.skillTagAccent : {}) }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="skills-two-col">
            <div>
              <div style={styles.skillGroupLabel}>Soft Skills</div>
              <div style={styles.skillTags}>
                {data.skills.soft.map((s, i) => (
                  <span key={i} style={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={styles.skillGroupLabel}>Languages</div>
              <div style={styles.skillTags}>
                {data.skills.languages.map((l, i) => (
                  <span key={i} style={{ ...styles.skillTag, ...styles.skillTagAccent }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Achievements ──────────────────────────────────────────────────
function Achievements() {
  return (
    <section style={{ ...styles.section, ...styles.sectionAlt }} id="achievements">
      <div style={styles.sectionInner}>
        <FadeIn>
          <SectionHeader label="Recognition" title="Achievements" />
          <div style={styles.achGrid} className="ach-grid">
            {data.achievements.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={styles.achCard}>
                  <span style={{ fontSize: "1.6rem" }}>🏅</span>
                  <div style={styles.achYear}>{a.year}</div>
                  <div style={styles.achTitle}>{a.title}</div>
                  <div style={styles.achOrg}>{a.org}</div>
                  <a href={a.link} target="_blank" rel="noreferrer" className="btn-ach">
                    View Certificate
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <SectionHeader label="Learning" title="Certifications & Webinars" />
            <div style={styles.certList}>
              {data.certifications.map((c, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div style={styles.certItem} className="cert-item">
                    <div style={styles.certDot} />
                    <div style={styles.certYear}>{c.year}</div>
                    <div style={styles.certTitle}>{c.title}</div>
                    <a href={c.link} target="_blank" rel="noreferrer" className="btn-cert">
                      View
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────
function Contact() {
  return (
    <section style={styles.section} id="contact">
      <div style={{ ...styles.sectionInner, textAlign: "center" }}>
        <FadeIn>
          <span style={styles.sectionLabel}>Get In Touch</span>
          <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>Let's Connect</h2>
          <p style={{ ...styles.aboutText, margin: "0 auto 36px", textAlign: "center" }}>
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech and ideas.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }} className="hero-contact-row">
            {[
              { label: "Email", href: `https://mail.google.com/mail/?view=cm&to=${data.contact.email}`, icon: "✉" },
              { label: "LinkedIn", href: data.contact.linkedin, icon: "in" },
              { label: "GitHub", href: data.contact.github, icon: "⌥" },
              { label: "WhatsApp", href: data.contact.whatsapp, icon: "✆" },
            ].map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer" className="btn-primary">
                {l.icon} {l.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerName}>Ayu Hutasoit</div>
      <div style={styles.footerLinks}>
        <a href={`https://mail.google.com/mail/?view=cm&to=${data.contact.email}`} target="_blank" rel="noreferrer" className="footer-link">Email</a>
        <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        <a href={data.contact.github} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        <a href={data.contact.whatsapp} target="_blank" rel="noreferrer" className="footer-link">WhatsApp</a>
      </div>
      <p style={styles.footerCopy}>© 2026 Ayu Hutasoit · Siborongborong, North Sumatra</p>
    </footer>
  );
}

// ── Global CSS ────────────────────────────────────────────────────
const globalCSS = `
* { box-sizing: border-box; }
.btn-primary {
  display:inline-flex;align-items:center;gap:7px;padding:10px 22px;
  border-radius:50px;font-family:system-ui,sans-serif;font-size:0.8rem;
  letter-spacing:0.04em;cursor:pointer;text-decoration:none;transition:all 0.25s;
  background:#8B3A52;color:#fff;border:1.5px solid #8B3A52;
}
.btn-primary:hover{background:#6B2A3C;border-color:#6B2A3C;transform:translateY(-2px);box-shadow:0 6px 20px rgba(139,58,82,0.3);}
.btn-secondary {
  display:inline-flex;align-items:center;gap:7px;padding:10px 22px;
  border-radius:50px;font-family:system-ui,sans-serif;font-size:0.8rem;
  letter-spacing:0.04em;cursor:pointer;text-decoration:none;transition:all 0.25s;
  background:transparent;color:#8B3A52;border:1.5px solid #C9869A;
}
.btn-secondary:hover{background:#8B3A52;color:#fff;border-color:#8B3A52;transform:translateY(-2px);box-shadow:0 6px 20px rgba(139,58,82,0.25);}
.btn-outline {
  display:inline-flex;align-items:center;gap:5px;
  font-family:system-ui,sans-serif;font-size:0.78rem;
  color:#8B3A52;text-decoration:none;padding:4px 12px;
  border-radius:50px;border:1px solid #C9869A;transition:all 0.2s;background:transparent;
}
.btn-outline:hover{background:#8B3A52;color:#fff;border-color:#8B3A52;}
.btn-cert {
  font-family:system-ui,sans-serif;font-size:0.75rem;color:#8B3A52;
  text-decoration:none;padding:3px 10px;border:1px solid #C9869A;
  border-radius:50px;white-space:nowrap;align-self:center;
  transition:all 0.2s;background:transparent;
}
.btn-cert:hover{background:#8B3A52;color:#fff;border-color:#8B3A52;}
.btn-ach {
  align-self:flex-start;font-family:system-ui,sans-serif;font-size:0.76rem;
  color:#8B3A52;text-decoration:none;padding:3px 10px;
  border:1px solid #C9869A;border-radius:50px;transition:all 0.2s;
  background:transparent;margin-top:4px;display:inline-block;
}
.btn-ach:hover{background:#8B3A52;color:#fff;border-color:#8B3A52;}
.project-card{background:#FFFFFF;border:1px solid #F2D7D9;border-radius:16px;padding:28px;transition:all 0.25s;}
.project-card:hover{box-shadow:0 12px 36px rgba(139,58,82,0.12);transform:translateY(-4px);border-color:#C9869A;}
.nav-link-btn{font-family:system-ui,sans-serif;font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;color:#6B4D57;cursor:pointer;text-decoration:none;background:none;border:none;transition:color 0.2s;padding:4px 0;}
.nav-link-btn:hover{color:#8B3A52;}
.footer-link{color:#D4A0B0;text-decoration:none;font-family:system-ui,sans-serif;font-size:0.78rem;letter-spacing:0.08em;transition:color 0.2s;}
.footer-link:hover{color:#F2D7D9;}
@media(max-width:640px){
  .hero-contact-row{flex-direction:column;align-items:center;}
  .project-grid{grid-template-columns:1fr!important;}
  .ach-grid{grid-template-columns:1fr!important;}
  .cert-item{flex-wrap:wrap;}
  .skills-two-col{grid-template-columns:1fr!important;}
}
`;

// ── App ───────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.innerHTML = globalCSS;
    document.head.appendChild(tag);
    return () => document.head.removeChild(tag);
  }, []);

  return (
    <div style={styles.root}>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}