import { useMemo, useState, useEffect } from "react";
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

// ---------------------------- Links ----------------------------
const LINKS = {
  email: "mailto:akritisingh0309@gmail.com",
  linkedin: "https://linkedin.com/in/akriti-singh03",
  github: "https://github.com/akritiDev03",
  leetcode: "https://leetcode.com/akritisingh0309/",
};

// ---------------------------- Projects ----------------------------
const PROJECTS = [
  {
    title: "Tetris Game",
    blurb: "Classic Tetris block-stacking game with keyboard controls & responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/akritiDev03/Tetris_Game", icon: Github }],
    color: "from-rose-500/20 via-orange-500/10 to-amber-500/20",
  },
  {
    title: "LuxStay – Hotel Management System",
    blurb: "Responsive booking system with login & dynamic room listings.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    links: [{ label: "GitHub", href: "https://github.com/akritiDev03/Hotel_Management", icon: Github }],
    color: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    title: "CureHaven – Hospital Management System",
    blurb: "Full-stack hospital platform with role-based authentication (patient/admin).",
    tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Cloudinary", "JWT"],
    links: [{ label: "GitHub", href: "https://github.com/akritiDev03/CureHaven", icon: Github }],
    color: "from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20",
  },
];

// ---------------------------- Skills ----------------------------
const SKILL_GROUPS = [
  { name: "Languages", icon: Code2, items: ["C++", "Java", "JavaScript"] },
  { name: "Frontend", icon: Library, items: ["ReactJS", "Bootstrap"] },
  { name: "Backend", icon: Cpu, items: ["Node.js", "Express.js"] },
  { name: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { name: "Tools", icon: TerminalSquare, items: ["Git", "GitHub"] },
  { name: "Soft Skills", icon: Sparkles, items: ["Leadership", "Communication", "Time Management", "Problem Solving"] },
];

// ---------------------------- Certifications ----------------------------
const CERTS = [
  {
    name: "MERN Stack Summer Training",
    org: "IBM",
    date: "Jul – Aug 2024",
    href: "https://drive.google.com/file/d/1Iffj60J030HbR7EVMXaZqmvXFAyUPvuV/view?usp=sharing",
  },
];

// ---------------------------- Section Wrapper ----------------------------
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

// ---------------------------- Animation Hook ----------------------------
const useMotion = () => {
  const prefersReduced = useReducedMotion();

  const fadeUp = useMemo(() => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  }), [prefersReduced]);

  const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return { fadeUp, staggerContainer, fadeItem, popIn };
};

// ---------------------------- Main Component ----------------------------
export default function Portfolio() {
  const { fadeUp, staggerContainer, fadeItem, popIn } = useMotion();

  // Words for continuous letter-by-letter animation
  const titles = ["MERN Developer", "DSA Enthusiast", "Problem Solver", "Passionate Coder", "Lifelong Learner"];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState("");

  // ---------------------------- Letter Animation Effect ----------------------------
  useEffect(() => {
    const word = titles[currentWord];
    let letterIndex = 0;

    const interval = setInterval(() => {
      setDisplayedLetters(word.slice(0, letterIndex + 1));
      letterIndex++;

      if (letterIndex === word.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentWord((prev) => (prev + 1) % titles.length);
        }, 1000); // Pause before next word
      }
    }, 100); // 100ms per letter

    return () => clearInterval(interval);
  }, [currentWord]);

  return (
    <div className="min-h-screen text-zinc-100 bg-gradient-to-br from-[#0b0b14] via-[#0b0f1a] to-[#090c18]">
      {/* ---------------- Floating Orbs ---------------- */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      {/* ---------------- Navigation ---------------- */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold text-xl md:text-2xl tracking-tight flex items-center gap-2">
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

      {/* ---------------- Hero Section ---------------- */}
      <section id="home" className="relative pt-20 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div {...fadeUp}>
            <motion.p
              className="text-sm uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> Available for Internships
            </motion.p>

            <motion.h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight flex flex-wrap">
              {displayedLetters.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p className="mt-5 text-zinc-300 max-w-xl" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
              Passionate MERN stack web developer with strong DSA foundation. Enjoy building responsive, dynamic, and user-friendly applications. Fast learner with a collaborative mindset.
            </motion.p>

            <motion.div className="mt-6 flex flex-wrap items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.6 }}>
              <a href="#projects" className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:shadow-lg transition">View Projects</a>
              <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-transparent ring-1 ring-white/20 hover:ring-white/40 text-white flex items-center gap-2">
                <Code2 className="w-4 h-4" /> LeetCode
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Profile Image */}
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/30 via-indigo-500/30 to-cyan-500/30 blur-xl" />
              <div className="relative h-full w-full rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl flex items-center justify-center">
                <motion.img
                  src="/akriti.jpg"
                  alt="Akriti Singh"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover mx-auto ring-4 ring-white/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Projects Section ---------------- */}
      <Section id="projects" title="Projects" icon={Code2}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
    {PROJECTS.map((p, idx) => (
      <motion.article
        key={idx}
        variants={fadeItem}
        whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.8)" }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        className="relative rounded-2xl p-[1px] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50"
      >
        <div className="h-full rounded-2xl bg-[#0b0f1a]/90 ring-1 ring-white/10 p-5 flex flex-col">
          <h3 className="text-lg font-semibold leading-snug tracking-wide text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-zinc-300 flex-1">{p.blurb}</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs">
            {p.tech.map((t) => (
              <li
                key={t}
                className="px-2 py-1 rounded-lg bg-white/10 ring-1 ring-white/20 text-zinc-200 transition-colors duration-300 hover:bg-white/30 hover:text-white"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3 flex-wrap">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-white  hover:text-black hover:shadow-md"
              >
                <l.icon className="w-4 h-4" /> {l.label}
              </a>
            ))}
          </div>
        </div>
      </motion.article>
    ))}
  </motion.div>
</Section>


      {/* ---------------- Skills Section ---------------- */}
      <Section id="skills" title="Skills" icon={GraduationCap}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map(g => (
            <motion.div key={g.name} variants={fadeItem} whileHover={{ 
               scale: 1.03, boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.7)" }} 
              transition={{ type: "spring", stiffness: 250, damping: 15 }} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 cursor-pointer">
              <div className="flex items-center gap-3">
                <g.icon className="w-5 h-5" />
                <h3 className="font-medium">{g.name}</h3>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map(s => (
                  <span key={s} className="px-2 py-1 rounded-lg bg-black/30 ring-1 ring-white/10 text-sm text-zinc-200">
                    {s}
                  </span>
                ))}
              </div>
         </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ---------------- Certifications ---------------- */}
      <Section id="certs" title="Certifications" icon={Trophy}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map(c => (
            <motion.a key={c.name} variants={popIn} initial="hidden" whileInView="show" viewport={{ once: true }} href={c.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:ring-white/50 transition">
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
        </motion.div>
      </Section>

      {/* ---------------- Contact Section ---------------- */}
     <Section id="contact" title="Contact" icon={Send}>
  <motion.div 
    {...fadeUp} 
    className="rounded-2xl bg-gradient-to-br from-[#11131a]/50 to-[#0b0f1a]/80 ring-1 ring-white/10 p-6 transition-shadow duration-300 hover:shadow-[0_0_20px_#ffffff33] hover:-translate-y-1"
  >
    <p className="text-zinc-300 mb-4">
      I’m open to internships and collaborations. Reach out for web development projects, especially MERN stack.
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {[
        {href: LINKS.email, label: "Email", icon: Mail},
        {href: LINKS.linkedin, label: "LinkedIn", icon: Linkedin},
        {href: LINKS.github, label: "GitHub", icon: Github},
        {href: LINKS.leetcode, label: "LeetCode", icon: Code2},
      ].map((c) => (
        <motion.a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 ring-1 ring-white/20 text-white text-sm font-medium hover:bg-white hover:text-black hover:shadow-md"
        >
          <c.icon className="w-4 h-4" /> {c.label}
        </motion.a>
      ))}
    </div>
  </motion.div>
</Section>


      {/* ---------------- Footer ---------------- */}
      <footer className="py-6 mt-12 text-center text-sm text-zinc-500 border-t border-white/10">
        © 2025 Akriti Singh. All rights reserved.
      </footer>
    </div>
  );
}
