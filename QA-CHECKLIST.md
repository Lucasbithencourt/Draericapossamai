# QA — Checklist Final (Dra. Érica Possamai LP)

Verificação realizada antes da apresentação final. Todos os itens testados em servidor local
(`python3 -m http.server`) e via inspeção de código.

| # | Item | Status |
|---|------|--------|
| 1 | Os 4 links `wa.me` apontam para `554899569826` com mensagem pré-preenchida válida | ✅ |
| 2 | Nenhum texto menciona preço, promoção ou condição de pagamento não confirmada | ✅ |
| 3 | Os 2 depoimentos batem com o texto original do Doctoralia | ✅ (ver nota) |
| 4 | Sem overflow horizontal em 375px, 768px e 1440px | ✅ |
| 5 | Mapa embed carrega e aponta para o endereço correto | ✅ |
| 6 | Nenhum link quebrado (interno ou externo) | ✅ |
| 7 | `meta robots` está como `noindex, nofollow` | ✅ |
| 8 | Site funciona sem JavaScript (progressive enhancement) | ✅ |

---

## Detalhamento

### 1. Links WhatsApp ✅
Os 4 CTAs (header, hero, CTA final e botão flutuante) usam exatamente:
`https://wa.me/554899569826?text=Olá, Dra. Érica! Gostaria de agendar uma avaliação de ortodontia.`
Verificado via `grep`: 4 ocorrências idênticas, número e mensagem corretos.

### 2. Sem preço/promoção ✅
Busca por "preço / promoção / desconto / R$ / grátis": **nenhuma ocorrência**.
As menções a pagamento dizem apenas "formas de pagamento facilitadas, apresentadas na avaliação".

### 3. Depoimentos ✅ (com nota)
- **Miriana Borghezan Gonçalves:** idêntico ao original, palavra por palavra.
- **Karine Rodrigues:** idêntico, com uma única normalização de formatação autorizada na
  Etapa 1 — "Dr Erica" → "Dra. Érica" (título/acentuação do nome). O restante é palavra por palavra.
- Ambos exibem "Avaliação verificada no Doctoralia". Nenhum depoimento fictício foi adicionado.

### 4. Overflow horizontal ✅
Medido `document.documentElement.scrollWidth` vs `window.innerWidth`:
- 375px → 375 / 375, sem overflow
- 768px → 768 / 768, sem overflow
- 1440px → 1440 / 1440, sem overflow
`overflow-x: hidden` no `body` como salvaguarda adicional.

### 5. Mapa ✅
`<iframe>` do Google Maps embed público (sem API key), com `loading="lazy"` e `title` descritivo.
`src` contém "Araranguá" e "88801-600" — endereço correto (Rua Araranguá, 35, Centro, Criciúma - SC).

### 6. Links ✅
5 links no total: 4 `wa.me` + 1 Instagram (`instagram.com/ericapossamaid`).
Nenhum `href` vazio, nenhum `href="#"` órfão, nenhum link interno apontando para id inexistente.

### 7. Meta robots ✅
`<meta name="robots" content="noindex, nofollow">` presente — protótipo **não** será indexado
pelo Google até aprovação da profissional.

### 8. Funciona sem JavaScript ✅
Progressive enhancement por design:
- A classe `.reveal` (que oculta para animar) é adicionada **pelo `script.js`** — sem JS, nada fica oculto.
- FAQ usa `<details>/<summary>` nativos (abrem/fecham sem JS).
- Mapa (`<iframe>`) e todos os CTAs funcionam sem JS.
- Smooth scroll é apenas um aprimoramento; a navegação por âncora funciona sem ele.

---

## SEO / Performance / Acessibilidade (itens desta etapa)

- ✅ `<html lang="pt-BR">`, `<title>` e `<meta description>` (≤155 caracteres).
- ✅ Open Graph (4 tags) + Twitter Card (3 tags) para compartilhamento.
- ✅ Favicon SVG placeholder ("EP" em sálvia-escuro) — comentado para troca por logo real.
- ✅ Dados estruturados JSON-LD (`Dentist`): nome, endereço real, telefone (WhatsApp).
  `priceRange` e `openingHours` **omitidos** (não confirmados).
- ✅ `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`; `display=swap` ativo.
- ✅ `script.js` com `defer`, carregado no fim do `<body>`.
- ✅ Botão flutuante com `aria-label="Agendar avaliação pelo WhatsApp"`; SVG com `aria-hidden="true"`.
- ✅ Ícones decorativos dos cards são pseudo-elementos CSS (não expostos à árvore de acessibilidade).
- ✅ Foco de teclado visível: `:focus-visible` com outline sálvia-escuro (nativo não removido).
- ✅ **Contraste (todos AA ≥ 4.5:1):**
  - Texto branco sobre botão `#5C6B45`: **5.76:1**
  - CTA final (parágrafo off-white sobre sálvia-escuro): **4.9:1**
  - Corpo (`#2B2A26` sobre `#FAF8F3`): **13.53:1**
  - Texto secundário (`#6B6862`): **5.23:1** (sobre off-white) / **5.55:1** (sobre card branco)
  - Rodapé (off-white sobre carvão): **11.21:1**
  - **Ajuste feito no QA:** o link do rodapé estava em sálvia `#7C8B5F` sobre carvão = 3.91:1
    (abaixo de AA para texto normal). Alterado para off-white sublinhado (**11.21:1**), com
    sálvia no hover. Nenhuma cor da paleta foi redefinida.

## Observações
- Nenhum `<img>` real existe ainda — apenas placeholders em comentário (`<!-- FOTO: ... -->`),
  que serão substituídos com `alt` descritivo e `loading="lazy"` quando as fotos chegarem.
- `og:image` ainda pendente (comentado no `<head>`): adicionar imagem 1200×630 antes do site oficial.
