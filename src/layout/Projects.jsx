import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export function Projects() {
  const animateElements = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    },
    children: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  const projectsList = [
    {
      type: "Sistema interno",
      name: "Sistema de gestão para academias",
      description:
        "Sistema web para gerenciamento de alunos, mensalidades, pagamentos e controle de acesso.",
      problem: "Falta de controle financeiro e administrativo.",
      solution:
        "Sistema centralizado com regras automáticas e painéis administrativos.",
      languages: ["Django", "HTML/CSS", "JavaScript", "SQL", "Python"],
    },
    {
      type: "API/Automação",
      name: "API de Controle de Acesso",
      description:
        "API responsável por validar acessos e integrar dispositivos externos.",
      problem: "Validação manual e insegura.",
      solution: "API REST com autenticação JWT e regras de acesso.",
      languages: ["Django REST", "JWT", "Python"],
    },
  ];

  return (
    <section className="px-6 py-24 bg-slate-950" id="projetos">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl text-white md:text-5xl font-bold mb-12"
          variants={animateElements.children}
        >
          Projetos em destaque
        </motion.h2>
        <motion.div
          className={`grid md:grid-cols-${projectsList.length} gap-6`}
        >
          {projectsList.map((project) => (
            <motion.div
              key={project.name}
              variants={animateElements.children}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <motion.div>
                <motion.span className="text-xs font-semibold text-blue-400 bg-slate-900 px-2 py-1 rounded w-fit">
                  {project.type}
                </motion.span>
                <motion.h3 className="text-lg font-bold text-white mt-4 mb-2">
                  {project.name}
                </motion.h3>
                <motion.p className="text-sm text-slate-300 mb-4">
                  {project.description}
                </motion.p>
                <motion.div className="py-4 border-t border-slate-700">
                  <motion.p className="text-xs font-semibold text-blue-400 mb-2">
                    Problema:
                  </motion.p>
                  <motion.p className="text-xs text-slate-400 mb-2">
                    {project.problem}
                  </motion.p>
                  <motion.p className="text-xs font-semibold text-blue-400 mb-2">
                    Solução:
                  </motion.p>
                  <motion.p className="text-xs text-slate-400">
                    {project.solution}
                  </motion.p>
                </motion.div>
                <motion.div className="mb-4 flex flex-wrap gap-2">
                  {project.languages.map((language) => (
                    <motion.span
                      className="text-xs bg-slate-700 text-blue-400 px-2 py-1 rounded"
                      key={language}
                    >
                      {language}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
              <motion.a
                href=""
                className="flex gap-2 items-center text-sm border-t border-slate-700 pt-4 justify-center text-blue-400 hover:text-blue-300 font-semibold"
              >
                Ver no GitHub <ExternalLink size={20} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
