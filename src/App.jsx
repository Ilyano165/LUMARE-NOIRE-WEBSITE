import React from "react";
import "./index.css"; // Falls du Tailwind oder eigene Styles nutzt

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="py-12 text-center">
        <h1 className="text-5xl tracking-wide font-bold">LUMARE NOIRE</h1>
        <p className="mt-4 text-lg text-gray-600 uppercase">Archive-driven. Avantgarde.</p>
      </header>

      <main className="px-6 md:px-0 py-16 md:py-24 max-w-4xl mx-auto">
        {/* Beispiel für Hero */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold">Welcome to the Universe of Symbols</h2>
          <p className="mt-4 text-gray-700">
            Discover our Codex, collection previews, and archival essence.
          </p>
        </section>

        {/* Beispiel für Codex-Sektion */}
        <section className="mb-16 grid grid-cols-3 gap-6">
          {["⟠", "⧫", "⌖"].map((sym, idx) => (
            <div key={idx} className="text-4xl text-center">{sym}</div>
          ))}
        </section>
      </main>

      <footer className="py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lumare Noire
      </footer>
    </div>
  );
}
