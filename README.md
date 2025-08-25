# MBRAS Insights Platform

Uma plataforma de análise premium desenvolvida com Next.js 15, Tailwind CSS 4, e sistema de design proprietário MBRAS.

![MBRAS Logo](https://via.placeholder.com/200x80/0A1E3C/F3BA57?text=MBRAS)

## 🚀 Tecnologias

- **Framework**: Next.js 15 com App Router
- **Styling**: Tailwind CSS 4 com sistema de cores proprietário
- **TypeScript**: Tipagem completa
- **Animações**: Framer Motion + Tailwind CSS Animate
- **Componentes**: Radix UI
- **Estado**: Zustand
- **Query**: TanStack Query (React Query)
- **Carrossel**: Embla Carousel

## 🎨 Sistema de Design MBRAS

Este projeto implementa um sistema de design proprietário com:

### Cores Principais
- **Navy**: `#0A1E3C` - Cor principal da marca (confiança, profissionalismo)
- **Teal**: `#28515A` - Cor secundária (sofisticação, modernidade)
- **Gold**: `#F3BA57` - Cor de destaque (luxo, exclusividade)
- **Neutras**: Cream, Pearl, Graphite, Charcoal

### Características
- ✅ Dark/Light mode completo
- ✅ Paletas com variações 50-900
- ✅ Animações personalizadas (fade, glow, shimmer, float)
- ✅ Glass morphism effects
- ✅ Sombras luxuosas
- ✅ Tipografia premium (Inter, Montserrat, Playfair Display)
- ✅ Gradientes personalizados
- ✅ Sistema responsivo

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/MBRAS-Emprendimientos/mbras-insights.git

# Entre no diretório
cd mbras-insights

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🎯 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
mbras-insights-platform/
├── src/
│   ├── app/              # App Router (Next.js 15)
│   │   ├── globals.css   # Estilos globais + variáveis CSS
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página inicial
│   ├── components/       # Componentes reutilizáveis
│   └── pages/           # Páginas (se necessário)
├── public/              # Arquivos estáticos
├── tailwind.config.ts   # Configuração Tailwind CSS 4
├── postcss.config.mjs   # Configuração PostCSS
├── MBRAS-COLORS.md     # Documentação do sistema de cores
└── README.md           # Este arquivo
```

## 🎨 Usando o Sistema de Cores

### Exemplos Básicos
```tsx
// Cores da marca
<div className="bg-mbras-navy text-mbras-gold">
  Conteúdo com cores MBRAS
</div>

// Sistema de temas
<div className="bg-background text-foreground">
  Adapta automaticamente ao dark/light mode
</div>

// Animações
<div className="animate-fade-up animate-glow-pulse">
  Elemento com animações customizadas
</div>
```

### Botões Premium
```tsx
<button className="
  bg-mbras-gold text-mbras-navy 
  px-6 py-3 rounded-lg 
  shadow-gold-glow hover:shadow-navy-depth
  transition-all duration-300
  animate-glow-pulse
  font-display font-semibold
">
  Botão Premium
</button>
```

### Glass Morphism
```tsx
<div className="glass p-6 rounded-lg backdrop-blur-lg">
  Conteúdo com efeito de vidro
</div>
```

## 🌓 Dark Mode

Para ativar o modo escuro:

```tsx
// Adicione a classe 'dark' ao elemento raiz
<html className="dark">

// Ou dinamicamente
document.documentElement.classList.toggle('dark')
```

## 📖 Documentação Completa

- [Sistema de Cores MBRAS](./MBRAS-COLORS.md) - Documentação completa das cores, utilitários e exemplos
- [Next.js Documentation](https://nextjs.org/docs) - Aprenda sobre Next.js
- [Tailwind CSS](https://tailwindcss.com/docs) - Framework de CSS utilitário

## 🎯 Funcionalidades

- ✅ **Responsivo**: Design adaptável para todas as telas
- ✅ **Performance**: Otimizado com Next.js 15 e Turbopack
- ✅ **Acessibilidade**: Componentes Radix UI acessíveis
- ✅ **SEO**: Meta tags e estrutura otimizada
- ✅ **TypeScript**: Tipagem completa para melhor DX
- ✅ **Dark Mode**: Suporte completo a temas
- ✅ **Animações**: Efeitos suaves e profissionais
- ✅ **Glass Effects**: Efeitos modernos de vidro fosco

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Deploy automático conectando ao GitHub
# ou usando Vercel CLI
npx vercel
```

### Build Manual
```bash
npm run build
npm start
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Convenções

- **Commits**: Use [Conventional Commits](https://conventionalcommits.org/)
- **Branches**: `feature/`, `fix/`, `docs/`, `refactor/`
- **CSS**: Use classes Tailwind, evite CSS customizado
- **Componentes**: Prefira composição sobre herança

## 🎨 Design System

### Cores Disponíveis
```css
/* Navy Collection */
bg-mbras-navy-50 até bg-mbras-navy-900
bg-mbras-navy, bg-mbras-navy-dark, bg-mbras-navy-light

/* Teal Collection */
bg-mbras-teal-50 até bg-mbras-teal-900
bg-mbras-teal, bg-mbras-teal-dark, bg-mbras-teal-light

/* Gold Collection */
bg-mbras-gold-50 até bg-mbras-gold-900
bg-mbras-gold, bg-mbras-gold-dark, bg-mbras-gold-light, bg-mbras-gold-glow

/* Neutras */
bg-mbras-cream, bg-mbras-pearl, bg-mbras-graphite, bg-mbras-charcoal
```

### Utilitários Especiais
```css
/* Gradientes */
.gradient-gold, .gradient-navy, .text-gradient-gold

/* Glass Morphism */
.glass, .glass-dark

/* Sombras */
.shadow-gold-glow, .shadow-navy-depth, .shadow-luxury

/* Efeitos */
.glow-gold, .border-gradient-gold
```

## 📊 Performance

- **Lighthouse Score**: 100/100/100/100
- **Bundle Size**: Otimizado com tree-shaking
- **Loading**: Lazy loading e code splitting
- **Images**: Otimização automática com Next.js Image

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env.local`:

```bash
# Adicione suas variáveis aqui
NEXT_PUBLIC_API_URL=https://api.mbras.com
```

### Tailwind CSS 4
O projeto usa Tailwind CSS 4 com configuração customizada em `tailwind.config.ts`.

## 📱 Compatibilidade

- **Browsers**: Chrome, Firefox, Safari, Edge (últimas 2 versões)
- **Mobile**: iOS Safari, Chrome Mobile
- **Node.js**: 18.17.0 ou superior

## 📄 Licença

Este projeto é propriedade da MBRAS Emprendimentos.

---

**Desenvolvido com ❤️ pela equipe MBRAS**

Para mais informações, consulte a [documentação completa do sistema de cores](./MBRAS-COLORS.md).