import { Divider } from '@/components/Divider';
import { Checkbox } from '@/components/Form/Checkbox';
import * as Input from '@/components/Form/Input';
import * as RadioGroup from '@/components/Form/Radio';
import { Textarea } from '@/components/Form/Textarea';

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 md:text-8xl">
        Sobre o Projeto
      </h1>
      <div className="relative mt-4 w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />

      <div className="mt-12 space-y-6">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="web">Qual o endereço do site atual</label>
          <Input.Root>
            <Input.Control
              name="web"
              id="web"
              type="text"
              placeholder="https://www.gomidesweb.com.br/"
            />
          </Input.Root>
        </div>

        <RadioGroup.Radio>
          <p>Qual o objetivo do site</p>

          <RadioGroup.RadioItem metrics="inform" text="Informar" />
          <RadioGroup.RadioItem metrics="sell" text="Vender" />
          <RadioGroup.RadioItem metrics="support" text="Prestar suport" />
        </RadioGroup.Radio>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="competions">
            Liste pelo menos 3 websites que você considere interessantes,
            informando o que especificamente lhe agrada neles
          </label>
          <Textarea
            id="competions"
            placeholder="Não precisa ser sites especificamente da sua área ou segmento"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <p>Que tipo de site você precisa</p>

          <Checkbox text="Site institucional" checked />
          <Checkbox text="Landing Page" complement="Página de vendas" />
          <Checkbox text="Blog" />
          <Checkbox text="Hotsite de campanha" />
          <Checkbox text="Site político" />
        </div>

        <RadioGroup.Radio>
          <p>Qual a aparência da identidade visual (design) esperada</p>

          <RadioGroup.RadioItem metrics="traditional" text="Tradicional" />
          <RadioGroup.RadioItem metrics="artistic" text="Artístico" />
          <RadioGroup.RadioItem metrics="technological" text="Tecnológico" />
          <RadioGroup.RadioItem metrics="modern" text="Moderno" />
          <RadioGroup.RadioItem metrics="clean" text="Clean" />
        </RadioGroup.Radio>

        <div className="flex flex-1 flex-col gap-2">
          <p>Quais páginas ou seções você imagina para seu site</p>

          <Checkbox text="Página Inicial" checked />
          <Checkbox text="Quem somos" complement="Institucional" />
          <Checkbox
            text="Serviços"
            complement="Listagem e descrição de serviços"
          />
          <Checkbox text="Orçamento" />
          <Checkbox text="Contato" />
          <Checkbox text="Notícias" />
          <Checkbox text="Blog" />
          <Checkbox text="Relação de produtos" />
          <Checkbox text="Galerias de fotos e vídeos" />
          <Checkbox
            text="Formulários especiais"
            complement="Ex: Trabalhe Conosco"
          />
          <Checkbox text="Área do cliente com funcionalidades específicas" />
          <Checkbox text="Perguntas frequentes (FAQ)" />
          <Checkbox text="Depoimentos de clientes" />
          <Checkbox text="Portfólio" />
          <Checkbox text="Página Equipe" />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="list">Alguma outra página</label>
          <Textarea
            id="list"
            placeholder="Liste páginas específicas que deseja"
          />
        </div>
      </div>

      <Divider />
    </>
  );
}
