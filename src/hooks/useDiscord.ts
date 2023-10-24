import { useForm } from 'react-hook-form';

import { schemaForm } from '@/services/schema';
import { FormProps } from '@/services/types';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

export const useDiscord = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      fields: {
        company: '',
        areaActivity: '',
        name: '',
        yearsCompany: '',
        companyHistory: '',
        productsOrServices: '',
        missionVisionValues: '',
        brand: '',
        personality: '',
        avoid: '',
        visualIdentityManual: '',
        marketing: '',
        targetAudience: '',
        website: '',
        audienceBrand: '',
        currentWebsite: '',
        websitePurpose: '',
        websites: '',
        typeWebsite: [''],
        design: '',
        pagesSections: [''],
        otherPagesSections: '',
        term: '',
        invest: ''
      }
    }
  });

  const years = [
    { value: 'Até um ano', text: 'Até um ano' },
    { value: '2 à 4 anos', text: '2 à 4 anos' },
    { value: 'Mais de 5 anos', text: 'Mais de 5 anos' },
    { value: 'Mais de 10 anos', text: 'Mais de 10 anos' }
  ];

  const personalties = [
    { value: 'Formal', text: 'Formal' },
    { value: 'Informal', text: 'Informal' },
    { value: 'Divertido', text: 'Divertido' },
    { value: 'Sério', text: 'Sério' },
    { value: 'Amigável', text: 'Amigável' },
    { value: 'Moderno', text: 'Moderno' },
    { value: 'Antigo', text: 'Antigo' },
    { value: 'Seguro', text: 'Seguro' },
    { value: 'Robusto', text: 'Robusto' },
    { value: 'Delicado e Sutil', text: 'Delicado e Sutil' },
    { value: 'Tecnológico', text: 'Tecnológico' },
    { value: 'Humano', text: 'Humano' },
    { value: 'Sofisticado e Exclusivo', text: 'Sofisticado e Exclusivo' },
    { value: 'Robusto e Forte', text: 'Robusto e Forte' },
    { value: 'Masculina', text: 'Masculina' },
    { value: 'Feminina', text: 'Feminina' }
  ];

  const mivs = [
    {
      text: 'Sim, temos a marca em vetor e um manual de uso'
    },
    {
      text: 'Temos apenas a marca'
    },
    {
      text: 'Não temos marca nem MIV'
    }
  ];

  const marketings = [{ text: 'Sim, temos alguns materiais' }, { text: 'Não' }];

  const purposes = [
    { text: 'Informar' },
    { text: 'Vender' },
    { text: 'Prestar suporte' }
  ];

  const typesWebsite = [
    { text: 'Site institucional' },
    { text: 'Landing Page' },
    { text: 'Hotsite de campanha' },
    { text: 'Blog' },
    { text: 'Site político' }
  ];

  const designs = [
    { text: 'Tradicional' },
    { text: 'Artístico' },
    { text: 'Tecnológico' },
    { text: 'Moderno' },
    { text: 'Clean' }
  ];

  const sectionsPage = [
    { text: 'Página Inicial' },
    { text: 'Quem somos' },
    { text: 'Serviços' },
    { text: 'Orçamento' },
    { text: 'Contato' },
    { text: 'Notícias' },
    { text: 'Relação de produtos' },
    { text: 'Galerias de fotos e vídeos' },
    { text: 'Página com Formulários especiais' },
    { text: 'Área do cliente com funcionalidades específicas' },
    { text: 'Perguntas frequentes (FAQ)' },
    { text: 'Depoimentos de clientes' },
    { text: 'Portfólio' },
    { text: 'Página Equipe' }
  ];

  const terms = [
    { text: '1 mês ou menos' },
    { text: '2 a 3 meses' },
    { text: '3 a 6 meses' }
  ];

  const invests = [
    { text: 'Até 2 mil' },
    { text: 'De 3 a 5 mil' },
    { text: 'De 6 a 9 mil' },
    { text: 'De 10 a 20 mil' },
    { text: 'De 30 a 50 mil' },
    { text: 'De 50 a 100 mil' },
    { text: 'Acima de 100 mil' }
  ];

  const handleFormSubmit = async (data: FormProps) => {
    const websites = data.fields.typeWebsite;
    const sections = data.fields.pagesSections;
    const websitesString = websites.join('\n');
    const sectionsString = sections.join('\n');

    const body = {
      content: '@everyone Resposta do Briefing',
      tts: true,
      embeds: [
        {
          title: 'Briefing',
          description:
            'Um novo formulário foi preenchido com as seguintes informações:',
          color: 3036097,
          fields: [
            {
              name: 'Qual o nome da empresa:',
              value: data.fields.company
            },
            {
              name: 'Qual o ramo de atuação:',
              value: data.fields.areaActivity
            },
            {
              name: 'Qual seu nome:',
              value: data.fields.name
            },
            {
              name: 'Estão nesse mercado a quantos anos:',
              value: data.fields.yearsCompany
            },
            {
              name: 'Escreva uma breve história da empresa:',
              value: data.fields.companyHistory
            },
            {
              name: 'Que tipo de produtos ou serviços sua empresa oferece:',
              value: data.fields.productsOrServices
            },
            {
              name: 'Qual a missão, visão e valores da empresa:',
              value: data.fields.missionVisionValues
            },
            {
              name: 'Qual é a missão e essência da sua marca e porque criou ela:',
              value: data.fields.brand
            },
            {
              name: 'Como você descreveria a personalidade da sua marca:',
              value: data.fields.personality
            },
            {
              name: 'Devemos evitar alguma cor ou estilo:',
              value: data.fields.avoid
            },
            {
              name: 'A empresa possui uma marca e MIV - Manual de Identidade Visual:',
              value: data.fields.visualIdentityManual
            },
            {
              name: 'Existem materiais de marketing disponíveis para analisarmos:',
              value: data.fields.marketing
            },
            {
              name: 'O que você já sabe sobre o público que pretende atingir com website:',
              value: data.fields.targetAudience
            },
            {
              name: 'Por que esse público precisa do seu site:',
              value: data.fields.website
            },
            {
              name: 'Qual a relações do público com a marca:',
              value: data.fields.audienceBrand
            },
            {
              name: 'Qual o endereço do site atual:',
              value: data.fields.currentWebsite
            },
            {
              name: 'Qual o objetivo do site:',
              value: data.fields.websitePurpose
            },
            {
              name: 'Qual o objetivo do site:',
              value: data.fields.websites
            },
            {
              name: 'Que tipo de site você precisa:',
              value: websitesString
            },
            {
              name: 'Qual a aparência da identidade visual (design) esperada:',
              value: data.fields.design
            },
            {
              name: 'Quais páginas ou seções você imagina para seu site:',
              value: sectionsString
            },
            {
              name: 'Alguma outra página:',
              value: data.fields.otherPagesSections
            },
            {
              name: 'Qual o prazo para o desenvolvimento do projeto:',
              value: data.fields.term
            },
            {
              name: 'Quanto você pretende investir no projeto:',
              value: data.fields.invest
            }
          ]
        }
      ],
      allowed_mentions: {
        parse: ['everyone']
      }
    };

    await axios.post(
      'https://discord.com/api/webhooks/1162021574673711134/8lWNBnB4Y7jCynIOJI9caRA5BF84ttrEnGMhXpyuBh_b3IWOAAEdjjL63QiGxz_4yCBA',
      body
    );

    reset();
  };

  return {
    errors,
    register,
    handleSubmit,
    handleFormSubmit,
    isSubmitSuccessful,
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
  };
};
