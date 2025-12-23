import { useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { Logs } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const animateElements = {
    navbar: {
      normal: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, ease: "linear" },
        },
      },
      mobile: {
        hidden: { opacity: 0, scale: 0, y: -60, x: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          transition: { staggerChildren: 0.15 },
        },
      },
    },
    items: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  const listMenu = [
    {
      name: "Projetos",
      href: "#",
    },
    {
      name: "Sobre",
      href: "#",
    },
    {
      name: "Contato",
      href: "#",
    },
  ];

  return (
    <>
      <nav>
        <div className="relative">
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.9, y: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 9 }}
            onClick={toggleMenu}
          >
            <Logs size={23} />
          </motion.div>
          <AnimatePresence>
            {open && (
              <motion.ul
                variants={animateElements.navbar.mobile}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0, y: -60, x: 20 }}
                className="absolute flex p-3 w-32 mt-3 flex-col gap-3 bg-white right-0 shadow md:hidden rounded"
              >
                {listMenu.map((item) => (
                  <motion.li key={item.name} variants={animateElements.items}>
                    <a
                      href={item.href}
                      className="text-slate-600 active:text-slate-900"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <nav className="hidden md:flex">
        <motion.ul
          className="flex gap-8"
          variants={animateElements.navbar.normal}
          initial="hidden"
          animate="visible"
        >
          {listMenu.map((item) => (
            <motion.li
              className="text-slate-500 cursor-pointer hover:text-slate-900"
              key={item.name}
              href={item.href}
              variants={animateElements.items}
            >
              {item.name}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </>
  );
}
