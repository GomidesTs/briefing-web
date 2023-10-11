import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import * as RadioGroup from '@/components/Form/Radio';

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 md:text-8xl">
        Cronograma e Orçamento
      </h1>
      <div className="relative mt-4 w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />

      <div className="mt-12 space-y-6">
        <RadioGroup.Radio>
          <div className="space-y-1">
            <p>Qual o prazo para o desenvolvimento do projeto</p>
            <span className="text-xs text-zinc-400 ">
              Você imagina ou precisa do site pronto em quanto tempo
            </span>
          </div>

          <RadioGroup.RadioItem metrics="month1" text="1 mês ou menos" />
          <RadioGroup.RadioItem metrics="month2" text="2 a 3 meses" />
          <RadioGroup.RadioItem metrics="month3" text="3 a 6 meses" />
        </RadioGroup.Radio>

        <RadioGroup.Radio>
          <div className="space-y-1">
            <p>Quanto você pretende investir no projeto</p>
            <span className="text-xs text-zinc-400 ">
              Saber o orçamento disponível nos ajuda a formatar uma proposta
              realista para desenvolvermos seu projeto
            </span>
          </div>

          <RadioGroup.RadioItem metrics="2" text="Até 2 mil" />
          <RadioGroup.RadioItem metrics="3" text="De 3 a 5 mil" />
          <RadioGroup.RadioItem metrics="6" text="De 6 a 9 mil" />
          <RadioGroup.RadioItem metrics="10" text="De 10 a 20 mil" />
          <RadioGroup.RadioItem metrics="30" text="De 30 a 50 mil" />
          <RadioGroup.RadioItem metrics="50" text="De 50 a 100 mil" />
          <RadioGroup.RadioItem metrics="100" text="Acima de 100 mil" />
        </RadioGroup.Radio>
      </div>

      <Divider className="before:right-0" />

      <div className="mt-12 space-y-6">
        <p>
          Ficamos gratos por compartilhar suas informações conosco! Sua
          contribuição é fundamental para o sucesso deste projeto. Agora, por
          favor, clique no botão abaixo para enviar suas informações e darmos
          início ao trabalho
        </p>
        <div className="flex justify-center">
          <Button link="/business" content="Enviar Briefing" />
        </div>
      </div>
    </>
  );
}
