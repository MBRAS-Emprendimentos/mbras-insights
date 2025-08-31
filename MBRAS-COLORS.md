# Sistema de Cores MBRAS

Documentação completa do sistema de cores proprietário da MBRAS para a plataforma Insights.

## 🎨 Paleta de Cores Proprietárias

### Navy Collection
A cor principal da marca MBRAS, representando confiança, profissionalismo e estabilidade.

```css
/* Variações Navy */
--mbras-navy-50: #E6EBF3;
--mbras-navy-100: #C2D0E3;
--mbras-navy-200: #9AB3D1;
--mbras-navy-300: #7296BF;
--mbras-navy-400: #4A79AD;
--mbras-navy-500: #2A5C9B;
--mbras-navy-600: #1E4A82;
--mbras-navy-700: #163868;
--mbras-navy: #0A1E3C;        /* DEFAULT */
--mbras-navy-800: #0E264E;
--mbras-navy-900: #061428;
--mbras-navy-dark: #061428;
--mbras-navy-light: #0F2847;
```

**Classes Tailwind:**
- `bg-mbras-navy-50` até `bg-mbras-navy-900`
- `text-mbras-navy-50` até `text-mbras-navy-900`
- `border-mbras-navy-50` até `border-mbras-navy-900`

### Teal Collection
Cor secundária que complementa o navy, trazendo sofisticação e modernidade.

```css
/* Variações Teal */
--mbras-teal-50: #E8F0F2;
--mbras-teal-100: #C7DDE1;
--mbras-teal-200: #A3C8CF;
--mbras-teal-300: #7FB3BD;
--mbras-teal-400: #5B9EAB;
--mbras-teal-500: #3F8999;
--mbras-teal-600: #337487;
--mbras-teal: #28515A;       /* DEFAULT */
--mbras-teal-800: #1E3D45;
--mbras-teal-900: #142930;
--mbras-teal-light: #32616B;
--mbras-teal-dark: #1E3D45;
```

**Classes Tailwind:**
- `bg-mbras-teal-50` até `bg-mbras-teal-900`
- `text-mbras-teal-50` até `text-mbras-teal-900`
- `border-mbras-teal-50` até `border-mbras-teal-900`

### Neutral Collection
Cores neutras para complementar a paleta principal.

```css
/* Cores Neutras */
--mbras-cream: #FEF9EC;      /* Backgrounds suaves */
--mbras-pearl: #FAFAFA;      /* Backgrounds alternativos */
--mbras-graphite: #1A1A1A;   /* Textos escuros */
--mbras-charcoal: #0F0F0F;   /* Backgrounds escuros */
```

**Classes Tailwind:**
- `bg-mbras-cream`, `bg-mbras-pearl`, `bg-mbras-graphite`, `bg-mbras-charcoal`
- `text-mbras-cream`, `text-mbras-pearl`, `text-mbras-graphite`, `text-mbras-charcoal`

## 🌓 Sistema de Temas (Light/Dark)

### Light Theme
```css
:root {
  --background: 0 0% 100%;           /* Branco puro */
  --foreground: 215 65% 15%;         /* Navy para texto */
  --primary: 215 65% 15%;            /* Navy */
  --primary-foreground: 44 87% 94%;  /* Cream */
  --secondary: 189 36% 25%;          /* Teal */
  --accent: 189 36% 25%;             /* Teal */
  --muted: 44 87% 94%;               /* Cream */
  --border: 44 30% 91%;              /* Cream escurecido */
  --ring: 189 36% 25%;               /* Teal para focus */
}
```

### Dark Theme
```css
.dark {
  --background: 215 65% 8%;          /* Navy muito escuro */
  --foreground: 44 87% 94%;          /* Cream para texto */
  --primary: 189 36% 35%;            /* Teal destacado */
  --primary-foreground: 215 65% 15%; /* Navy */
  --secondary: 189 36% 35%;          /* Teal mais claro */
  --accent: 189 36% 35%;             /* Teal */
  --muted: 215 50% 20%;              /* Navy médio */
  --border: 215 50% 20%;             /* Navy médio */
  --ring: 189 36% 35%;               /* Teal para focus */
}
```

## 🎭 Utilitários Customizados

### Gradientes
```css
/* Gradiente teal (mapeado do "gold") */
.gradient-gold {
  background: linear-gradient(135deg, #28515A 0%, #32616B 50%, #28515A 100%);
}

/* Gradiente navy */
.gradient-navy {
  background: linear-gradient(135deg, #0A1E3C 0%, #28515A 100%);
}

/* Texto com gradiente teal (mapeado do "gold") */
.text-gradient-gold {
  background: linear-gradient(to right, #28515A, #32616B, #28515A);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

### Efeitos Glass Morphism
```css
/* Vidro claro */
.glass {
  backdrop-filter: blur(16px);
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Vidro escuro */
.glass-dark {
  backdrop-filter: blur(16px);
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
}
```

### Sombras Luxuosas
```css
/* Brilho teal (mapeado do "gold") */
.shadow-gold-glow {
  box-shadow: 0 0 30px rgba(40, 81, 90, 0.3);
}

/* Profundidade navy */
.shadow-navy-depth {
  box-shadow: 0 10px 40px rgba(10, 30, 60, 0.2);
}

/* Sombra luxuosa */
.shadow-luxury {
  box-shadow: 
    0 10px 40px rgba(10, 30, 60, 0.1),
    0 2px 10px rgba(10, 30, 60, 0.06);
}

/* Brilho teal dinâmico */
.glow-gold {
  filter: drop-shadow(0 0 20px rgba(40, 81, 90, 0.5));
}
```

## 🎬 Animações Customizadas

### Animações Disponíveis
```css
/* Fade effects */
animate-fade-up      /* Fade entrando de baixo */
animate-fade-down    /* Fade entrando de cima */
animate-fade-in      /* Fade simples */

/* Slide effects */
animate-slide-in-right  /* Slide da direita */
animate-slide-in-left   /* Slide da esquerda */

/* Scale effects */
animate-scale-in     /* Escala crescendo */

/* Special effects */
animate-glow-pulse   /* Pulso teal */
animate-shimmer      /* Efeito shimmer */
animate-float        /* Flutuação suave */
animate-spotlight    /* Spotlight effect */
animate-marquee      /* Marquee scroll */
```

## 🖼️ Backgrounds Customizados

### Gradientes Radiais e Cônicos
```css
bg-gradient-radial   /* Gradiente radial */
bg-gradient-conic    /* Gradiente cônico */
bg-gold-shimmer      /* Shimmer teal */
bg-navy-mesh         /* Mesh navy/teal */
```

## 📝 Tipografia

### Famílias de Fonte
```css
font-sans     /* Inter - Textos gerais */
font-display  /* Montserrat - Títulos */
font-luxury   /* Playfair Display - Elementos premium */
```

### Tamanhos Customizados
```css
text-2xs   /* 10px */
text-3xl   /* 32px */
text-4xl   /* 40px */
text-5xl   /* 48px */
text-6xl   /* 60px */
text-7xl   /* 72px */
text-8xl   /* 96px */
text-9xl   /* 128px */
```

## 🎯 Exemplos de Uso

### Cartão com Tema MBRAS
```tsx
<div className="card bg-card text-card-foreground p-6 rounded-lg shadow-luxury">
  <h3 className="font-display text-xl text-mbras-navy mb-2">
    Título do Cartão
  </h3>
  <p className="text-muted-foreground">
    Conteúdo do cartão com cores do sistema
  </p>
</div>
```

### Botão Premium
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

### Hero Section com Gradiente
```tsx
<section className="
  min-h-screen 
  bg-gradient-navy
  relative overflow-hidden
">
  <div className="absolute inset-0 bg-navy-mesh opacity-50"></div>
  <div className="relative glass p-12 m-8 rounded-2xl">
    <h1 className="text-6xl font-luxury text-gradient-gold mb-6">
      MBRAS Conecta
    </h1>
    <p className="text-xl text-mbras-cream">
      Plataforma de análise premium
    </p>
  </div>
</section>
```

## 🔄 Ativando o Modo Escuro

Para ativar o tema escuro, adicione a classe `dark` ao elemento raiz:

```tsx
// Com React/Next.js
<html className="dark">
  {/* Conteúdo */}
</html>

// Dinamicamente
document.documentElement.classList.add('dark')
document.documentElement.classList.remove('dark')
```

## 🎨 Paleta de Cores Completa (Referência Rápida)

| Cor | Light Mode | Dark Mode | Uso |
|-----|------------|-----------|-----|
| `background` | Branco | Navy Escuro | Fundo principal |
| `foreground` | Navy | Cream | Texto principal |
| `primary` | Navy | Gold | Botões primários |
| `secondary` | Teal | Teal Light | Botões secundários |
| `accent` | Teal | Teal | Destaques |
| `muted` | Cream | Navy Médio | Backgrounds suaves |
| `border` | Cream Escuro | Navy Médio | Bordas |

## 🚀 Dicas de Implementação

1. **Use variáveis CSS**: Sempre prefira `bg-background` a cores fixas
2. **Combine cores**: Navy + Teal para contraste premium
3. **Aplique animações**: Use `animate-fade-up` em elementos importantes
4. **Utilize sombras**: `shadow-luxury` para elevação
5. **Glass morphism**: Use `glass` em overlays e modais
6. **Gradientes**: `gradient-gold` (teal) para CTAs importantes

## 🔧 Configuração do Tailwind

O arquivo `tailwind.config.ts` já está configurado com todas as cores e utilitários. Para usar:

1. Importe as cores: `import './globals.css'`
2. Use as classes: `bg-mbras-navy text-mbras-gold` (mapeado para teal)
3. Ative dark mode: `className="dark"`

---

**Criado para MBRAS Conecta Platform**  
*Sistema de Design proprietário v1.0*