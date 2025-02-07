import { openAllBlocks, closeAllBlocks } from './collapsibles';

/**
 * Opens all blocks, prints the page, and restores the initial state.
 */
export function printAllArticles() {
  openAllBlocks();

  setTimeout(() => {
    window.print();
    closeAllBlocks();
  }, 500);
}