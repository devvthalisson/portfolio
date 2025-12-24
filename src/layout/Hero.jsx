import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { scrollTo } from "../scripts/scrollTo";

export function Hero() {
  const animateElements = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, duration: 1 },
      },
    },
    children: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeInOut", duration: 1 },
      },
    },
    image: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { ease: "linear", duration: 1 },
      },
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-6 flex items-center h-[calc(100vh-60px)]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={animateElements.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col gap-6">
            <motion.div
              className="bg-blue-100 w-fit text-xs px-3 py-1 rounded-full text-blue-700 font-bold"
              variants={animateElements.children}
            >
              Soluções digitais para o seu negócio
            </motion.div>
            <motion.h1
              className="text-5xl font-bold leading-tight text-slate-950"
              variants={animateElements.children}
            >
              Sistemas, automações e soluções SaaS sob medida
            </motion.h1>
            <motion.p
              className="text-slate-700 text-xl max-w-2xl"
              variants={animateElements.children}
            >
              Desenvolvimento focado em resolver problemas reais de forma
              simples, rápida e eficiente.
            </motion.p>
            <motion.p
              className="text-slate-600 text-md max-w-2xl leading-relaxed"
              variants={animateElements.children}
            >
              Ajudo pessoas como você a organizarem seus processos através de
              sistemas internos, automações e aplicações web gerenciáveis.
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-6 mt-8 sm:flex-row"
            variants={animateElements.children}
          >
            <motion.button
              onClick={() => scrollTo("projetos")}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center gap-2 whitespace-nowrap transition-colors rounded-md text-sm font-medium px-4 py-2 bg-blue-700 text-white min-h-9 active:shadow-none hover:bg-blue-800 cursor-pointer"
            >
              Ver projetos <ArrowRight size={20} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contato")}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center  transition-colors rounded-md border border-slate-400 text-slate-900 text-sm font-medium px-4 py-2 active:shadow-none hover:bg-slate-100 cursor-pointer"
            >
              Falar comigo
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden md:block bg-amber-400 text-center"
          variants={animateElements.image}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </section>
  );
}
