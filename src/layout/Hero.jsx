import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full h-dvh mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-6">
        <div className="bg-blue-100 w-fit text-xs px-3 py-1 rounded-full text-blue-700 font-semibold">
          Soluções digitais para o seu negócio
        </div>
        <h1 className="text-5xl font-bold leading-tight text-slate-950">
          Sistemas, automações e soluções SaaS sob medida
        </h1>
        <p className="text-slate-700 text-xl max-w-2xl">
          Desenvolvimento focado em resolver problemas reais de forma simples,
          rápida e eficiente.
        </p>
        <p className="text-slate-600 text-md max-w-2xl leading-relaxed">
          Ajudo pessoas como você a organizarem seus processos através de
          sistemas internos, automações e aplicações web gerenciáveis.
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-8">
        <a
          href="#"
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium px-4 py-2 bg-blue-700 text-white min-h-9"
        >
          Ver projetos <ArrowRight size={20} />
        </a>
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-slate-400 text-slate-900 text-sm font-medium px-4 py-2"
        >
          Falar comigo
        </a>
      </div>
    </section>
  );
}
