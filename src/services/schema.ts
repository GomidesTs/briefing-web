import { z } from 'zod';

export const schemaForm = z
  .object({
    company: z.string(),
    areaActivity: z
      .string()
      .min(3, 'O ramo de atuação deve ter no mínimo 3 caracteres'),
    name: z.string().min(3, 'O seu nome deve ter no mínimo 3 caracteres'),
    yearsCompany: z.string(),
    companyHistory: z
      .string()
      .max(1024, 'Sua história deve ser escrita com no maximo 1024 caracteres'),
    productsOrServices: z
      .string()
      .max(
        1024,
        'Descreva seus produtos ou serviços com no maximo 1024 caracteres'
      ),
    missionVisionValues: z
      .string()
      .max(
        1024,
        'Descreva a missão, visão e valores da sua empresa com no máximo 1024 caracteres'
      ),
    brand: z
      .string()
      .max(
        1024,
        'Descreva a missão de sua marca com no máximo 1024 caracteres'
      ),
    personality: z.string(),
    avoid: z
      .string()
      .max(1024, 'Descreva oque devemos evitar com no máximo 1024 caracteres'),
    visualIdentityManual: z.string(),
    marketing: z.string(),
    targetAudience: z
      .string()
      .max(1024, 'Descreva seu público alvo com no máximo 1024 caracteres'),
    website: z
      .string()
      .max(
        1024,
        'Descreva o porquê seu público alvo precisa de um site com no máximo 1024 caracteres'
      ),
    audienceBrand: z
      .string()
      .max(
        1024,
        'Descreva a relação de seu público com sua marca com no máximo 1024 caracteres'
      ),
    currentWebsite: z
      .string()
      .min(12, 'Seu site deve ter no mínimo 12 caracteres')
      .optional(),
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
  .transform((field) => ({
    fields: {
      company: field.company,
      areaActivity: field.areaActivity,
      name: field.name,
      yearsCompany: field.yearsCompany,
      companyHistory: field.companyHistory,
      productsOrServices: field.productsOrServices,
      missionVisionValues: field.missionVisionValues,
      brand: field.brand,
      personality: field.personality,
      avoid: field.avoid,
      visualIdentityManual: field.visualIdentityManual,
      marketing: field.marketing,
      targetAudience: field.targetAudience,
      website: field.website,
      audienceBrand: field.audienceBrand,
      currentWebsite: field.currentWebsite,
      websitePurpose: field.websitePurpose,
      websites: field.websites,
      typeWebsite: field.typeWebsite,
      design: field.design,
      pagesSections: field.pagesSections,
      otherPagesSections: field.otherPagesSections,
      term: field.term,
      invest: field.invest
    }
  }));
