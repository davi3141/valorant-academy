# // PROTOCOLO RADIANTE — VALORANT ACADEMY & COACHING STORE

Landing page de alta conversão, temática de Valorant, desenvolvida com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, micro-interações táteis e **Web Audio API** para efeitos sonoros gamer.

---

## 🚀 Como Rodar Localmente (Node.js)

O servidor já está configurado e rodando localmente! Se quiser reiniciar a qualquer momento:

```bash
cd valorant-radiant-academy
npm run dev
```

Acesse no seu navegador: **[http://localhost:3000](http://localhost:3000)**

Para gerar a build de produção local:
```bash
npm run build
npm start
```

---

## ⚡ Como Subir para o Vercel

O projeto foi construído exatamente nos padrões nativos da Vercel (Next.js 14 App Router), sem necessidade de configurações extras.

### Método 1: Direto pelo GitHub (Recomendado)
1. Crie um repositório no seu GitHub (ex: `valorant-radiant-academy`).
2. No terminal dentro da pasta:
   ```bash
   git init
   git add .
   git commit -m "feat: Protocolo Radiante Landing Page completa"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/valorant-radiant-academy.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**.
4. Importe o repositório. O Vercel detectará automaticamente o framework `Next.js`.
5. Clique em **"Deploy"**!

### Método 2: Via Vercel CLI
```bash
npx vercel
```
Basta seguir as instruções no terminal para publicar em segundos.

---

## 🎯 Funcionalidades e Design Spells Implementados

1. **Efeitos Sonoros Táticos em Tempo Real (Web Audio API):**
   - Efeitos sonoros customizados (clique militar, armar spike, celebração radiante) sintetizados sem depender de arquivos pesados de áudio externos, com botão de mute/unmute no topo.
2. **Calculadora Interativa de Progressão de Elo:**
   - O visitante seleciona seu Elo Atual e seu Elo Alvo para receber uma projeção em tempo real de semanas necessárias, taxa esperada de headshot, win rate e recomendação automática de plano com efeito de confetes.
3. **Seletor Dinâmico de Agentes no Hero:**
   - Abas com cards táticos (Jett, Reyna, Sova, Omen) detalhando estatísticas, K/D, taxa de HS de nível Radiante e dicas cirúrgicas de jogabilidade.
4. **Killfeed Ticker em Tempo Real:**
   - Barra de notificações em looping infinito no estilo killfeed do Valorant, exibindo promoções de alunos, VOD reviews concluídos e novas matrículas.
5. **Matriz Curricular dos 4 Pilares:**
   - Mecânica Pura & Biomecânica, Macro Game & Controle de Espaço, Lineups Secretas de VCT e Psicologia Anti-Tilt com abas interativas.
6. **Corpo Docente Top 100 Radiante:**
   - Cards com os coaches, especialidades, win rate verificado e vagas restantes em tempo real.
7. **Loja de Cursos & Coaching (3 Tiers de Conversão):**
   - Protocolo Iniciação (R$ 67), Academy Pro Elite (R$ 147 - Mais Vendido) e Coaching 1-on-1 VIP (R$ 397). Alternador de pagamento à vista com desconto ou parcelado em 12x.
8. **Prova Social com Badges do Tracker.gg:**
   - Depoimentos com dados de evolução de elo (Antes vs Depois) e win streaks.
9. **Modal Tático de Ingressão / Lead Capture:**
   - Formulário com coleta de Riot ID, Discord e Elo, aplicação de cupom com desconto (`RADIANTE10`) e celebração visual.
