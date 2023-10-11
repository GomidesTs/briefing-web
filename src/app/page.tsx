import { Button } from '@/components/Button';

export default function Home() {
  return (
    <>
      <h1 className="text-6xl font-bold text-slate-900 md:text-8xl">
        Briefing
      </h1>
      <div className="mt-2 md:mt-4">
        <div className="relative w-3/4 border-t border-zinc-300 before:absolute before:bottom-0 before:left-0 before:w-3/12 before:border-t before:border-zinc-900" />

        <h2 className="text-2xl md:text-4xl lg:mt-1">
          Desenvolvimento de
          <span className="block font-bold lg:ml-2 lg:inline">
            Websites e Landing Pages
          </span>
        </h2>
      </div>

      <div className="mt-12">
        <p>
          Um briefing é um documento fundamental que coletamos para entender
          completamente o seu projeto. Ele contém informações detalhadas sobre
          suas metas, requisitos e expectativas. Ao fornecer um briefing bem
          elaborado, você nos ajuda a direcionar nossos esforços de forma mais
          precisa, garantindo que o resultado final atenda às suas necessidades.
        </p>

        <h3 className="mt-8 text-2xl font-bold">Como preencher o briefing</h3>

        <p>
          Preencher o briefing é simples e eficaz. Basta responder às perguntas
          e fornecer informações relevantes sobre o seu projeto. Quanto mais
          detalhado for o seu briefing, mais claramente poderemos entender suas
          expectativas e trabalhar para atendê-las.
        </p>

        <h3 className="mt-8 text-2xl font-bold">
          Por que o briefing é importante
        </h3>

        <p>
          O briefing é a base sobre a qual construímos nossa proposta comercial
          e o plano para todas as etapas do desenvolvimento do seu projeto. Ele
          nos ajuda a evitar mal-entendidos e a economizar tempo valioso,
          garantindo que cada fase seja alinhada com suas necessidades e
          objetivos.
        </p>

        <h3 className="mt-8 text-2xl font-bold">Como preencher o briefing</h3>

        <p>
          Preencher o briefing é simples e eficaz. Basta responder às perguntas
          e fornecer informações relevantes sobre o seu projeto. Quanto mais
          detalhado for o seu briefing, mais claramente poderemos entender suas
          expectativas e trabalhar para atendê-las.
        </p>

        <h3 className="mt-8 text-2xl font-bold">Pronto para Começar?</h3>

        <p>
          Agora que você entende a importância do briefing, vamos dar o próximo
          passo em direção ao sucesso do seu projeto. Clique no botão abaixo
          para acessar o briefing e começar a compartilhar suas informações
          conosco.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button link="/business" content="Preencher Briefing" />
      </div>
    </>
  );
}
