/* =================================================================
   Dra. Érica Possamai — Landing Page
   Micro-interações mínimas (sem bibliotecas externas).

   Princípio: PROGRESSIVE ENHANCEMENT.
   - A classe .reveal (que começa invisível) é adicionada POR ESTE SCRIPT.
     Assim, se o JS não rodar, nada fica oculto — tudo permanece visível.
   - Respeita prefers-reduced-motion: reduce.
   ================================================================= */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  /* -------------------------------------------------------------
     1) FADE-IN + translateY ao entrar na viewport
     ------------------------------------------------------------- */
  // Elementos que ganham a animação de entrada.
  var revealSelectors = [
    ".hero h1",
    ".hero-sub",
    ".hero .btn-lg",
    ".badge",
    "#sobre p",
    ".card",
    ".step",
    "#resultados h2",
    ".section-lead",
    ".result-card",
    ".results-disclaimer",
    ".rating-note",
    ".testimonial",
    ".faq details",
    "#localizacao address",
    ".map-embed",
    "#cta-final h2",
    "#cta-final p",
    "#cta-final .btn-lg"
  ];

  var targets = document.querySelectorAll(revealSelectors.join(","));

  // Sem suporte a IntersectionObserver ou com reduced-motion:
  // não escondemos nada — o conteúdo fica visível imediatamente.
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    // Nada a fazer: os elementos nunca recebem .reveal, então ficam normais.
  } else {
    // Aplica o estado inicial (invisível) só agora, via JS.
    targets.forEach(function (el) {
      el.classList.add("reveal");
    });

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // anima uma única vez
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------------
     2) Smooth scroll para links internos (âncoras #id)
        (o CSS já faz scroll-behavior: smooth; aqui garantimos o
         comportamento e respeitamos reduced-motion.)
     ------------------------------------------------------------- */
  var internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;

      var destino = document.querySelector(id);
      if (!destino) return;

      e.preventDefault();
      destino.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  });
})();
