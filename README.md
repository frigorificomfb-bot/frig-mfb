# Frigorífico MFB - Website Profissional

Website moderno e responsivo para o Frigorífico MFB, construído com **Next.js 16**, **React 19**, **TypeScript 5** e **Tailwind CSS 4**.

## 🎯 Visão Geral

Plataforma completa de apresentação corporativa com foco em qualidade, rastreabilidade e sustentabilidade. O site segue os padrões de design do mercado frigorífico e oferece experiência otimizada para dispositivos móveis e desktop.

## ✨ Funcionalidades Implementadas

### 📄 Páginas Internas
- **Home**: Página inicial com seções de destaque, serviços, estatísticas, processo produtivo, depoimentos e CTA
- **Sobre Nós**: História, jornada empresarial, missão, visão e valores
- **Sustentabilidade**: Compromissos ambientais, pilares, SIPAT, órgãos reguladores e metas
- **Rastreabilidade**: Transparência, processo em 6 etapas, tecnologias e certificações
- **Contato**: Formulário de contato com validação, múltiplos pontos de contato, departamentos e mapa

### 📋 Funcionalidades de Contato
- Formulário interativo com validação em tempo real
- Tratamento de erros e mensagens de sucesso
- Submissão por departamentos (Vendas, Rastreabilidade, Sustentabilidade, Suporte Técnico)
- Integração com sistema de email via Nodemailer (Gmail)
- API Route para envio de emails (`/api/contact`)

### 📱 Design Responsivo
- **Carregamento otimizado** com media queries personalizadas
- **Breakpoints Tailwind**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Hamburger menu** com animação suave em dispositivos móveis
- **Logo responsiva** com otimização WebP
- **Componentes ajustáveis** para todos os tamanhos de tela

### 🎨 Design e Branding
- **Esquema de cores**: Vermelho primário (#D32F2F), Branco secundário (#FFFFFF), Vermelho escuro para hover (#B71C1C)
- **Tipografia**: Preto (#000000) em backgrounds brancos, branco em backgrounds vermelhos
- **Logo integrada**: Arquivo otimizado em PNG (public/logomfb.png)
- **Layout centralizado**: Estrutura padronizada com max-w-5xl para alinhamento consistente

### 🔍 SEO e Metadados
- **Sitemap dinâmico**: Gerado automaticamente (src/app/sitemap.ts)
- **Robots.txt**: Configuração para crawlers
- **Schema.org markup**: Estrutura de dados JSON-LD para LocalBusiness
- **Metadados por página**: Titles, descriptions, Open Graph, Twitter Card
- **Breadcrumbs**: Hierarquia clara de navegação

### ⚡ Performance e Otimizações
- **Next.js Image Component**: Otimização automática de imagens com WebP fallback
- **Static Generation**: Todas as páginas pré-renderizadas como conteúdo estático
- **Code splitting**: Componentes modulares e reutilizáveis
- **Sharp**: Otimização de imagens no servidor

### 🌱 Sustentabilidade - Conteúdo
- **Compromisso com o Planeta**: Introdução com imagem dedicada
- **Pilares**: Meio Ambiente, Responsabilidade Social, Inovação Responsável
- **SIPAT**: Semana Interna de Prevenção de Acidentes do Trabalho
  - Importância (5 cards: Redução de Acidentes, Promoção da Saúde, Cumprimento Legal, Clima Organizacional, Prevenção de Doenças)
  - Atividades (Palestras, Dinâmicas e Jogos, Demonstrações Práticas, Bem-Estar, Exposição de Materiais)
- **Órgãos Reguladores**: SEMAS/PA, ADEPARÁ, MAPA, Prefeitura Municipal, Vigilância Sanitária, Corpo de Bombeiros, IBAMA, CRMV-PA
- **Metas Ambientais**: Redução de carbono, zero resíduo, energia renovável, rastreabilidade sustentável

## 🏗️ Estrutura de Componentes

```
src/
├── app/
│   ├── layout.tsx              # Layout raiz com Schema.org JSON-LD
│   ├── page.tsx                # Home
│   ├── globals.css             # Estilos globais + variáveis CSS
│   ├── favicon.ico             # Ícone do site
│   ├── robots.ts               # Configuração de crawlers
│   ├── sitemap.ts              # Sitemap dinâmico
│   ├── api/
│   │   └── contact/route.ts    # API de envio de email (Nodemailer)
│   ├── contato/page.tsx        # Página de contato
│   ├── sobre-nos/page.tsx      # Sobre Nós
│   ├── sustentabilidade/page.tsx # Sustentabilidade + SIPAT
│   └── rastreabilidade/page.tsx  # Rastreabilidade
├── components/
│   ├── forms/
│   │   └── ContactForm.tsx     # Formulário de contato (client component)
│   ├── layout/
│   │   ├── Header.tsx          # Cabeçalho com logo e navegação
│   │   ├── Footer.tsx          # Rodapé com redes sociais e contato
│   │   └── Container.tsx       # Wrapper de layout centralizado
│   ├── ui/
│   │   ├── Section.tsx         # Seção com título (max-w-[1400px])
│   │   ├── HeroSection.tsx     # Banner hero
│   │   ├── Button.tsx          # Botões reutilizáveis
│   │   ├── Card.tsx            # Cards de conteúdo
│   │   ├── Testimonial.tsx     # Depoimentos
│   │   ├── ServiceCard.tsx     # Cards de serviços
│   │   ├── ProcessStep.tsx     # Etapas de processo
│   │   ├── Stats.tsx           # Estatísticas
│   │   └── ImageText.tsx       # Layout imagem + texto
│   └── seo/
│       └── SchemaOrg.tsx       # Estrutura JSON-LD
├── config/
│   └── site.ts                 # Configurações globais
└── styles/
    └── theme.ts                # Variáveis de tema (não utilizado atualmente)
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

### Rotas Pré-renderizadas
Todas as rotas são pré-renderizadas como conteúdo estático:
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
| Active | Vermelho Forte | #A01818 |
| Texto Padrão | Preto | #000000 |
| Texto Alternativo | Branco | #FFFFFF |

## 🖼️ Ativos (Assets)

### Logo
- **Arquivo**: `public/logomfb.png`
- **Header**: h-10 sm:h-12 md:h-14 (responsivo)
- **Width/Height**: 180x60px (base)

### Imagens do Site
| Arquivo | Uso |
|---------|-----|
| `hero-carne.png` | Banner hero da Home |
| `equipe-frigorifico.jpeg` | Seção "Movidos pela excelência" (Home) |
| `compromisso-com-o-planeta.jpg` | Seção "Compromisso com o Planeta" (Sustentabilidade) |
| `producao-carcacas.jpeg` | ServiceCard "Qualidade" (Home) |
| `atendimento-frig.jpg` | ServiceCard "Atendimento" (Home) |
| `producao-linha-01.jpeg` | ServiceCard "Processamento" (Home) |
| `producao-higienizacao.jpeg` | ServiceCard "Rastreabilidade" (Home) |
| `qualidade-frig.png` | Página de Rastreabilidade |
| `rastreabilidade-frig.jpg` | Página de Rastreabilidade |
| `processamento-frig.jpg` | Página de Rastreabilidade |

### Vídeo
- `video-institucional.mp4` — Vídeo institucional do frigorífico

## 📞 Informações de Contato

| Dado | Valor |
|------|-------|
| **Telefone** | (91) 3444-1615 |
| **Email** | ruthehelena@hotmail.com |
| **Endereço** | Rodovia BR 010, KM 43 e 44, S/N - Mãe do Rio - PA, 68675-000 |
| **Instagram** | [@frigorifico_mfb](https://www.instagram.com/frigorifico_mfb) |

## 🔧 Configurações Técnicas

### Dependências Principais
- **Next.js**: 16.1.6 (Turbopack)
- **React**: 19.2.3
- **TypeScript**: 5 (strict mode)
- **Tailwind CSS**: 4
- **Nodemailer**: 8.0.1 (envio de emails)
- **React Icons**: 5.5.0 (ícones de redes sociais)
- **Sharp**: Otimização de imagens

### Configuração de Email (.env.local)
```bash
GMAIL_USER=seu-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
CONTACT_TO=destinatario@empresa.com.br
```
> Para gerar a senha de app: https://myaccount.google.com/apppasswords

### Configurações TypeScript
- Modo strict habilitado
- Paths alias configurado: `@/* → ./src/*`

### Scripts Disponíveis
```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm start          # Iniciar servidor de produção
npm run lint       # Verificar código
```

## 📋 Checklist de Implementação

- [x] 5 páginas internas (Home, Sobre, Contato, Sustentabilidade, Rastreabilidade)
- [x] Formulário de contato funcional com envio de email
- [x] Design totalmente responsivo
- [x] Otimização de SEO (sitemap, robots.txt, schema.org)
- [x] Esquema de cores personalizado (vermelho/branco)
- [x] Layout centralizado e padronizado (max-w-5xl)
- [x] Logo integrada e otimizada
- [x] Componentes reutilizáveis
- [x] Tipografia padronizada
- [x] Redes sociais integradas (Instagram)
- [x] Conteúdo SIPAT completo
- [x] Órgãos reguladores documentados
- [x] API de contato com Nodemailer

## 🎯 Mudanças Recentes

### V1.2 - Atualização de Conteúdo e Alinhamento
- ✅ Redes sociais atualizadas (Instagram real)
- ✅ Informações de contato atualizadas (telefone, email, endereço)
- ✅ Seção SIPAT adicionada (Importância + Atividades)
- ✅ Órgãos Reguladores adicionados (8 órgãos)
- ✅ Alinhamento padronizado em toda a página de Sustentabilidade
- ✅ Formulário de contato com inputs alinhados à esquerda
- ✅ Imagem dedicada para "Compromisso com o Planeta"

### V1.1 - Otimização de Logo e Layout
- ✅ Ajustes de responsividade em Header
- ✅ Logo dimensionada responsivamente
- ✅ Centralização perfeita do layout
- ✅ Tipografia padronizada: preto em branco, branco em vermelho

### V1.0 - Release Inicial
- ✅ 5 páginas internas completas
- ✅ Formulário de contato com validação
- ✅ Design responsivo em todos os breakpoints
- ✅ SEO otimizado (sitemap, robots.txt, schema.org)
- ✅ Esquema de cores vermelho/branco
- ✅ Componentes reutilizáveis em Tailwind CSS

## 📝 Próximas Melhorias (Roadmap)

- [ ] Integração Google Maps na página de contato
- [ ] Blog/News section
- [ ] Sistema de agendamento
- [ ] Dashboard administrativo
- [ ] Multi-idioma (EN/PT)
- [ ] Galeria de fotos/vídeos
- [ ] Página de produtos

## 🤝 Contribuição

Para contribuir ao projeto:
1. Crie uma branch para sua feature
2. Faça commits com mensagens claras
3. Envie um Pull Request

## 📞 Suporte

Para dúvidas ou sugestões:
- **Email**: ruthehelena@hotmail.com
- **Telefone**: (91) 3444-1615
- **Endereço**: Rodovia BR 010, KM 43 e 44, S/N - Mãe do Rio - PA
- **Instagram**: [@frigorifico_mfb](https://www.instagram.com/frigorifico_mfb)

---

**Desenvolvido com ❤️ usando Next.js 16 e Tailwind CSS 4**
