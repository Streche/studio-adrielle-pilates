# Créditos de imagens

## Hero (hero-*.{avif,webp,jpg})

Foto de estoque temporária até termos uma foto real do Studio Adrielle Ferreira
(ver `TODO Fase 0` em `src/data/studio.ts`).

- Fotógrafo: Ahmet Kurt
- Fonte: [Unsplash](https://unsplash.com/photos/woman-does-a-pilates-exercise-using-a-reformer-Lmt68LRP71s)
- Licença: [Unsplash License](https://unsplash.com/license) — uso comercial livre, sem obrigação de atribuição.
- Baixada em múltiplos tamanhos/formatos via API de imagem do próprio Unsplash
  (`?w=&fm=&q=&fit=crop`) e hospedada localmente (não é hotlink) para manter o
  CSP `img-src 'self'`.

O `og-image.jpg` na raiz de `public/` é um recorte 1200x630 da mesma foto,
mesma fonte e licença.
