document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    function openAccordionItem(item) {
      const accordionText = item.querySelector('.accordion-text');
      const closeIcon = item.querySelector('.button-close');
      const openIcon = item.querySelector('.button-open');
  
      accordionText.style.display = 'block';
      closeIcon.style.display = 'none';
      openIcon.style.display = 'block';
    }
  
    function closeAccordionItem(item) {
      const accordionText = item.querySelector('.accordion-text');
      const closeIcon = item.querySelector('.button-close');
      const openIcon = item.querySelector('.button-open');
  
      accordionText.style.display = 'none';
      closeIcon.style.display = 'block';
      openIcon.style.display = 'none';
    }
  
    // Ouvrir le premier élément de l'accordéon au chargement
    if (accordionItems.length > 0) {
      openAccordionItem(accordionItems[0]);
    }
  
    accordionItems.forEach(item => {
      const accordionQuestion = item.querySelector('.accordion-question');
  
      accordionQuestion.addEventListener('click', () => {
        const isOpen = item.querySelector('.accordion-text').style.display === 'block';
  
        // Fermer tous les éléments de l'accordéon
        accordionItems.forEach(closeAccordionItem);
  
        // Si l'élément cliqué n'était pas ouvert, l'ouvrir
        if (!isOpen) {
          openAccordionItem(item);
        }
      });
    });
  });