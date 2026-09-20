# Deploy na Vercel

1. Vercel → Add New → Project.
2. Importe `Pedrolopespro/empresa-endividada`.
3. Framework Preset: Next.js (auto-detectado).
4. Root Directory: `./`.
5. Build Command: padrão (`next build`).
6. Output Directory: padrão (`.next`).
7. Node.js: 20.9+; o projeto aceita Node 22/24.
8. Deploy.

A página principal é estática no App Router; componentes client-side foram isolados somente onde existe interação.
