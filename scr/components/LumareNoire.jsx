import React from "react";
import { motion } from "framer-motion";

export default function LumareNoire() {
  return (
    <div className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          LUMARE NOIRE
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-neutral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A study in contrasts, light born from the void.
        </motion.p>
      </section>

      {/* Symbol Row */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {["◈", "✧", "⬡", "❖"].map((symbol, idx) => (
            <motion.div
              key={idx}
              className="text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasons */}
      <section className="py-24 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          SS26
        </motion.h2>
        <p className="mt-4 text-lg text-neutral-600">Coming Soon</p>
      </section>
    </div>
  );
}
