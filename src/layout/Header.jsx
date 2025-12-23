import { motion } from "motion/react";
import { useState } from "react";
import { Navbar } from "./Navbar";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md h-15">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-xl text-slate-900 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn" }}
        >
          TM
        </motion.div>
        <Navbar />
      </div>
    </header>
  );
}
