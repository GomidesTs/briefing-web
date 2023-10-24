import { z } from 'zod';

export const schemaForm = z
  .object({
    fields: z.object({
      company: z.string().min(1, 'Digite o nome da sua empresa'),
      areaActivity: z
        .string()
        .min(3, 'O ramo de atuação deve ter no mínimo 3 caracteres'),
      name: z.string().min(3, 'O seu nome deve ter no mínimo 3 caracteres'),
      yearsCompany: z
        .string()
        .min(3, 'Informe quantos anos vocês atuam no mercado'),
      companyHistory: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(365, 'Sua história deve ser escrita com no maximo 365 caracteres'),
      productsOrServices: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(
          365,
          'Descreva seus produtos ou serviços com no maximo 365 caracteres'
        ),
      missionVisionValues: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(
          365,
          'Descreva a missão, visão e valores da sua empresa com no máximo 365 caracteres'
        ),
      brand: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(
          365,
          'Descreva a missão de sua marca com no máximo 365 caracteres'
        ),
      personality: z.string().min(3, 'Selecione a personalidade da sua marca'),
      avoid: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(365, 'Descreva oque devemos evitar com no máximo 365 caracteres'),
      visualIdentityManual: z
        .string()
        .min(3, 'Informe se a empresa possui uma marca e MIV'),
      marketing: z.string(),
      targetAudience: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(365, 'Descreva seu público alvo com no máximo 365 caracteres'),
      website: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(
          365,
          'Descreva o porquê seu público alvo precisa de um site com no máximo 365 caracteres'
        ),
      audienceBrand: z
        .string()
        .min(3, 'Insira mais detalhes')
        .max(
          365,
          'Descreva a relação de seu público com sua marca com no máximo 365 caracteres'
        ),
      currentWebsite: z.string().optional(),
      websitePurpose: z.string(),
      websites: z.string(),
      typeWebsite: z
        .string()
        .array()
        .nonempty('Escolha uma das opções de tipo de site'),
      design: z.string(),
      pagesSections: z
        .string()
        .array()
        .nonempty(
          'Escolha uma das opções de páginas e séries para compor seu site'
        ),
      otherPagesSections: z.string().optional(),
      term: z.string(),
      invest: z.string()
    })
  })
  .transform((field) => ({
    fields: {
      company: field.fields.company,
      areaActivity: field.fields.areaActivity,
      name: field.fields.name,
      yearsCompany: field.fields.yearsCompany,
      companyHistory: field.fields.companyHistory,
      productsOrServices: field.fields.productsOrServices,
      missionVisionValues: field.fields.missionVisionValues,
      brand: field.fields.brand,
      personality: field.fields.personality,
      avoid: field.fields.avoid,
      visualIdentityManual: field.fields.visualIdentityManual,
      marketing: field.fields.marketing,
      targetAudience: field.fields.targetAudience,
      website: field.fields.website,
      audienceBrand: field.fields.audienceBrand,
      currentWebsite: field.fields.currentWebsite,
      websitePurpose: field.fields.websitePurpose,
      websites: field.fields.websites,
      typeWebsite: field.fields.typeWebsite,
      design: field.fields.design,
      pagesSections: field.fields.pagesSections,
      otherPagesSections: field.fields.otherPagesSections,
      term: field.fields.term,
      invest: field.fields.invest
    }
  }));
