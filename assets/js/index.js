import { initializeCollapsibles, initializeClickDisabler, printAllArticles } from './modules';

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', function () {
  initializeCollapsibles();
  initializeClickDisabler();

});

const printButton = document.getElementById('print-button');
if (printButton) {
  printButton.addEventListener('click', printAllArticles);
}
