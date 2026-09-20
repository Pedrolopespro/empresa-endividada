# Deploy na Vercel

1. Vercel → Add New → Project.
2. Importe `Pedrolopespro/empresa-endividada`.
3. Selecione a branch desejada (ex.: `main` ou a branch em revisão) — a Vercel cria preview deployments automáticos para toda branch/PR.
4. Framework Preset: Next.js (auto-detectado).
5. Root Directory: `./`.
6. Build Command: padrão (`next build`).
7. Output Directory: padrão (`.next`).
8. Install Command: padrão (`npm ci`, já que o repo tem `package-lock.json` versionado).
9. Node.js: 20.9+; o projeto aceita Node 22/24.
10. Environment Variables: nenhuma necessária hoje (o site não faz chamadas a API externa nem lê `process.env`).
11. Deploy.

A página principal é estática no App Router; componentes client-side foram isolados somente onde existe interação.

## Checklist verificado antes do deploy
- [x] `npm ci && npm run build` roda limpo (mesmo comando que a Vercel executa).
- [x] `npm run typecheck` sem erros.
- [x] `next start` serve a build de produção e as imagens de `public/` corretamente.
- [x] Nenhuma variável de ambiente exigida.
- [x] Nenhum domínio de imagem externo (todas as imagens são locais em `public/images/`, servidas via `next/image`).
- [x] `public/` com ~12MB de assets — bem dentro dos limites da Vercel.

## Depois do primeiro deploy
- Conferir o domínio de preview gerado e, se aprovado, promover/configurar o domínio de produção em Project Settings → Domains.
- Ver a seção "Imagens" e "Pendências de conteúdo" do `README.md`: alguns assets ainda são placeholder (vídeo/retrato da Luana e foto do painel "The Big Picture") e o link do CTA (`href="#contato"`) ainda não aponta para WhatsApp/CRM definitivo.
