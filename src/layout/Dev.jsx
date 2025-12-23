import { CodeXml, Zap, Link, Globe } from "lucide-react";
import { motion } from "motion/react";

export function Dev() {
  const animateElements = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    },
    children: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
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
          className="text-4xl font-bold text-slate-900 md:text-5xl mb-12"
          variants={animateElements.children}
        >
          O que eu desenvolvo?
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 grid-rows-2 gap-8">
          <motion.div
            className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md"
            variants={animateElements.children}
          >
            <CodeXml size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-slate-950 mb-2">
              Sistemas internos
            </h3>
            <p className="text-slate-600">
              Painéis administrativos, controle de usuários, mensalidades,
              relatórios e permissões.
            </p>
          </motion.div>
          <motion.div
            className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md"
            variants={animateElements.children}
          >
            <Zap size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <motion.h3 className="text-xl font-semibold text-slate-950 mb-2">
              Automação de processos
            </motion.h3>
            <motion.p className="text-slate-600">
              Automatização de tarefas repetitivas, regras de negócio e
              integrações.
            </motion.p>
          </motion.div>
          <motion.div
            className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md"
            variants={animateElements.children}
          >
            <Link size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <motion.h3 className="text-xl font-semibold text-slate-950 mb-2">
              APIs e integrações
            </motion.h3>
            <motion.p className="text-slate-600">
              APIs REST seguras para integração entre sistemas e dispositivos.
            </motion.p>
          </motion.div>
          <motion.div
            className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md"
            variants={animateElements.children}
          >
            <Globe size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <motion.h3 className="text-xl font-semibold text-slate-950 mb-2">
              Soluções SaaS
            </motion.h3>
            <motion.p className="text-slate-600">
              Plataformas web prontas para crescer com o negócio.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
