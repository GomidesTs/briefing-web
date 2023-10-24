'use client';

import { useDiscord } from '@/hooks/useDiscord';

import { Category } from '../Category';
import { Divider } from '../Divider';
import * as Input from './Input';
import * as Select from './Select';
import { Textarea } from './Textarea';

export const Root = () => {
  const {
    errors,
    handleSubmit,
    handleFormSubmit,
    register,
    years,
    personalties,
    mivs,
    marketings,
    purposes,
    typesWebsite,
    designs,
    sectionsPage,
    terms,
    invests
  } = useDiscord();

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <section className="mb-60">
          <Category description="Sobre o Negócio" />

          <div className="mt-12 space-y-10">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="companyName">Qual o nome da empresa</label>
                <Input.Root>
                  <Input.Control
                    id="companyName"
                    type="text"
                    {...register('fields.company')}
                    placeholder="Gomides Web"
                  />
                </Input.Root>
                {errors.fields?.company?.message && (
                  <p className="text-red-500">
                    {errors.fields?.company?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="branchActive">Qual o ramo de atuação</label>
                <Input.Root>
                  <Input.Control
                    id="branchActive"
                    type="text"
                    {...register('fields.areaActivity')}
                    placeholder="Desenvolvimento web"
                  />
                </Input.Root>
                {errors.fields?.areaActivity?.message && (
                  <p className="text-red-500">
                    {errors.fields?.areaActivity?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="name">Qual seu nome</label>
                <Input.Root>
                  <Input.Control
                    {...register('fields.name')}
                    id="name"
                    type="text"
                    placeholder="Gomides"
                  />
                </Input.Root>
                {errors.fields?.name?.message && (
                  <p className="text-red-500">{errors.fields?.name?.message}</p>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="branchActive">
                  Estão nesse mercado a quantos anos
                </label>

                <Select.Root {...register('fields.yearsCompany')}>
                  {years.map((year) => (
                    <Select.SelectItem
                      value={year.value}
                      text={year.text}
                      key={year.value}
                    />
                  ))}
                </Select.Root>
                {errors.fields?.yearsCompany?.message && (
                  <p className="text-red-500">
                    {errors.fields?.yearsCompany?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="companyHistory">
                Escreva uma breve história da empresa
              </label>
              <Textarea
                id="companyHistory"
                {...register('fields.companyHistory')}
                placeholder="Somos um estúdio de design baseado em Belo Horizonte - MG, especializados em criar websites incríveis."
              />
              {errors.fields?.companyHistory?.message && (
                <p className="text-red-500">
                  {errors.fields?.companyHistory?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="products">
                Que tipo de produtos ou serviços sua empresa oferece
              </label>
              <Textarea
                id="products"
                {...register('fields.productsOrServices')}
                placeholder="Ao longo dos anos, tivemos o privilégio de trabalhar com empresas de diversos setores, ajudando-as a criar uma
            presença online única e impactante."
              />
              {errors.fields?.productsOrServices?.message && (
                <p className="text-red-500">
                  {errors.fields?.productsOrServices?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="mission">
                Qual a missão, visão e valores da empresa
              </label>
              <Textarea
                id="mission"
                {...register('fields.missionVisionValues')}
                placeholder="Na Gomides Web revolucionamos sua marca com soluções digitais poderosas."
              />
              {errors.fields?.missionVisionValues?.message && (
                <p className="text-red-500">
                  {errors.fields?.missionVisionValues?.message}
                </p>
              )}
            </div>
          </div>

          <Divider />
        </section>

        <section className="mb-60">
          <Category description="Sobre a Marca" />

          <div className="mt-12 space-y-10">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="essence">
                Qual é a missão e essência da sua marca e porque criou ela
              </label>
              <Textarea
                id="essence"
                {...register('fields.brand')}
                placeholder="A missão e a essência da sua marca, GomidesWeb, são criar soluções digitais poderosas e personalizadas que transformam
            a presença online dos clientes."
              />
              {errors.fields?.brand?.message && (
                <p className="text-red-500">{errors.fields?.brand?.message}</p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="branchActive">
                Estão nesse mercado a quantos anos
              </label>

              <Select.Root {...register('fields.personality')}>
                {personalties.map((personality) => (
                  <Select.SelectItem
                    value={personality.value}
                    text={personality.text}
                    key={personality.value}
                  />
                ))}
              </Select.Root>
              {errors.fields?.personality?.message && (
                <p className="text-red-500">
                  {errors.fields?.personality?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="colors">
                Devemos evitar alguma cor ou estilo
              </label>
              <Textarea
                id="colors"
                {...register('fields.avoid')}
                placeholder="Evite a utilização da cor rosa e o estilo de fonte grotesca"
              />
              {errors.fields?.avoid?.message && (
                <p className="text-red-500">{errors.fields?.avoid?.message}</p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>
                  A empresa possui uma marca e MIV - Manual de Identidade Visual
                </p>

                {mivs.map((miv) => (
                  <Input.Item
                    text={miv.text}
                    key={miv.text}
                    type="radio"
                    {...register('fields.visualIdentityManual')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.visualIdentityManual?.message && (
                <p className="text-red-500">
                  {errors.fields?.visualIdentityManual?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>
                  Existem materiais de marketing disponíveis para analisarmos
                </p>

                {marketings.map((marketing) => (
                  <Input.Item
                    text={marketing.text}
                    key={marketing.text}
                    type="radio"
                    {...register('fields.marketing')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.marketing?.message && (
                <p className="text-red-500">
                  {errors.fields?.marketing?.message}
                </p>
              )}
            </div>
          </div>

          <Divider className="before:right-0" />
        </section>

        <section className="mb-60">
          <Category description="Público Alvo" />

          <div className="mt-12 space-y-10">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="public">
                O que você já sabe sobre o público que pretende atingir com
                website
              </label>
              <Textarea
                id="public"
                {...register('fields.targetAudience')}
                placeholder="Descreva o máximo que você puder: gênero, idade, nacionalidade, umor, profissão, formação, classe social, hábitos de consumo, estilo de vida, etc."
              />
              {errors.fields?.targetAudience?.message && (
                <p className="text-red-500">
                  {errors.fields?.targetAudience?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="website">
                Por que esse público precisa do seu site
              </label>
              <Textarea
                id="website"
                {...register('fields.website')}
                placeholder="Para encontrar informações relevantes e soluções que atendam às suas necessidades específicas de forma rápida e eficiente"
              />
              {errors.fields?.website?.message && (
                <p className="text-red-500">
                  {errors.fields?.website?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="site">
                Qual a relações do público com a marca
              </label>
              <Textarea
                id="site"
                {...register('fields.audienceBrand')}
                placeholder="Descreva o máximo que você puder"
              />
              {errors.fields?.audienceBrand?.message && (
                <p className="text-red-500">
                  {errors.fields?.audienceBrand?.message}
                </p>
              )}
            </div>
          </div>

          <Divider />
        </section>

        <section className="mb-60">
          <Category description="Sobre o Projeto" />

          <div className="mt-12 space-y-10">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="web">
                Qual o endereço do site atual
                <span className="ml-1 text-xs text-zinc-400">
                  Se possuir algum
                </span>
              </label>
              <Input.Root>
                <Input.Control
                  {...register('fields.currentWebsite')}
                  id="web"
                  type="text"
                  placeholder="https://www.gomidesweb.com.br/"
                />
              </Input.Root>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>Qual o objetivo do site</p>

                {purposes.map((purpose) => (
                  <Input.Item
                    text={purpose.text}
                    key={purpose.text}
                    type="radio"
                    {...register('fields.websitePurpose')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.websitePurpose?.message && (
                <p className="text-red-500">
                  {errors.fields?.websitePurpose?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="websites">
                Liste pelo menos 3 websites que você considere interessantes,
                informando o que especificamente lhe agrada neles.
              </label>
              <Textarea
                id="websites"
                {...register('fields.websites')}
                placeholder="Não precisa ser sites especificamente da sua área ou segmento"
              />
              {errors.fields?.websites?.message && (
                <p className="text-red-500">
                  {errors.fields?.websites?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>Que tipo de site você precisa</p>

                {typesWebsite.map((typeWebsite) => (
                  <Input.Item
                    text={typeWebsite.text}
                    key={typeWebsite.text}
                    type="checkbox"
                    {...register('fields.typeWebsite')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.typeWebsite?.message && (
                <p className="text-red-500">
                  {errors.fields?.typeWebsite?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>Qual a aparência da identidade visual (design) esperada</p>

                {designs.map((design) => (
                  <Input.Item
                    text={design.text}
                    key={design.text}
                    type="radio"
                    {...register('fields.design')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.design?.message && (
                <p className="text-red-500">{errors.fields?.design?.message}</p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>Quais páginas ou seções você imagina para seu site</p>

                {sectionsPage.map((sectionPage) => (
                  <Input.Item
                    text={sectionPage.text}
                    key={sectionPage.text}
                    type="checkbox"
                    {...register('fields.pagesSections')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.pagesSections?.message && (
                <p className="text-red-500">
                  {errors.fields?.pagesSections?.message}
                </p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="otherPagesSections">Alguma outra página</label>
              <Textarea
                id="otherPagesSections"
                {...register('fields.otherPagesSections')}
                placeholder="Liste mais páginas e seções que deseja se elas nao estiverem na listagem acima"
              />
              {errors.fields?.otherPagesSections?.message && (
                <p className="text-red-500">
                  {errors.fields?.otherPagesSections?.message}
                </p>
              )}
            </div>
          </div>

          <Divider className="before:right-0" />
        </section>

        <section className="mb-20">
          <Category description="Cronograma e Orçamento" />

          <div className="mt-12 space-y-10">
            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>Qual o prazo para o desenvolvimento do projeto</p>
                <p className="text-xs text-zinc-400">
                  Você imagina ou precisa do site pronto em quanto tempo
                </p>

                {terms.map((term) => (
                  <Input.Item
                    text={term.text}
                    key={term.text}
                    type="radio"
                    {...register('fields.term')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.term?.message && (
                <p className="text-red-500">{errors.fields?.term?.message}</p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <Input.Root variant="radio">
                <p>Quanto você pretende investir no projeto</p>
                <p className="text-xs text-zinc-400">
                  Saber o orçamento disponível nos ajuda a formatar uma proposta
                  realista para desenvolvermos seu projeto
                </p>

                {invests.map((invest) => (
                  <Input.Item
                    text={invest.text}
                    key={invest.text}
                    type="radio"
                    {...register('fields.invest')}
                  />
                ))}
              </Input.Root>
              {errors.fields?.invest?.message && (
                <p className="text-red-500">{errors.fields?.invest?.message}</p>
              )}
            </div>
          </div>

          <Divider />
        </section>

        <p className="text-lg text-blue-950">
          Ficamos gratos por compartilhar suas informações conosco! Sua
          contribuição é fundamental para o sucesso deste projeto. Agora, por
          favor, clique no botão abaixo para enviar suas informações e darmos
          início ao trabalho
        </p>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-12 w-1/2 rounded bg-blue-500 p-4 font-bold text-white"
          >
            Enviar Briefing
          </button>
        </div>
      </form>
    </>
  );
};
