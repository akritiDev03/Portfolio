import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ExternalLink,
  GraduationCap,
  Trophy,
  Send,
  Sparkles,
  Library,
  Cpu,
  Database,
  TerminalSquare,
  Link as LinkIcon,
} from "lucide-react";

// Links from resume
const LINKS = {
  email: "mailto:akritisingh0309@gmail.com",
  linkedin: "https://linkedin.com/in/akriti-singh03",
  github: "https://github.com/akritiDev03",
  leetcode: "https://leetcode.com/akritisingh0309/",
};

// Projects from resume
const PROJECTS = [
  {
    title: "Tetris Game",
    blurb:
      "A classic Tetris block-stacking game built from scratch. Includes keyboard controls, real-time score tracking, increasing difficulty, pause/resume, and a clean responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/akritiDev03/Tetris_Game", icon: Github }],
    color: "from-rose-500/20 via-orange-500/10 to-amber-500/20",
  },
  {
    title: "LuxStay – Hotel Management System",
    blurb:
      "Responsive booking system with secure login, dynamic room listings, and session-based user authentication. Integrated with Material Icons and Google Fonts for a smooth user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    links: [{ label: "GitHub", href: "https://github.com/akritiDev03/Hotel_Management", icon: Github }],
    color: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    title: "CureHaven – Hospital Management System",
    blurb:
      "Full-stack hospital management platform with role-based authentication (patient/admin) using JWT and bcrypt. Features include an admin portal for managing doctors, patients, and appointments; patient dashboard for booking and tracking appointments.",
    tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Cloudinary", "Multer", "JWT"],
    links: [{ label: "GitHub", href: "https://github.com/akritiDev03/CureHaven", icon: Github }],
    color: "from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20",
  },
];

// Skills from resume
const SKILL_GROUPS = [
  { name: "Languages", icon: Code2, items: ["C++", "Java", "JavaScript"] },
  { name: "Frontend", icon: Library, items: ["ReactJS", "Bootstrap"] },
  { name: "Backend", icon: Cpu, items: ["Node.js", "Express.js"] },
  { name: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { name: "Tools", icon: TerminalSquare, items: ["Git", "GitHub"] },
  { name: "Soft Skills", icon: Sparkles, items: ["Leadership", "Communication", "Time Management", "Problem Solving"] },
];

// Certifications from resume
const CERTS = [
  {
    name: "MERN Stack Summer Training",
    org: "IBM",
    date: "Jul – Aug 2024",
    href: "https://drive.google.com/file/d/1Iffj60J030HbR7EVMXaZqmvXFAyUPvuV/view?usp=sharing",
  },
];

// Section wrapper
const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-8">
        {Icon && (
          <span className="p-2 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
            <Icon className="w-5 h-5" />
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// Animation hook
const useMotion = () => {
  const prefersReduced = useReducedMotion();
  const fadeUp = useMemo(
    () => ({
      initial: { opacity: 0, y: prefersReduced ? 0 : 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, ease: "easeOut" },
    }),
    [prefersReduced]
  );
  return { fadeUp };
};

export default function Portfolio() {
  const { fadeUp } = useMotion();

  return (
    <div className="min-h-screen text-zinc-100 bg-gradient-to-br from-[#0b0b14] via-[#0b0f1a] to-[#090c18]">
      {/* Floating gradient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Akriti Singh
          </a>
          <ul className="hidden sm:flex items-center gap-5 text-sm text-zinc-300">
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#skills">Skills</a></li>
            <li><a className="hover:text-white" href="#certs">Certifications</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-xl"><Github className="w-5 h-5"/></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-xl"><Linkedin className="w-5 h-5"/></a>
            <a href={LINKS.email} className="p-2 hover:bg-white/10 rounded-xl"><Mail className="w-5 h-5"/></a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-20 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for Internships
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
              MERN Developer
            </h1>
            <p className="mt-5 text-zinc-300 max-w-xl">
              Passionate MERN stack web developer with strong DSA foundation. Enjoy building responsive, dynamic, and user-friendly applications. Fast learner with a collaborative mindset, eager to embrace new technologies and contribute effectively in dynamic team environments.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:shadow-lg transition">View Projects</a>
              <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-transparent ring-1 ring-white/20 hover:ring-white/40 text-white flex items-center gap-2">
                <Code2 className="w-4 h-4" /> LeetCode
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/30 to-cyan-500/30 blur-xl" />
              <div className="relative h-full w-full rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl flex items-center justify-center">
                <img
                  src="/akriti.jpg"
                  alt="Akriti Singh"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover mx-auto ring-4 ring-white/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={Code2}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.article key={idx} {...fadeUp} className={`group relative rounded-2xl p-[1px] bg-gradient-to-br ${p.color}`}>
              <div className="h-full rounded-2xl bg-[#0b0f1a]/90 ring-1 ring-white/10 p-5 flex flex-col">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-300 flex-1">{p.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
                  {p.tech.map((t) => (
                    <li key={t} className="px-2 py-1 rounded-lg bg-white/5 ring-1 ring-white/10">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-black text-sm font-medium hover:shadow-lg">
                      <l.icon className="w-4 h-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={GraduationCap}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <motion.div key={g.name} {...fadeUp} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
              <div className="flex items-center gap-3">
                <g.icon className="w-5 h-5" />
                <h3 className="font-medium">{g.name}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="px-2 py-1 rounded-lg bg-black/30 ring-1 ring-white/10 text-sm text-zinc-200">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certs" title="Certifications" icon={Trophy}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((c) => (
            <motion.a key={c.name} {...fadeUp} href={c.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/30 transition">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium">{c.name}</h3>
                  <p className="text-sm text-zinc-300">{c.org} • {c.date}</p>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm text-zinc-300">Click to view certificate</p>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Send}>
        <motion.div {...fadeUp} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <p className="text-zinc-300">
            I’m open to internships and collaborations. Reach out for web development projects, especially MERN stack.
          </p>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a href={LINKS.email} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-black font-medium"><Mail className="w-4 h-4"/> Email</a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 ring-1 ring-white/20 hover:ring-white/40"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 ring-1 ring-white/20 hover:ring-white/40"><Github className="w-4 h-4"/> GitHub</a>
            <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 ring-1 ring-white/20 hover:ring-white/40"><LinkIcon className="w-4 h-4"/> LeetCode</a>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Akriti Singh • Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}
