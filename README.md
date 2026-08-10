# Landing Page — Dra. Érica Possamai | Ortodontia e Ortopedia

> ⚠️ **Protótipo de prospecção comercial — não é o site oficial da profissional.**

Protótipo de landing page de alta conversão, com foco em captação de leads via WhatsApp,
para a Dra. Érica Possamai Ducioni (Ortodontia e Ortopedia Funcional dos Maxilares — Criciúma/SC).

## Arquivos

| Arquivo      | Descrição                                              |
|--------------|--------------------------------------------------------|
| `index.html` | Estrutura e conteúdo (HTML5 semântico)                 |
| `style.css`  | Identidade visual + responsividade                     |
| `script.js`  | Micro-interações (fade-in, smooth scroll) — sem libs   |

## Como rodar localmente (recomendado)

Abrir o `index.html` direto pelo navegador (`file://`) **não é o ideal**: as
fontes do Google Fonts, o mapa embed e alguns recursos podem não carregar
corretamente por restrições de segurança do protocolo de arquivo. Use um
servidor local simples.

### Opção 1 — Python (já vem no macOS)

```bash
cd "Dra. Érica Possamai LP"
python3 -m http.server 8000
```

Depois acesse: <http://localhost:8000>

### Opção 2 — Node.js (npx, sem instalar nada)

```bash
cd "Dra. Érica Possamai LP"
npx serve
```

O `serve` mostra a URL local no terminal (geralmente <http://localhost:3000>).

Para parar o servidor, pressione `Ctrl + C` no terminal.

## Observações

- **WhatsApp:** todos os CTAs e o botão flutuante apontam para
  `wa.me/554899569826` com mensagem pré-preenchida.
- **Mapa:** usa o embed público do Google Maps (sem API key).
- **Acessibilidade:** botões com fundo `#5C6B45` (contraste AA), área de toque
  mínima de 44px, e as animações respeitam `prefers-reduced-motion`.
- **Sem build step:** HTML/CSS/JS puros, sem frameworks.
