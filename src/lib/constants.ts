// Application Constants
export const APP_NAME = 'MBRAS Insights'
export const APP_DESCRIPTION = 'Plataforma premium de análise e insights para o mercado imobiliário brasileiro'
export const APP_VERSION = '1.0.0'
export const APP_URL = 'https://mbras-insights.com'

// Company Information
export const COMPANY = {
  name: 'MBRAS Emprendimentos',
  email: 'contato@mbras.com',
  phone: '+55 (11) 9999-9999',
  address: 'São Paulo, SP - Brasil',
  cnpj: '12.345.678/0001-99',
  social: {
    linkedin: 'https://linkedin.com/company/mbras',
    instagram: 'https://instagram.com/mbras',
    youtube: 'https://youtube.com/mbras',
    twitter: 'https://twitter.com/mbras'
  }
}

// API Configuration
export const API_ENDPOINTS = {
  register: '/api/register',
  newsletter: '/api/newsletter',
  analytics: '/api/analytics',
  contact: '/api/contact',
  reports: '/api/reports',
  dashboard: '/api/dashboard'
} as const

// MBRAS Brand Colors
export const COLORS = {
  navy: {
    50: '#E6EBF3',
    100: '#C2D0E3',
    200: '#9AB3D1',
    300: '#7296BF',
    400: '#4A79AD',
    500: '#2A5C9B',
    600: '#1E4A82',
    700: '#163868',
    DEFAULT: '#0A1E3C',
    800: '#0E264E',
    900: '#061428',
    dark: '#061428',
    light: '#0F2847'
  },
  teal: {
    50: '#E8F0F2',
    100: '#C7DDE1',
    200: '#A3C8CF',
    300: '#7FB3BD',
    400: '#5B9EAB',
    500: '#3F8999',
    600: '#337487',
    DEFAULT: '#28515A',
    700: '#28515A',
    800: '#1E3D45',
    900: '#142930',
    light: '#32616B',
    dark: '#1E3D45'
  },
  gold: {
    50: '#FEF9EC',
    100: '#FDF1D3',
    200: '#FBE8B7',
    300: '#F9DF9B',
    400: '#F7D67F',
    DEFAULT: '#F3BA57',
    500: '#F3BA57',
    600: '#F0A93C',
    700: '#E9962A',
    800: '#D7821E',
    900: '#B86D19',
    light: '#F5C977',
    dark: '#E9A83C',
    glow: '#FFD700'
  },
  neutral: {
    cream: '#FEF9EC',
    pearl: '#FAFAFA',
    graphite: '#1A1A1A',
    charcoal: '#0F0F0F'
  }
} as const

// Navigation Links
export const NAVIGATION_LINKS = [
  {
    label: 'Início',
    href: '#hero',
    external: false
  },
  {
    label: 'Formatos',
    href: '#formats',
    external: false
  },
  {
    label: 'Pilares',
    href: '#pillars',
    external: false
  },
  {
    label: 'Eventos',
    href: '#events',
    external: false
  },
  {
    label: 'Métricas',
    href: '#metrics',
    external: false
  },
  {
    label: 'Contato',
    href: '#register',
    external: false
  }
] as const

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { label: 'Sobre', href: '/sobre' },
    { label: 'Equipe', href: '/equipe' },
    { label: 'Carreira', href: '/carreira' },
    { label: 'Imprensa', href: '/imprensa' }
  ],
  products: [
    { label: 'Relatórios', href: '/relatorios' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'API', href: '/api' },
    { label: 'Consultoria', href: '/consultoria' }
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Webinars', href: '/webinars' },
    { label: 'E-books', href: '/ebooks' },
    { label: 'Glossário', href: '/glossario' }
  ],
  legal: [
    { label: 'Privacidade', href: '/privacidade' },
    { label: 'Termos', href: '/termos' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'LGPD', href: '/lgpd' }
  ]
} as const

// Animation Durations (in milliseconds)
export const ANIMATIONS = {
  fast: 200,
  medium: 300,
  slow: 500,
  extraSlow: 800
} as const

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const

// Form Validation Rules
export const VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZÀ-ÿ\s]+$/
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 100
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    minLength: 10,
    maxLength: 15
  },
  company: {
    minLength: 2,
    maxLength: 100
  },
  message: {
    minLength: 10,
    maxLength: 1000
  }
} as const

// File Upload Limits
export const FILE_UPLOAD = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp', '.pdf']
} as const

// Cache Durations (in seconds)
export const CACHE_DURATION = {
  short: 5 * 60,        // 5 minutes
  medium: 30 * 60,      // 30 minutes
  long: 2 * 60 * 60,    // 2 hours
  day: 24 * 60 * 60,    // 24 hours
  week: 7 * 24 * 60 * 60 // 1 week
} as const

// Feature Flags
export const FEATURES = {
  analytics: true,
  darkMode: true,
  newsletter: true,
  registration: true,
  premiumContent: true,
  videoContent: false,
  liveChat: false,
  notifications: true
} as const

// Market Data Constants
export const MARKET_DATA = {
  regions: [
    'São Paulo - SP',
    'Rio de Janeiro - RJ',
    'Belo Horizonte - MG',
    'Porto Alegre - RS',
    'Curitiba - PR',
    'Salvador - BA',
    'Brasília - DF',
    'Fortaleza - CE',
    'Recife - PE',
    'Goiânia - GO'
  ],
  propertyTypes: [
    'Residencial',
    'Comercial',
    'Industrial',
    'Rural',
    'Misto'
  ],
  investmentTypes: [
    'Compra e Venda',
    'Aluguel',
    'Fundos Imobiliários',
    'Desenvolvimento',
    'Reforma e Revenda'
  ]
} as const

// Content Categories
export const CONTENT_CATEGORIES = {
  reports: 'Relatórios',
  insights: 'Insights',
  analysis: 'Análises',
  trends: 'Tendências',
  news: 'Notícias',
  guides: 'Guias',
  webinars: 'Webinars',
  events: 'Eventos'
} as const

// User Roles
export const USER_ROLES = {
  visitor: 'visitor',
  subscriber: 'subscriber',
  member: 'member',
  premium: 'premium',
  admin: 'admin'
} as const

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  free: {
    name: 'Gratuito',
    price: 0,
    features: [
      'Relatórios mensais',
      'Análises básicas',
      'Newsletter'
    ]
  },
  premium: {
    name: 'Premium',
    price: 199,
    features: [
      'Todos os recursos gratuitos',
      'Relatórios semanais',
      'Insights exclusivos',
      'Dashboard interativo',
      'Webinars ao vivo',
      'Suporte prioritário'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 499,
    features: [
      'Todos os recursos premium',
      'Análises personalizadas',
      'API access',
      'Consultoria dedicada',
      'Relatórios customizados'
    ]
  }
} as const

// Error Messages
export const ERROR_MESSAGES = {
  required: 'Este campo é obrigatório',
  invalidEmail: 'Email inválido',
  invalidPhone: 'Telefone inválido',
  minLength: (min: number) => `Mínimo de ${min} caracteres`,
  maxLength: (max: number) => `Máximo de ${max} caracteres`,
  networkError: 'Erro de conexão. Tente novamente.',
  serverError: 'Erro interno. Tente novamente mais tarde.',
  unauthorized: 'Acesso não autorizado',
  forbidden: 'Ação não permitida',
  notFound: 'Recurso não encontrado',
  timeout: 'Tempo limite excedido'
} as const

// Success Messages
export const SUCCESS_MESSAGES = {
  registered: 'Cadastro realizado com sucesso!',
  subscribed: 'Inscrição na newsletter realizada!',
  emailSent: 'Email enviado com sucesso!',
  updated: 'Informações atualizadas!',
  saved: 'Dados salvos com sucesso!',
  deleted: 'Item removido com sucesso!'
} as const

// SEO Meta Tags
export const SEO = {
  defaultTitle: 'MBRAS Insights - Análise Premium do Mercado Imobiliário',
  titleTemplate: '%s | MBRAS Insights',
  defaultDescription: APP_DESCRIPTION,
  keywords: [
    'mercado imobiliário',
    'análise de mercado',
    'investimentos imobiliários',
    'relatórios imobiliários',
    'insights imobiliários',
    'dados imobiliários',
    'tendências imobiliárias',
    'MBRAS'
  ],
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: APP_NAME
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mbras'
  }
} as const

// Analytics Events
export const ANALYTICS_EVENTS = {
  pageView: 'page_view',
  buttonClick: 'button_click',
  formSubmit: 'form_submit',
  newsletterSignup: 'newsletter_signup',
  registration: 'registration',
  downloadReport: 'download_report',
  videoPlay: 'video_play',
  scrollDepth: 'scroll_depth',
  searchQuery: 'search_query',
  shareContent: 'share_content'
} as const

const CONFIG = {
  APP_NAME,
  APP_DESCRIPTION,
  COMPANY,
  COLORS,
  NAVIGATION_LINKS,
  FEATURES
} as const

export default CONFIG
