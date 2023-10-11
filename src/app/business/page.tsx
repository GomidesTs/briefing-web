import { Divider } from '@/components/Divider';
import * as Input from '@/components/Form/Input';
import * as Select from '@/components/Form/Select';
import { Textarea } from '@/components/Form/Textarea';

export default function page() {
  return (
    <>
      <h1 className="text-4xl font-bold text-slate-900 md:text-8xl">
        Sobre o Negócio
      </h1>
      <div className="relative mt-4 w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />

      <div className="mt-12 space-y-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="companyName">Qual o nome da empresa</label>
            <Input.Root>
              <Input.Control
                name="companyName"
                id="companyName"
                type="text"
                placeholder="Gomides Web"
              />
            </Input.Root>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="branchActive">Qual o ramo de atuação</label>
            <Input.Root>
              <Input.Control
                name="branchActive"
                id="branchActive"
                type="text"
                placeholder="Desenvolvimento web"
              />
            </Input.Root>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="name">Qual seu nome</label>
            <Input.Root>
              <Input.Control
                name="name"
                id="name"
                type="text"
                placeholder="Gomides"
              />
            </Input.Root>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor="branchActive">
              Estão nesse mercado a quantos anos
            </label>
            <Select.Select placeholder="Periodo de atuação...">
              <Select.SelectItem value="Até um ano" text="Até um ano" />
              <Select.SelectItem value="2 à 4 anos" text="2 à 4 anos" />
              <Select.SelectItem value="Mais de 5 anos" text="Mais de 5 anos" />
              <Select.SelectItem
                value="Mais de 10 anos"
                text="Mais de 10 anos"
              />
            </Select.Select>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="companyHistory">
            Escreva uma breve história da empresa
          </label>
          <Textarea
            id="companyHistory"
            placeholder="Somos um estúdio de design baseado em Belo Horizonte - MG, especializados em criar websites incríveis."
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="products">
            Que tipo de produtos ou serviços sua empresa oferece
          </label>
          <Textarea
            id="products"
            placeholder="Ao longo dos anos, tivemos o privilégio de trabalhar com empresas de diversos setores, ajudando-as a criar uma
            presença online única e impactante."
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="mission">
            Qual a missão, visão e valores da empresa
          </label>
          <Textarea
            id="mission"
            placeholder="Na Gomides Web revolucionamos sua marca com soluções digitais poderosas."
          />
        </div>
      </div>

      <Divider className="before:right-0" />
    </>
  );
}
