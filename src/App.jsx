import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

/* ------------------------------- Animations ------------------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* --------------------------------- Layout -------------------------------- */
const Header = () => (
  <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="md:hidden p-2"><Menu className="h-5 w-5" /></button>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-black/70">
          {[
            ["Collection", "/"],
            ["Shop", "/shop"],
            ["Codex", "/codex"],
            ["About", "/about"],
            ["Archive", "/archive"],
            ["Contact", "/contact"],
          ].map(([label, to], i) => (
            <NavLink
              key={i}
              to={to}
              className={({ isActive }) =>
                `hover:text-black ${isActive ? "text-black" : ""}`
              }
            >
              <motion.span whileHover={{ letterSpacing: "0.35em" }}>{label}</motion.span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl tracking-[0.35em] font-semibold"
        >
          <Link to="/">LUMARE NOIRE</Link>
        </motion.h1>
      </div>
      <div className="w-[88px] md:w-[140px]" />
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-black/10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-6xl px-4 py-14 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div className="tracking-[0.3em] text-[10px] uppercase text-black/60">
        © {new Date().getFullYear()} Lumare Noire
      </div>
      <div className="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-black/60">
        {[
          ["Stockists", "/stockists"],
          ["Privacy", "/privacy"],
        ].map(([label, to], i) => (
          <NavLink key={i} to={to} className="hover:text-black">
            <motion.span whileHover={{ letterSpacing: "0.35em" }}>{label}</motion.span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  </footer>
);

const Page = ({ children }) => (
  <div className="min-h-screen bg-white text-black font-sans">
    <Header />
    {children}
    <Footer />
  </div>
);

/* --------------------------------- Pages --------------------------------- */
const Home = () => (
  <Page>
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold tracking-[0.2em] uppercase"
      >
        Willkommen bei Lumare Noire
      </motion.h2>
      <p className="mt-6 text-black/60 max-w-2xl mx-auto">
        Zeitlose Mode, handgefertigte Details und mutige Designs.  
        Entdecke die Kollektionen und werde Teil unserer Vision.
      </p>
    </section>
  </Page>
);

const Shop = () => (
  <Page>
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl tracking-[0.2em] uppercase mb-6">Shop</h2>
      <p className="text-black/60">Hier erscheinen bald Produkte.</p>
    </section>
  </Page>
);

const About = () => (
  <Page>
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl tracking-[0.2em] uppercase mb-6">About</h2>
      <p className="text-black/60">
        Lumare Noire ist ein Modehaus, das Handwerk und moderne Eleganz verbindet.
      </p>
    </section>
  </Page>
);

/* ---------------------------------- App ---------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        {/* Weitere Seiten */}
      </Routes>
    </BrowserRouter>
  );
}
