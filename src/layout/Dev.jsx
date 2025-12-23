import { CodeXml, Zap, Link, Globe } from "lucide-react";

export function Dev() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-900 md:text-5xl mb-12">
          O que eu desenvolvo?
        </h2>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-8">
          <div className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md">
            <CodeXml size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-slate-950 mb-2">
              Sistemas internos
            </h3>
            <p className="text-slate-600">
              Painéis administrativos, controle de usuários, mensalidades,
              relatórios e permissões.
            </p>
          </div>
          <div className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md">
            <Zap size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-slate-950 mb-2">
              Automação de processos
            </h3>
            <p className="text-slate-600">
              Automatização de tarefas repetitivas, regras de negócio e
              integrações.
            </p>
          </div>
          <div className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md">
            <Link size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-slate-950 mb-2">
              APIs e integrações
            </h3>
            <p className="text-slate-600">
              APIs REST seguras para integração entre sistemas e dispositivos.
            </p>
          </div>
          <div className="p-8 border-2 border-slate-300 rounded-lg hover:border-blue-700 hover:bg-slate-50 transition-all shadow-md">
            <Globe size={24} className="h-8 w-8 text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-slate-950 mb-2">
              Soluções SaaS
            </h3>
            <p className="text-slate-600">
              Plataformas web prontas para crescer com o negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
