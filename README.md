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
`public/images/` está preenchido para o site já nascer com aparência final. Alguns são assets aprovados definitivos, outros ainda são placeholders a trocar:
- `services/*.png` — **definitivo.** Ícones 3D aprovados dos 5 cards de "Onde nossa atuação entra" (handoff `service-cards-handoff`). Não recriar nem alterar.
- `hero/luana-vsl.webp` e `hero/luana-portrait.webp` — **placeholder.** Arte de marca no lugar do vídeo/retrato da Dra. Luana, já que não temos a foto real dela.
- `moments/*.webp` — **placeholder.** Fotos de banco de imagens recortadas do design system, reaproveitadas entre si.
- `big-picture/impacto.webp` — **placeholder.** Foto do painel "The Big Picture".
- `avatars/*.webp` — **placeholder.** Avatares provisórios do card de prova social.

Trocar os itens marcados como placeholder por material definitivo assim que disponível, mantendo os mesmos nomes de arquivo.

## Pendências de conteúdo
- URL/arquivo definitivo da VSL e fotos reais da Dra. Luana
- fotos definitivas de cada momento (ver seção Imagens)
- URL definitiva do CTA (WhatsApp/CRM)
- depoimentos reais e verificáveis do Google
- links oficiais das redes sociais e Política de Privacidade
- validação jurídica de qualquer número de prova social antes de produção
