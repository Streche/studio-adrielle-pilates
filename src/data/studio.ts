export interface OpeningHoursItem {
  days: string
  hours: string
}

export interface Studio {
  name: string
  tagline: string
  whatsappUrl: string
  /** Formato E.164 (ex.: +5521999999999), usado no JSON-LD e em links wa.me com mensagem. */
  whatsappNumberE164?: string
  instagramUrl: string
  instagramHandle: string
  addressLine?: string
  neighborhood: string
  city: string
  state: string
  postalCode?: string
  mapsSearchUrl: string
  geo?: { lat: number; lng: number }
  openingHours: OpeningHoursItem[]
}

export interface HeroContent {
  headline: string
  subheadline: string
  ctaLabel: string
  imageAlt: string
}

export interface About {
  heading: string
  paragraphs: string[]
  highlights: string[]
}

export type BenefitIcon =
  'heart-pulse' | 'dumbbell' | 'move' | 'stethoscope' | 'activity' | 'sparkles'

export interface Benefit {
  icon: BenefitIcon
  title: string
  description: string
}

export interface Modality {
  title: string
  description: string
}

export interface Differential {
  title: string
  description: string
}

export interface Testimonial {
  name: string
  context: string
  quote: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Seo {
  siteUrl: string
  ogImagePath: string
  defaultDescription: string
}

export const studio: Studio = {
  name: 'Studio Adrielle Ferreira',
  tagline: 'Pilates e fisioterapia para transformar sua rotina',
  whatsappUrl: 'https://wa.me/message/IHHDCSHRV57WE1',
  whatsappNumberE164: '+5521965321409',
  instagramUrl: 'https://www.instagram.com/studioadrielleferreirapilates/',
  instagramHandle: '@studioadrielleferreirapilates',
  addressLine: 'R. Panamense, 2 - Quadra 35',
  neighborhood: 'Jardim Meriti',
  city: 'São João de Meriti',
  state: 'RJ',
  postalCode: '25555-740',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=R.+Panamense%2C+2+-+Jardim+Meriti%2C+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ%2C+25555-740',
  openingHours: [{ days: 'Segunda a sábado', hours: '07:00 - 21:00' }],
}

export const heroContent: HeroContent = {
  headline: 'Transforme seu corpo. Reconecte sua mente.',
  subheadline:
    'Pilates e fisioterapia em um só lugar, com atendimento próximo e personalizado para você recuperar o movimento, aliviar dores e ganhar confiança no seu corpo.',
  ctaLabel: 'Agende sua aula experimental',
  // Foto de estoque temporária (ver public/images/hero/CREDITS.md) — o alt
  // descreve a imagem real exibida, não afirma ser uma foto do estúdio.
  // TODO Fase 0-B: trocar pela foto real do estúdio e atualizar este alt.
  imageAlt: 'Mulher praticando pilates em um reformer',
}

export const about: About = {
  heading: 'Sobre a Adrielle',
  paragraphs: [
    'A Adrielle une pilates e fisioterapia em um único acompanhamento: cada aula parte do seu corpo e das suas necessidades, não de uma sequência genérica.',
    'O atendimento é feito em grupos pequenos, com atenção real a cada aluno, e o estúdio é parceiro Totalpass para facilitar o acesso às aulas.',
  ],
  highlights: ['Pilates clínico', 'Fisioterapia', 'Parceria Totalpass'],
}

export const benefits: Benefit[] = [
  {
    icon: 'heart-pulse',
    title: 'Alívio de dores',
    description:
      'Trabalho terapêutico focado em aliviar dores nas costas, pescoço e articulações.',
  },
  {
    icon: 'dumbbell',
    title: 'Fortalecimento do core',
    description:
      'Exercícios que fortalecem a musculatura profunda e melhoram a estabilidade do corpo.',
  },
  {
    icon: 'move',
    title: 'Flexibilidade e mobilidade',
    description:
      'Mais amplitude de movimento no dia a dia, com menos rigidez muscular.',
  },
  {
    icon: 'stethoscope',
    title: 'Reabilitação fisioterapêutica',
    description:
      'Acompanhamento de fisioterapia integrado ao pilates para recuperação de lesões.',
  },
  {
    icon: 'activity',
    title: 'Postura e equilíbrio',
    description:
      'Consciência corporal que melhora a postura e reduz o risco de quedas e lesões.',
  },
  {
    icon: 'sparkles',
    title: 'Bem-estar físico e mental',
    description:
      'Um momento de cuidado com você mesma, aliando saúde do corpo e da mente.',
  },
]

export const modalities: Modality[] = [
  {
    title: 'Reformer',
    description:
      'Aparelho com carrinho deslizante e molas que ajustam a resistência a cada exercício, trabalhando o corpo todo com controle.',
  },
  {
    title: 'Cadillac',
    description:
      'Estrutura com barras e molas que permite uma variedade grande de exercícios, do fortalecimento ao alongamento.',
  },
  {
    title: 'Step Chair',
    description:
      'Equipamento compacto que desafia equilíbrio, força e controle em movimentos precisos.',
  },
  {
    title: 'Ladder Barrel',
    description:
      'Combina escada e barril para trabalhar mobilidade da coluna, alongamento e estabilidade do core.',
  },
  {
    title: 'Fisioterapia',
    description: 'Avaliação e tratamento fisioterapêutico individualizado.',
  },
]

export const differentials: Differential[] = [
  {
    title: 'Grupos pequenos',
    description: 'Atenção personalizada em cada aula, sem turmas lotadas.',
  },
  {
    title: 'Pilates + fisioterapia',
    description:
      'Duas abordagens em um só acompanhamento, pensado para o seu corpo.',
  },
  {
    title: 'Parceria Totalpass',
    description: 'Facilidade de acesso às aulas para quem já usa o Totalpass.',
  },
]

// Confirmado com a cliente: ainda não há depoimentos (2026-08-07). A seção
// fica com o "local preparado" (id/heading no ar) mas mostra um estado vazio
// honesto em vez do carrossel enquanto este array estiver vazio — depoimentos
// só entram aqui com consentimento de uso público (LGPD).
export const testimonials: Testimonial[] = []

// "Início" fica de fora de propósito: a logo já leva pro topo da página.
export const nav: NavLink[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

export const seo: Seo = {
  // TODO Fase 11: atualizar para a URL real após o primeiro deploy no Cloudflare Pages.
  siteUrl: 'https://studio-adrielle-pilates.pages.dev',
  ogImagePath: '/og-image.jpg',
  defaultDescription:
    'Studio Adrielle Ferreira: pilates e fisioterapia em São João de Meriti, RJ. Agende sua aula experimental.',
}
