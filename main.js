const accordionQuestionButtons = document.querySelectorAll(
  ".accordion__question"
);

accordionQuestionButtons.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    // Sélectionner la réponse associée
    const accordionResponse = bouton.nextElementSibling;

    // Toggle la classe cachée pour afficher/masquer la réponse
    accordionResponse.classList.toggle("accordion__response--hidden");

    // Changer l'état de l'icône
    const iconPlus = bouton.querySelector(".accordion__icon--plus");
    const iconMinus = bouton.querySelector(".accordion__icon--minus");
    iconPlus.classList.toggle("hidden");
    iconMinus.classList.toggle("hidden");

    // Mise à jour de l'attribut aria-expanded
    const isExpanded = bouton.getAttribute("aria-expanded") === "true"; // Vérifier l'état actuel
    bouton.setAttribute("aria-expanded", !isExpanded); // Toggle true/false
  });
});
