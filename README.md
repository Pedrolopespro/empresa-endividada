# Empresa Endividada

Landing page oficial preparada para deploy na Vercel.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix Accordion para metodologia/FAQ
- Motion apenas no baralho, onde existe gesto físico

## Desenvolvimento
```bash
npm install
npm run dev
```

## Deploy Vercel
Importe o repositório no painel da Vercel. O framework Next.js é detectado automaticamente; mantenha Root Directory como `./` e comandos padrão.

## Imagens
`public/images/` está preenchido com placeholders para o site já nascer com aparência final (fotos de banco de imagens recortadas do design system e uma arte de marca no lugar do vídeo/retrato da Dra. Luana, já que não temos a foto real dela). Trocar por material definitivo assim que disponível, mantendo os mesmos nomes de arquivo:
- `hero/luana-vsl.webp` e `hero/luana-portrait.webp` — vídeo de apresentação e retrato da Dra. Luana
- `moments/*.webp` e `practice/*.webp` — fotos de cada momento/área de atuação (hoje reaproveitadas do banco de imagens do design system, repetidas entre si)
- `big-picture/impacto.webp` — foto do painel "The Big Picture"
- `avatars/*.webp` — avatares provisórios do card de prova social

## Pendências de conteúdo
- URL/arquivo definitivo da VSL e fotos reais da Dra. Luana
- fotos definitivas de cada momento/área de atuação (ver seção Imagens)
- URL definitiva do CTA (WhatsApp/CRM)
- depoimentos reais e verificáveis do Google
- links oficiais das redes sociais e Política de Privacidade
- validação jurídica de qualquer número de prova social antes de produção
