import React from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SectionTitle = ({ children }) => (
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

const Card = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    {children}
  </motion.div>
);

export default function LumareNoire() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2"><Menu className="h-5 w-5" /></button>
            <span className="sr-only">Menu</span>
            <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-black/70">
              {['Collection','Codex','About','Archive'].map((item,i) => (
                <motion.a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ opacity: 1, letterSpacing: "0.35em" }}
                  className="hover:text-black transition-all"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl tracking-[0.35em] font-semibold"
            >
              LUMARE NOIRE
            </motion.h1>
          </div>
          <div className="w-[88px] md:w-[140px]" />
        </div>
      </header>

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
              {['Enter','Codex'].map((btn,i) => (
                <motion.a
                  key={i}
                  href={`#${btn.toLowerCase()}`}
                  whileHover={{ backgroundColor: "#000", color: "#fff" }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border px-6 py-3 text-xs tracking-[0.25em] uppercase"
                >
                  {btn}
                </motion.a>
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

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
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

      {/* Codex */}
      <section id="codex" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionTitle>Codex</SectionTitle>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {codex.map((c, i) => (
            <Card key={i}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="h-28 grid place-items-center text-3xl select-none"
              >
                {c.key}
              </motion.div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-black/60 text-center">{c.name}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-4 py-16 md:py-24">
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

      {/* Archive */}
      <section id="archive" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
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

      {/* Footer */}
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
            {['Contact','Stockists','Privacy'].map((item,i) => (
              <motion.a key={i} whileHover={{ opacity: 1, letterSpacing: "0.35em" }} href="#" className="hover:text-black">
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
