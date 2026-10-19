"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles,
  Database,
  BrainCircuit,
  TerminalSquare,
  Code2,
  Layers3,
  ExternalLink,
  FileDown,
} from "lucide-react";

const GITHUB_URL = "https://github.com/Chanduuu30";
const LINKEDIN_URL = "https://www.linkedin.com/in/chandu-panga-797a4228b/?isSelfProfile=true";
const EMAIL = "pangachanduu@gmail.com";

const projects = [
  {
    number: "01",
    title: "LearnX OS",
    category: "LINUX · OPEN SOURCE",
    description:
      "A Debian-based desktop OS concept built for students, with development tools, learning utilities, and a custom-branded GNOME experience.",
    tags: ["Debian", "Linux", "live-build", "GNOME"],
    icon: TerminalSquare,
    tone: "mint",
    github: `${GITHUB_URL}/LearnX-OS`,
  },
  {
    number: "02",
    title: "MedGen",
    category: "AI · ANDROID",
    description:
      "An AI-assisted medicine and symptom companion concept that helps explain prescription text in simple language with multilingual voice support.",
    tags: ["Kotlin", "Android", "OCR", "AI APIs"],
    icon: BrainCircuit,
    tone: "lavender",
    github: `${GITHUB_URL}/MedGen`,
  },
  {
    number: "03",
    title: "AI-Generated Media Detection",
    category: "MACHINE LEARNING · PYTHON",
    description:
      "A project exploring how to identify AI-generated media, combining a practical development workflow with experimentation and model evaluation.",
    tags: ["Python", "AI/ML", "Computer Vision", "Git"],
    icon: Layers3,
    tone: "peach",
    github: `${GITHUB_URL}/ai-generated-media-detection`,
  },
];

const skills = [
  { group: "LANGUAGES", items: ["Python", "Java", "C", "SQL", "JavaScript"] },
  { group: "DATA & AI", items: ["Data Engineering fundamentals", "AI / ML", "OpenCV", "Data analysis"] },
  { group: "DEVELOPMENT", items: ["Git & GitHub", "Linux", "Android / Kotlin", "Next.js basics"] },
  { group: "TOOLS & PLATFORMS", items: ["Debian", "Docker fundamentals", "VS Code", "AWS / cloud fundamentals"] },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Chandu home">
          <span className="brand-mark">C.</span>
          <span>chandu<span className="brand-dot">/</span>dev</span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
          <div className="availability">
            <span className="status-dot" />
            <span>CURIOUS BY NATURE. BUILDING BY CHOICE.</span>
          </div>
          <h1>
            Turning data
            <br />
            into <span className="highlight">possibility.</span>
          </h1>
          <p className="hero-subtitle">
            Hey, I&apos;m <strong>Chandu</strong> — a developer and data engineer &amp; AI enthusiast
            interested in building practical tools, exploring intelligent systems, and learning how
            technology works from the inside out.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <span><Code2 size={15} /> Software &amp; systems</span>
            <span><Database size={15} /> Data &amp; AI</span>
            <span><Sparkles size={15} /> Always learning</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          aria-label="Abstract decorative data visualization"
        >
          <div className="art-grid" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">
            <span className="core-symbol">C<span>.</span></span>
            <span className="core-caption">DATA · CODE · IDEAS</span>
          </div>
          <div className="floating-card card-top">
            <span className="mini-icon"><Database size={17} /></span>
            <span><strong>Data</strong><small>Find the signal</small></span>
          </div>
          <div className="floating-card card-bottom">
            <span className="mini-icon mini-icon-dark"><BrainCircuit size={17} /></span>
            <span><strong>Artificial intelligence</strong><small>Build what&apos;s next</small></span>
          </div>
          <span className="art-index">FIG. 01 / EXPLORATION</span>
        </motion.div>

        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section-wrap section-space" id="about">
        <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            I like understanding
            <br />how things <em>work.</em>
          </motion.h2>
          <motion.div
            className="about-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <p>
              I&apos;m a Computer Science student drawn to the space where software, data, and AI
              meet. I enjoy experimenting, solving problems, and turning ideas into projects I can
              learn from and improve.
            </p>
            <p>
              From customizing a Linux-based operating system to exploring AI-powered applications,
              I believe the best way to learn is to build, test, break things, and try again.
            </p>
            <a className="text-link underlined-link" href="#projects">
              A few things I&apos;ve built <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
        <div className="principles">
          <div><span className="principle-num">01</span><strong>Stay curious</strong><p>Keep asking better questions.</p></div>
          <div><span className="principle-num">02</span><strong>Build with purpose</strong><p>Make technology useful to people.</p></div>
          <div><span className="principle-num">03</span><strong>Learn in public</strong><p>Share progress and grow through feedback.</p></div>
        </div>
      </section>

      <section className="projects section-wrap section-space" id="projects">
        <SectionLabel number="02">SELECTED PROJECTS</SectionLabel>
        <div className="section-heading-row">
          <h2>Ideas made <em>real.</em></h2>
          <p>A selection of projects that reflect my curiosity across systems, mobile apps, and AI.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`project-visual ${project.tone}`}>
                  <div className="visual-topline"><span>PROJECT / {project.number}</span><span>CHANDU</span></div>
                  <div className="visual-icon-wrap"><ProjectIcon size={43} strokeWidth={1.25} /></div>
                  <span className="visual-ghost">{project.number}</span>
                  <div className="visual-bottomline"><span>CONCEPT → IMPLEMENTATION</span><ArrowUpRight size={16} /></div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    View on GitHub <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="github-note">
          <Github size={19} />
          <span>Want to see more experiments and code?</span>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">Explore GitHub <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="skills section-wrap section-space" id="skills">
        <SectionLabel number="03">TOOLS OF THE TRADE</SectionLabel>
        <div className="section-heading-row">
          <h2>Learning. <em>Building.</em><br />Improving.</h2>
          <p>My toolkit keeps evolving. These are areas I work with or am actively exploring — not a claim to know everything.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-group"
              key={skill.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <span className="skill-index">0{index + 1}</span>
              <h3>{skill.group}</h3>
              <div className="skill-pills">
                {skill.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="resume section-wrap section-space" id="resume">
        <div className="resume-panel">
          <div className="resume-copy">
            <SectionLabel number="04">THE NEXT CHAPTER</SectionLabel>
            <h2>Good work starts<br />with a <em>conversation.</em></h2>
            <p>
              Interested in my projects, want to collaborate, or have an opportunity where I could
              contribute and grow? I&apos;d be happy to connect.
            </p>
            <a className="button button-dark" href="#contact">
              Let&apos;s connect <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="resume-document">
            <div className="doc-top"><span>CHANDU / PROFILE</span><FileDown size={18} /></div>
            <div className="doc-monogram">C.</div>
            <div className="doc-rule" />
            <div className="doc-line doc-line-long" />
            <div className="doc-line doc-line-medium" />
            <div className="doc-line doc-line-short" />
            <div className="doc-footer">
              <span>DATA ENGINEERING</span><span>AI / SOFTWARE</span>
            </div>
            <a className="doc-overlay-link" href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF">
              <span>Open resume PDF</span><ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <p className="resume-note">Add your PDF as <code>public/resume.pdf</code> to activate the resume link.</p>
      </section>

      <section className="contact section-wrap section-space" id="contact">
        <SectionLabel number="05">GET IN TOUCH</SectionLabel>
        <div className="contact-grid">
          <div>
            <h2>Have an idea?<br /><em>Let&apos;s talk.</em></h2>
            <p>I&apos;m open to meaningful conversations about data, AI, software projects, and opportunities to learn and contribute.</p>
          </div>
          <div className="contact-options">
            <a className="contact-option" href={`mailto:${EMAIL}`}>
              <span className="contact-option-icon"><Mail size={19} /></span>
              <span><small>EMAIL ME</small><strong>{EMAIL}</strong></span>
              <ArrowUpRight size={18} />
            </a>
            <a className="contact-option" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <span className="contact-option-icon"><Github size={19} /></span>
              <span><small>CODE &amp; PROJECTS</small><strong>GitHub</strong></span>
              <ArrowUpRight size={18} />
            </a>
            <a className="contact-option" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <span className="contact-option-icon"><Linkedin size={19} /></span>
              <span><small>LET&apos;S CONNECT</small><strong>LinkedIn</strong></span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">C.</span><span>chandu<span className="brand-dot">/</span>dev</span></a>
        <span>Designed with curiosity. Built with care.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Chandu</span>
      </footer>
    </main>
  );
}
