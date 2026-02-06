# Frigorífico MFB - Website Profissional

Website moderno e responsivo para o Frigorífico MFB, construído com **Next.js 16**, **React 19**, **TypeScript 5** e **Tailwind CSS 4**.

## 🎯 Visão Geral

Plataforma completa de apresentação corporativa com foco em qualidade, rastreabilidade e sustentabilidade. O site segue os padrões de design do mercado frigorífico e oferece experiência otimizada para dispositivos móveis e desktop.

## ✨ Funcionalidades Implementadas

### 📄 Páginas Internas
- **Home**: Página inicial com seções de destaque, serviços, estatísticas, processo produtivo, depoimentos e CTA
- **Sobre Nós**: História, jornada empresarial, missão, visão e valores
- **Sustentabilidade**: Compromissos ambientais, pilares, iniciativas e objetivos
- **Rastreabilidade**: Transparência, processo em 6 etapas, tecnologias e certificações
- **Contato**: Formulário de contato com validação, múltiplos pontos de contato, departamentos e mapa

### 📋 Funcionalidades de Contato
- Formulário interativo com validação em tempo real
- Tratamento de erros e mensagens de sucesso
- Submissão por departamentos (Vendas, Suporte, Geral)
- Integração com sistema de email (pronto para backend)

### 📱 Design Responsivo
- **Carregamento otimizado** com media queries personalizadas
- **Breakpoints Tailwind**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Hamburger menu** com animação suave em dispositivos móveis
- **Logo responsiva** com otimização WebP
- **Componentes ajustáveis** para todos os tamanhos de tela

### 🎨 Design e Branding
- **Esquema de cores**: Vermelho primário (#D32F2F), Branco secundário (#FFFFFF), Vermelho escuro para hover (#B71C1C)
- **Tipografia**: Preto (#000000) em backgrounds brancos, branco em backgrounds vermelhos
- **Logo integrada**: Arquivo otimizado em WebP (public/logomfb.webp)
- **Layout centralizado**: Estrutura w-screen com flex justify-center para perfeita centralização

### 🔍 SEO e Metadados
- **Sitemap dinâmico**: Gerado automaticamente (src/app/sitemap.ts)
- **Robots.txt**: Configuração para crawlers
- **Schema.org markup**: Estrutura de dados para Organization e LocalBusiness
- **Metadados por página**: Titles, descriptions, Open Graph, Twitter Card
- **Breadcrumbs**: Hierarquia clara de navegação

### ⚡ Performance e Otimizações
- **Next.js Image Component**: Otimização automática de imagens com WebP fallback
- **Static Generation**: Todas as páginas pré-renderizadas como conteúdo estático
- **Code splitting**: Componentes modulares e reutilizáveis
- **Logo otimizada**: Convertida para WebP com qualidade 80% (economia de banda)

## 🏗️ Estrutura de Componentes

```
src/
├── app/
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Home
│   ├── globals.css          # Estilos globais
│   ├── contato/page.tsx     # Página de contato
│   ├── sobre-nos/page.tsx   # Sobre Nós
│   ├── sustentabilidade/... # Sustentabilidade
│   └── rastreabilidade/...  # Rastreabilidade
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Cabeçalho com logo (h-8 sm:h-10 md:h-14)
│   │   ├── Footer.tsx       # Rodapé com informações
│   │   └── Container.tsx    # Wrapper de layout centralizado
│   ├── ui/
│   │   ├── Section.tsx      # Seção com título
│   │   ├── HeroSection.tsx  # Banner hero
│   │   ├── Button.tsx       # Botões reutilizáveis
│   │   ├── Card.tsx         # Cards de conteúdo
│   │   ├── Testimonial.tsx  # Depoimentos
│   │   ├── ServiceCard.tsx  # Cards de serviços
│   │   ├── ProcessStep.tsx  # Etapas de processo
│   │   ├── Stats.tsx        # Estatísticas
│   │   └── ImageText.tsx    # Layout imagem + texto
│   └── seo/
│       └── SchemaOrg.tsx    # Estrutura JSON-LD
├── config/
│   └── site.ts              # Configurações globais
└── styles/
    ├── globals.css          # Estilos base
    └── theme.ts             # Variáveis de tema
```

## 🚀 Como Executar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Acesse o site em `http://localhost:3000`

### Build para Produção
```bash
npm run build
npm start
```

### Build Estático
```bash
npm run build
```
Todas as 8 rotas são pré-renderizadas como conteúdo estático:
- / (Home)
- /contato
- /sobre-nos
- /sustentabilidade
- /rastreabilidade
- /robots.txt
- /sitemap.xml

## 📊 Paleta de Cores

| Uso | Cor | Código |
|-----|-----|--------|
| Primária | Vermelho | #D32F2F |
| Secundária | Branco | #FFFFFF |
| Hover/Destaque | Vermelho Escuro | #B71C1C |
| Texto Padrão | Preto | #000000 |
| Texto Alternativo | Branco | #FFFFFF |

## 🖼️ Ativos (Assets)

### Logo
- **Arquivo**: `public/logomfb.webp` (otimizado)
- **Formato**: WebP (melhor compressão)
- **Fallback**: `public/logomfb.png` (original)
- **Header**: h-8 sm:h-10 md:h-14 (responsivo)
- **Width/Height**: 200x60px (base)

### SVG Assets
- Icons e gráficos em: `public/` (file.svg, globe.svg, next.svg, etc.)

## 🎯 Mudanças Recentes

### V1.1 - Otimização de Logo e Layout
- ✅ Convertida logo para WebP (qualidade 80%)
- ✅ Ajustes de responsividade em Header (h-20 sm:h-24 md:h-28)
- ✅ Logo dimensionada para h-8 sm:h-10 md:h-14 w-auto
- ✅ Removida logo do Footer (mantém apenas texto)
- ✅ Centralização perfeita do layout com w-screen flex
- ✅ Tipografia padronizada: preto em branco, branco em vermelho

### V1.0 - Release Inicial
- ✅ 5 páginas internas completas
- ✅ Formulário de contato com validação
- ✅ Design responsivo em todos os breakpoints
- ✅ SEO otimizado (sitemap, robots.txt, schema.org)
- ✅ Esquema de cores vermelho/branco
- ✅ Componentes reutilizáveis em Tailwind CSS

## 🔧 Configurações Técnicas

### Dependências Principais
- **Next.js**: 16.1.6 (Turbopack)
- **React**: 19.2.3
- **TypeScript**: 5 (strict mode)
- **Tailwind CSS**: 4
- **Sharp**: Otimização de imagens (script)

### Configurações TypeScript
- Modo strict habilitado
- Paths alias configurado: `@/* → ./src/*`

### Scripts Availáveis
```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm start          # Iniciar servidor de produção
npm run lint       # Verificar código
```

## 📋 Checklist de Implementação

- [x] 5 páginas internas (Home, Sobre, Contato, Sustentabilidade, Rastreabilidade)
- [x] Formulário de contato funcional
- [x] Design totalmente responsivo
- [x] Otimização de SEO
- [x] Esquema de cores personalizado (vermelho/branco)
- [x] Centralização de layout
- [x] Logo integrada e otimizada (WebP)
- [x] Componentes reutilizáveis
- [x] Tipografia padronizada
- [x] Todos os estilos compilados

## 📝 Próximas Melhorias (Roadmap)

- [ ] Integração com backend de email
- [ ] API de rastreabilidade em tempo real
- [ ] Blog/News section
- [ ] Integração Google Maps
- [ ] Sistema de agendamento
- [ ] Dashboard administrativo
- [ ] Multi-idioma (EN/PT)

## 🤝 Contribuição

Para contribuir ao projeto:
1. Crie uma branch para sua feature
2. Faça commits com mensagens claras
3. Envie um Pull Request

## 📞 Suporte

Para dúvidas ou sugestões:
- **Email**: contato@frigorifico-mfb.com.br
- **Telefone**: (11) 3456-7890
- **Endereço**: Av. Industrial, 1000 - São Paulo, SP

---

**Desenvolvido com ❤️ usando Next.js 16 e Tailwind CSS**
