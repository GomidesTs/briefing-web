import { Divider } from '@/components/Divider';
import { Textarea } from '@/components/Form/Textarea';

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 md:text-8xl">
        Público Alvo
      </h1>

      <div className="relative mt-4 w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />

      <div className="mt-12 space-y-6">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="public">
            O que você já sabe sobre o público que pretende atingir com website
          </label>
          <Textarea
            id="public"
            placeholder="Descreva o máximo que você puder: gênero, idade, nacionalidade, humor, profissão, formação, classe social, hábitos de 
            consumo, estilo de vida, etc."
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="site">Por que esse público precisa do seu site</label>
          <Textarea
            id="site"
            placeholder="Para encontrar informações relevantes e soluções que atendam às suas necessidades específicas de forma rápida 
            e eficiente"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="site">Qual a relações do público com a marca</label>
          <Textarea id="site" placeholder="Descreva o máximo que você puder" />
        </div>
      </div>

      <Divider className="before:right-0" />
    </>
  );
}
