# Studio Adrielle Ferreira Pilates

Site institucional one-page para o Studio Adrielle Ferreira (pilates clínico +
fisioterapia, São João de Meriti/RJ). Projeto freelance real, construído do
zero com o objetivo de converter visitantes em aula experimental agendada.

**Stack:** React 19 + Vite + TypeScript (strict) + Tailwind CSS v4 + shadcn/ui
(Base UI por baixo), zero backend — todo o conteúdo é estático e versionado
no próprio repositório.

## Arquitetura

O projeto segue o mesmo princípio usado no meu [portfólio](https://streche.github.io):
**conteúdo e apresentação são coisas separadas.**

- `src/data/studio.ts` é a única fonte de verdade do site: nome, contato,
  endereço, horário, benefícios, modalidades, diferenciais e depoimentos.
  Qualquer texto do site muda ali, nunca dentro de um componente. Os tipos
  (`Studio`, `Benefit`, `Modality`, `Testimonial`...) documentam o formato
  esperado de cada bloco de conteúdo.
- `src/sections/` tem um arquivo por seção da página, na ordem em que
  aparecem: `Hero → About → Modalities → Benefits → Testimonials → Location`.
  Cada seção só lê de `studio.ts` e decide como renderizar; não guarda texto
  hardcoded.
- `src/components/` reúne o que é compartilhado entre seções: `Nav` (com menu
  mobile em Popover), `Footer`, `SkipLink` (acessibilidade: pula pro
  conteúdo principal via teclado), `LiquidGlassButton` (CTA com efeito de
  vidro), e `ui/` com os primitivos gerados pelo shadcn (`button`, `carousel`,
  `popover`) que servem de base pros componentes próprios.
- `src/hooks/useInView.ts` é o único hook de animação do projeto: observa
  quando uma seção entra na viewport (`IntersectionObserver`) e aplica um
  fade + rise via CSS. Sem biblioteca de animação, mesma filosofia "zero kb
  extra" do portfólio.

### Decisões que valem explicar

- **Depoimentos com estado vazio honesto.** A seção `Testimonials` já existe
  no ar (ancora de navegação, heading, estrutura), mas `testimonials` em
  `studio.ts` está vazio de propósito: confirmado com a cliente que ainda não
  há depoimentos reais, e depoimento fake não entra. Por LGPD, só entram ali
  com consentimento explícito de uso público. O componente renderiza um
  estado vazio em vez de escrever (ou simular) qualquer avaliação.
- **SEO/meta duplicados em `index.html`.** Como é uma SPA sem SSR, crawlers
  de redes sociais (WhatsApp, Instagram, Facebook) não executam JavaScript:
  eles só leem o HTML estático. Por isso `og:title`, `og:description`,
  endereço, telefone e o JSON-LD (`@type: HealthClub`) estão hardcoded no
  `<head>` do `index.html`, **duplicando** o que já existe em `studio.ts`.
  É um trade-off aceito (sem motor de SSR só pra isso); o preço é lembrar de
  atualizar os dois lugares quando um dado de contato muda — o próprio
  `index.html` tem um comentário avisando isso.
- **Headers de segurança reais.** `public/_headers` define CSP, `X-Frame-Options`
  e afins no formato que o Cloudflare Pages lê automaticamente no deploy
  (não é enfeite: aplica de verdade quando publicado lá).
- **Fontes self-hosted.** `@fontsource/*` em vez de Google Fonts via CDN:
  sem request externo, sem depender de uma CSP permissiva pra fontes.

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
```

Outros scripts:

```bash
npm run lint          # ESLint
npm run typecheck     # tsc --noEmit
npm test               # Vitest
npm run build          # build de produção em dist/
npm run preview        # serve o build localmente
```

## Qualidade

Mesmo padrão de tooling do [portfólio](https://streche.github.io): ESLint
(flat config) + Prettier + Husky + lint-staged + commitlint (Conventional
Commits) + Vitest/Testing Library + `vitest-axe` para checagem automática de
acessibilidade, com CI no GitHub Actions (`.github/workflows/ci.yml`)
rodando lint/typecheck/test/build em cada PR.

## Status do projeto

Código completo e publicado como demonstração de trabalho. **O site ainda
não está no ar**: o deploy (Cloudflare Pages, ver seção abaixo) só acontece
quando a cliente confirmar a data de publicação. Até lá, este repositório é
a referência do projeto.

Pendência de conteúdo real (ver comentário `TODO Fase 0-B` em
`src/data/studio.ts`): a foto do Hero ainda é uma foto de estoque (créditos
em `public/images/hero/CREDITS.md`) até haver uma sessão de fotos real do
estúdio.

## Deploy (quando publicado: Cloudflare Pages)

1. No dashboard da Cloudflare: **Workers & Pages → Create → Pages → Connect
   to Git**, selecionar este repositório.
2. Configuração de build:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Branch `main` = produção. Pull requests geram preview deploys automáticos
   em uma URL própria.
4. **Domínio próprio** (quando disponível): Custom Domains no painel do
   projeto Cloudflare Pages, TLS é emitido automaticamente. Depois de trocar,
   atualizar a URL em 3 lugares: `og:url`/`canonical` no `index.html`, `url`
   no JSON-LD, e `seo.siteUrl` em `src/data/studio.ts`.

## Changelog

Histórico de versões em [CHANGELOG.md](CHANGELOG.md).
