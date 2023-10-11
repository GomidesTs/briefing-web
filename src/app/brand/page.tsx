import { Divider } from '@/components/Divider';
import * as RadioGroup from '@/components/Form/Radio';
import * as Select from '@/components/Form/Select';
import { Textarea } from '@/components/Form/Textarea';

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 md:text-8xl">
        Sobre a Marca
      </h1>
      <div className="relative mt-4 w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />

      <div className="mt-12 space-y-6">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="essence">
            Qual é a missão e essência da sua marca e porque criou ela
          </label>
          <Textarea
            id="essence"
            placeholder="A missão e a essência da sua marca, GomidesWeb, são criar soluções digitais poderosas e personalizadas que transformam
            a presença online dos clientes."
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="branchActive">
            Como você descreveria a personalidade da sua marca
          </label>
          <Select.Select placeholder="Selecione a personalidade da sua marca...">
            <Select.SelectItem value="Formal" text="Formal" />
            <Select.SelectItem value="Informal" text="Informal" />
            <Select.SelectItem value="Divertido" text="Divertido" />
            <Select.SelectItem value="Sério" text="Sério" />
            <Select.SelectItem value="Amigável" text="Amigável" />
            <Select.SelectItem value="Moderno" text="Moderno" />
            <Select.SelectItem value="Antigo" text="Antigo" />
            <Select.SelectItem value="Seguro" text="Seguro" />
            <Select.SelectItem value="Robusto" text="Robusto" />
            <Select.SelectItem
              value="Delicado e Sutil"
              text="Delicado e Sutil"
            />
            <Select.SelectItem value="Tecnológico" text="Tecnológico" />
            <Select.SelectItem value="Humano" text="Humano" />
            <Select.SelectItem
              value="Sofisticado e Exclusivo"
              text="Sofisticado e Exclusivo"
            />
            <Select.SelectItem value="Robusto e Forte" text="Robusto e Forte" />
            <Select.SelectItem value="Masculina" text="Masculina" />
            <Select.SelectItem value="Feminina" text="Feminina" />
          </Select.Select>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="colors">Devemos evitar alguma cor ou estilo</label>
          <Textarea
            id="colors"
            placeholder="Evite a utilização da cor rosa e o estilo de fonte grotesca"
          />
        </div>

        <RadioGroup.Radio>
          <p>A empresa possui uma marca e MIV - Manual de Identidade Visual</p>

          <RadioGroup.RadioItem
            metrics="yes"
            text="Sim, temos a marca em vetor (.CDR, .AI ou .EPS) e um manual de uso"
          />
          <RadioGroup.RadioItem metrics="brand" text="Temos apenas a marca" />
          <RadioGroup.RadioItem metrics="miv" text="Não temos marca nem MIV" />
        </RadioGroup.Radio>

        <RadioGroup.Radio>
          <p>Existem materiais de marketing disponíveis para analisarmos</p>

          <RadioGroup.RadioItem
            metrics="materials"
            text="Sim, temos alguns materiais"
          />
          <RadioGroup.RadioItem metrics="no" text="Não" />
        </RadioGroup.Radio>

        <Divider />
      </div>
    </>
  );
}
