import { motion } from "motion/react";

export function HowToWork() {
  const animateElements = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    },
    children: {
      hidden: { opacity: 0, x: 200 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
      },
    },
  };

  return (
    <section className="px-6 py-24 bg-white">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={animateElements.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl text-slate-900 font-bold md:text-5xl mb-12"
          variants={animateElements.children}
        >
          Como funciona?
        </motion.h2>
        <motion.div className="grid md:grid-cols-4 gap-8">
          <motion.div
            className="relative p-6 bg-white rounded-lg border-2 border-slate-300 shadow-md hover:border-blue-700 transition-colors"
            variants={animateElements.children}
          >
            <motion.div className="mb-4">
              <motion.span className="text-5xl font-bold text-blue-700">
                01
              </motion.span>
            </motion.div>
            <motion.h3 className="text-xl font-bold text-slate-950 mb-2">
              Entendimento
            </motion.h3>
            <motion.p className="text-sm text-slate-600">
              Análise do problema e das necessidades do negócio.
            </motion.p>
            <motion.div className="hidden md:block absolute top-12 -right-3 w-7 h-1 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            <motion.div className="hidden md:block absolute top-8 -right-2 w-8 h-1 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            <motion.div className="block md:hidden absolute -bottom-4 left-1/2 w-1 h-6 bg-linear-to-r from-blue-700 to-blue-900">
              <motion.div className="block md:hidden absolute bottom-1 left-3 w-1 h-7 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-white rounded-lg border-2 border-slate-300 shadow-md hover:border-blue-700 transition-colors"
            variants={animateElements.children}
          >
            <motion.div className="mb-4">
              <motion.span className="text-5xl font-bold text-blue-700">
                02
              </motion.span>
            </motion.div>
            <motion.h3 className="text-xl font-bold text-slate-950 mb-2">
              Planejamento
            </motion.h3>
            <motion.p className="text-sm text-slate-600">
              Definição da melhor solução técnica.
            </motion.p>
            <motion.div className="hidden md:block absolute top-12 -right-3 w-7 h-1 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            <motion.div className="hidden md:block absolute top-8 -right-2 w-8 h-1 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            <motion.div className="block md:hidden absolute -bottom-4 left-1/2 w-1 h-6 bg-linear-to-r from-blue-700 to-blue-900">
              <motion.div className="block md:hidden absolute bottom-1 left-3 w-1 h-7 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-white rounded-lg border-2 border-slate-300 shadow-md hover:border-blue-700 transition-colors"
            variants={animateElements.children}
          >
            <motion.div className="mb-4">
              <motion.span className="text-5xl font-bold text-blue-700">
                03
              </motion.span>
            </motion.div>
            <motion.h3 className="text-xl font-bold text-slate-950 mb-2">
              Desenvolvimento
            </motion.h3>
            <motion.p className="text-sm text-slate-600">
              Criação do sistema com foco em usabilidade.
            </motion.p>
            <motion.div className="hidden md:block absolute top-12 -right-3 w-7 h-1 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            <motion.div className="hidden md:block absolute top-8 -right-2 w-8 h-1 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            <motion.div className="block md:hidden absolute -bottom-4 left-1/2 w-1 h-6 bg-linear-to-r from-blue-700 to-blue-900">
              <motion.div className="block md:hidden absolute bottom-1 left-3 w-1 h-7 bg-linear-to-r from-blue-700 to-blue-900"></motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative p-6 bg-white rounded-lg border-2 border-slate-300 shadow-md hover:border-blue-700 transition-colors"
            variants={animateElements.children}
          >
            <motion.div className="mb-4">
              <motion.span className="text-5xl font-bold text-blue-700">
                04
              </motion.span>
            </motion.div>
            <motion.h3 className="text-xl font-bold text-slate-950 mb-2">
              Entrega
            </motion.h3>
            <motion.p className="text-sm text-slate-600">
              Entrega, orientação e suporte inicial.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
