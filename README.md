# Studio Adrielle Ferreira Pilates

Site estático one-page para o Studio Adrielle Ferreira (pilates + fisioterapia,
São João de Meriti/RJ). React + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui.

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
```

Outros scripts:

```bash
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm test              # Vitest
npm run build         # build de produção em dist/
npm run preview       # serve o build localmente
```

## Estrutura

- `src/data/studio.ts` — fonte única de conteúdo (nome, contato, endereço,
  benefícios, modalidades, depoimentos). Editar aqui para trocar qualquer
  texto do site.
- `src/sections/` — uma seção por arquivo, na ordem em que aparecem na página
  (Hero, About, Modalities, Benefits, Testimonials, Location).
- `src/components/` — Nav, Footer e componentes reutilizáveis; `ui/` é código
  gerado pelo shadcn (ver nota abaixo).
- `src/hooks/useInView.ts` — anima as seções com fade-rise ao entrar na tela.
- `public/images/hero/` — foto de fundo do hero (ver `CREDITS.md` na mesma
  pasta) em 3 formatos × 4 tamanhos.
- `public/_headers` — headers de segurança HTTP, lidos automaticamente pelo
  Cloudflare Pages no deploy.

**Nota:** ao editar `og:title`/`og:description`/endereço/telefone em
`src/data/studio.ts`, atualizar também as tags equivalentes no `<head>` do
`index.html` (Open Graph, Twitter Card, JSON-LD) — como o site é uma SPA sem
SSR, crawlers de rede social não executam JS e só leem o HTML estático.

## Pendências de conteúdo

Ver comentários `TODO Fase 0` em `src/data/studio.ts`:

- Foto real do estúdio para o hero (hoje é uma foto de estoque, ver
  `public/images/hero/CREDITS.md`)
- Depoimentos de clientes (a seção já existe com um estado vazio honesto até lá)

## Deploy (Cloudflare Pages)

1. Criar um repositório no GitHub e dar push neste projeto.
2. No dashboard da Cloudflare: **Workers & Pages → Create → Pages → Connect
   to Git**, selecionar o repositório.
3. Configuração de build:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Branch `main` = produção. Pull requests geram preview deploys automáticos
   em uma URL própria.
5. **Domínio próprio** (quando disponível): Custom Domains no painel do
   projeto Cloudflare Pages — TLS é emitido automaticamente. Depois de trocar,
   atualizar a URL em 3 lugares: `og:url`/`canonical` no `index.html`, `url`
   no JSON-LD, e `Sitemap:` em `public/robots.txt` (+ `public/sitemap.xml`).

## Qualidade

Mesmo padrão de tooling do portfólio [Streche.github.io](https://streche.github.io):
ESLint (flat config) + Prettier + Husky + lint-staged + commitlint
(Conventional Commits) + Vitest/Testing Library, com CI no GitHub Actions
(`.github/workflows/ci.yml`) rodando lint/typecheck/test/build em cada PR.
