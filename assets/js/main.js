/* ============================================================
   DUSVAL — comportements
   révélations au défilement · état de navigation
   ============================================================ */

(function () {
  "use strict";

  // --- Révélations au défilement ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observateur = new IntersectionObserver(
      function (entrees) {
        entrees.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observateur.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { observateur.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  // --- État de la navigation au défilement ---
  var nav = document.getElementById("nav");
  if (nav) {
    var maj = function () {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", maj, { passive: true });
    maj();
  }
})();
