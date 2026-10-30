import { openAllBlocks, closeAllBlocks } from './collapsibles';
import { PrintConstants } from '../constants';

/**
 * Opens all blocks, marks the articles that are higher than a printed page, prints the page,
 * and restores the initial state.
 */
export function printAllArticles() {
  openAllBlocks();

  setTimeout(() => {
    const breakableArticles = markBreakableArticles();
    window.print();
    breakableArticles.forEach(article => article.classList.remove(PrintConstants.breakableArticleClass));
    closeAllBlocks();
  }, 500);
}

/**
 * Marks the articles that are higher than a printed page, so that only these articles break across pages,
 * and the shorter ones start on the next page when they don't fit at the bottom of a page.
 * The heights are measured with the content at the printable width of a page: it's an approximation
 * of the print layout, which isn't available before the print dialog.
 * @returns {Element[]} The marked articles.
 */
function markBreakableArticles() {
  const root = document.documentElement;
  root.classList.add(PrintConstants.measuringClass);
  const pageHeight = toPixels(PrintConstants.printableHeight);

  const breakableArticles = [...document.querySelectorAll(PrintConstants.articleSelector)]
    .filter(article => article.getBoundingClientRect().height > pageHeight);
  breakableArticles.forEach(article => article.classList.add(PrintConstants.breakableArticleClass));

  root.classList.remove(PrintConstants.measuringClass);
  return breakableArticles;
}

/**
 * Converts a CSS length (e.g. '257mm') to pixels.
 * @param {string} length The CSS length.
 * @returns {number} The length in pixels.
 */
function toPixels(length) {
  const element = document.createElement('div');
  element.style.cssText = `position: absolute; visibility: hidden; height: ${length};`;
  document.body.appendChild(element);
  const pixels = element.getBoundingClientRect().height;
  element.remove();
  return pixels;
}
