import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

/* ---------------------------------- Data ---------------------------------- */
const codex = [
  { key: "⟠", name: "Haute Couture" },
  { key: "⧫", name: "Atelier" },
  { key: "⌖", name: "Archive" },
  { key: "⟡", name: "Experimental" },
  { key: "⋄", name: "Basics" },
  { key: "⟁", name: "Tailoring" },
  { key: "⍊", name: "Knitwear" },
  { key: "⊶", name: "Footwear" },
  { key: "⋔", name: "Accessories" },
  { key: "⍥", name: "Objects" },
  { key: "⧫̱", name: "Collabs" },
  { key: "⟊", name: "Capsule" },
];

/* ------------------------------- Animations ------------------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* --------------------------------- Shell --------------------------------- */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    transition={{ duration: 0.6 }}
    className="flex items-center gap-3"
  >
    <div className="h-[1px] w-10 bg-black/60" />
    <h2 className="tracking-[0.3em] text-xs md:text-sm text-black/70 uppercase">{children}</h2>
  </motion.div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    {children}
  </motion.div>
);

const Header = () => (
  <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
    <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="md:hidden p-2"><Menu className="h-5 w-5"/></button>
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
              to={to as string}
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
      <div className="tracking-[0.3em] text-[10px] uppercase text-black/60">© {new Date().getFullYear()} Lumare Noire</div>
      <div className="flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase text-black/60">
        {[
          ["Stockists", "/stockists"],
          ["Privacy", "/privacy"],
        ].map(([label, to], i) => (
          <NavLink key={i} to={to as string} className="hover:text-black">
            <motion.span whileHover={{ letterSpacing: "0.35em" }}>{label}</motion.span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  </footer>
);

const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white text-black font-sans">
    <Header />
    {children}
    <Footer />
  </div>
);

/* --------------------------------- Pages --------------------------------- */
const Home = () => (
  <Page>
    {/* Hero */}
    <section className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-12 gap-10 items-end"
      >
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[11px] tracking-[0.35em] uppercase text-black/50 mb-6"
          >
            Where silence becomes style.
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl leading-tight tracking-tight"
          >
            Archive-driven. Avantgarde. <span className="italic">Essentially</span> minimal.
          </motion.h2>
          <div className="mt-10 flex items-center gap-4">
            {[
              ["Enter", "/shop"],
              ["Codex", "/codex"],
            ].map(([label, to], i) => (
              <Link
                key={i}
                to={to as string}
                className="rounded-2xl border px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-black hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:col-span-5"
        >
          <div className="rounded-2xl border border-black/10 p-6 md:p-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.9, staggerChildren: 0.05 }}
              className="flex flex-wrap gap-6 text-5xl md:text-7xl justify-center"
            >
              {codex.map((s, i) => (
                <motion.span
                  key={i}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.03 }}
                  className="select-none"
                >
                  {s.key}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>

    {/* Collection Preview */}
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle>Collection</SectionTitle>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {["Noir Basics","Experimental","Tailoring"].map((title, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.05 * idx }}
          >
            <Card>
              <motion.div
                whileHover={{ opacity: 0.8 }}
                className="aspect-[4/5] w-full rounded-xl border border-dashed border-black/15 grid place-items-center text-black/30 text-xs tracking-[0.25em] uppercase"
              >
                Image Placeholder
              </motion.div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm tracking-[0.2em] uppercase">{title}</h3>
                <span className="text-lg">{codex[idx].key}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </Page>
);

const Shop = () => (
  <Page>
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle>Shop</SectionTitle>
      <p className="mt-4 text-black/70">Curated essentials and experimental pieces.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i}>
            <div className="aspect-square rounded-xl border border-black/10 grid place-items-center text-black/30 text-[10px] tracking-[0.25em] uppercase">
              SS{26 + (i % 4)} – Look {i + 1}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm">Piece {i + 1}</div>
              <div className="text-sm font-medium">€{(180 + i * 10).toFixed(0)}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  </Page>
);

const CodexPage = () => (
  <Page>
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle>Codex</SectionTitle>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {codex.map((c, i) => (
          <Card key={i}>
            <motion.div whileHover={{ scale: 1.1, rotate: 2 }} className="h-28 grid place-items-center text-3xl select-none">
              {c.key}
            </motion.div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-black/60 text-center">{c.name}</div>
          </Card>
        ))}
      </div>
    </section>
  </Page>
);

const About = () => (
  <Page>
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <SectionTitle>About</SectionTitle>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="mt-6 grid md:grid-cols-12 gap-8"
      >
        <div className="md:col-span-7">
          <p className="leading-relaxed text-black/80">
            Lumare Noire is a study in restraint: a system of symbols, garments and gestures.
            Built on archive sensibilities and experimental construction, the label maintains a
            strict visual language—monochrome, geometric, unadorned—so that form and intention remain clear.
          </p>
        </div>
        <div className="md:col-span-5">
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl border border-black/10 p-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-black/50 mb-2">Signature Stitch</p>
            <div className="aspect-[5/3] rounded-xl border border-black/15 grid place-items-center text-black/30 text-[10px] tracking-[0.25em] uppercase">
              Label / Stitch Mockup
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  </Page>
);

const Archive = () => (
  <Page>
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle>Archive</SectionTitle>
      <div className="mt-6 grid md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <motion.div whileHover={{ opacity: 0.7 }} className="aspect-[4/5] w-full rounded-xl border border-black/10 grid place-items-center text-black/30 text-[10px] tracking-[0.25em] uppercase">
              Artifact
            </motion.div>
            <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-black/60">SS{26 + i} / Drop {i + 1}</div>
          </Card>
        ))}
      </div>
    </section>
  </Page>
);

const Contact = () => (
  <Page>
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <SectionTitle>Contact</SectionTitle>
      <form className="mt-6 grid gap-4">
        <input className="border border-black/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Name"/>
        <input type="email" className="border border-black/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Email"/>
        <textarea rows={6} className="border border-black/15 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" placeholder="Message"/>
        <button type="submit" className="rounded-2xl border px-6 py-3 text-xs tracking-[0.25em] uppercase hover:bg-black hover:text-white transition">Send</button>
      </form>
      <p className="mt-6 text-[12px] tracking-[0.25em] uppercase text-black/50">Or email: <a className="underline" href="mailto:studio@lumarenoire.com">studio@lumarenoire.com</a></p>
    </section>
  </Page>
);

const Stockists = () => (
  <Page>
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <SectionTitle>Stockists</SectionTitle>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {["Berlin","Paris","Tokyo","New York","Seoul","London"].map((city, i) => (
          <Card key={i}>
            <div className="text-sm tracking-[0.2em] uppercase">{city}</div>
            <div className="mt-2 text-black/60">Placeholder Boutique</div>
            <div className="text-black/40 text-sm">Soon</div>
          </Card>
        ))}
      </div>
    </section>
  </Page>
);

const Privacy = () => (
  <Page>
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <SectionTitle>Privacy</SectionTitle>
      <div className="prose prose-sm max-w-none text-black/80">
        <p>
          We respect your privacy. No trackers beyond essentials for performance and security.
          Data you submit via forms is used solely to contact you back about your inquiry.
        </p>
        <p>
          For removal or data export requests, email <a className="underline" href="mailto:privacy@lumarenoire.com">privacy@lumarenoire.com</a>.
        </p>
      </div>
    </section>
  </Page>
);

const NotFound = () => (
  <Page>
    <section className="mx-auto max-w-3xl px-4 py-24">
      <h2 className="text-3xl tracking-tight">404 — Page not found</h2>
      <p className="mt-3 text-black/60">This page does not exist. Return to <Link className="underline" to="/">home</Link>.</p>
    </section>
  </Page>
);

/* ---------------------------------- App ---------------------------------- */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/codex" element={<CodexPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stockists" element={<Stockists />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
