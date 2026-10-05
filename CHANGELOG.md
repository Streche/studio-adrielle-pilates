# Changelog

Todas as mudanças notáveis deste projeto são documentadas aqui. Formato
baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [1.0.0] - 2026-10-05

### Added

- Primeira publicação do repositório no GitHub, como demonstração de
  trabalho no portfólio. O site ainda não está no ar (deploy pendente de
  confirmação de data com a cliente).
- README reescrito explicando a arquitetura, as decisões de conteúdo e o
  plano de deploy.

## [0.2.0] - 2026-08-16

### Added

- Logo real do estúdio, em alta qualidade, movida para a pipeline de assets
  do Vite.
- Tema visual verde-salvia no lugar do navy original.
- Menu mobile em painel suspenso (Popover) no lugar do painel lateral.
- Seção "Sobre" dividida com bolhas de parceria (Totalpass/Wellhub) ao lado
  do texto.
- Mapa do Google Maps embutido e bolha de horário de funcionamento na seção
  de Localização.
- Reel real do Instagram embutido na bolha de Contato.

### Fixed

- Espaçamento do menu superior (logo, links e botão de call-to-action
  estavam colidindo em telas menores).
- Centralização do botão final "Agende sua aula experimental".
- Cache do navegador servindo uma versão antiga da logo (corrigido ao mover
  o arquivo para o pipeline de assets do Vite, que gera um hash por build).
- Seção de Contato dividida em duas colunas (horário + endereço | Instagram)
  para melhor leitura.

## [0.1.0] - 2026-08-07

### Added

- Scaffold inicial do projeto (Vite + React + TypeScript + Tailwind CSS v4).
- Tokens de design, componentes shadcn/ui e fontes self-hosted
  (`@fontsource`).
- Modelo de conteúdo único em `src/data/studio.ts`.
- Shell de layout: navegação, menu mobile, rodapé e skip link de
  acessibilidade.
- Conteúdo real do estúdio e seção Hero.
- Seções "Sobre", "Modalidades" e "Benefícios", com animação fade-rise ao
  rolar a página.
- Seção de depoimentos (com estado vazio honesto, já que a cliente ainda não
  tinha depoimentos reais pra usar) e seção de Localização/Contato.
- SEO local (meta tags, JSON-LD) e favicon próprio.
- Headers de segurança HTTP reais (`public/_headers`, lidos pelo Cloudflare
  Pages no deploy).
- CI no GitHub Actions (lint/typecheck/test/build) e Dependabot.
- README inicial com setup, estrutura e passo a passo de deploy.
