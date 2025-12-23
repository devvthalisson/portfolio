import { motion } from "motion/react";

export function About() {
  const animateElements = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    },
    children: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" },
      },
    },
    cardsHover: {
      scale: 1.05,
    },
  };

  return (
    <section
      className="px-6 py-24 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
      id="sobre"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={animateElements.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-10 md:text-5xl"
          variants={animateElements.children}
        >
          Sobre mim
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={animateElements.container}
        >
          <motion.div
            className="text-slate-300 leading-relaxed bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            variants={animateElements.children}
          >
            Meu nome é Thalisson, sou desenvolvedor de software e apaixonado por
            tecnologia desde muito cedo. Iniciei minha jornada na programação
            ainda no ensino fundamental, aos 12 anos, movido pela curiosidade de
            entender como sistemas funcionam e como a tecnologia pode resolver
            problemas reais.
          </motion.div>
          <motion.div
            className="text-slate-300 leading-relaxed bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            variants={animateElements.children}
          >
            Mais do que escrever código, acredito em entender o problema, propor
            a melhor solução possível e entregar um sistema que gere valor real.
            Meu objetivo é ser um parceiro tecnológico confiável, oferecendo
            soluções sólidas, transparentes e bem estruturadas.
          </motion.div>
          <motion.div
            className="text-slate-300 leading-relaxed bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            variants={animateElements.children}
          >
            Atuo no desenvolvimento de sistemas web, automações e APIs, com foco
            em entregar soluções que realmente façam sentido para o dia a dia do
            negócio, reduzindo processos manuais e aumentando o controle
            operacional. Valorizo código limpo, boas práticas e soluções que
            possam evoluir junto com as necessidades do cliente.
          </motion.div>
        </motion.div>
        <motion.div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="bg-slate-800 p-6 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-shadow"
            variants={animateElements.children}
            whileHover={animateElements.cardsHover}
          >
            <motion.p className="text-white font-semibold">
              Soluções simples e eficientes
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-slate-800 p-6 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-shadow"
            variants={animateElements.children}
            whileHover={animateElements.cardsHover}
          >
            <motion.p className="text-white font-semibold">
              Foco em negócios reais
            </motion.p>
          </motion.div>
          <motion.div
            className="bg-slate-800 p-6 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-shadow"
            variants={animateElements.children}
            whileHover={animateElements.cardsHover}
          >
            <motion.p className="text-white font-semibold">
              Código limpo e escalável
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
