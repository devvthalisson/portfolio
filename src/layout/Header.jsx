import { motion } from "motion/react";
import { Navbar } from "./Navbar";
import { scrollTo } from "../scripts/scrollTo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur-md h-15">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <motion.div
          className="text-xl text-slate-900 font-semibold select-none cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => scrollTo("index")}
        >
          TM
        </motion.div>
        <Navbar />
      </div>
    </header>
  );
}
