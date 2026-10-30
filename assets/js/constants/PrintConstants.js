/**
 * Constants used for the printing of the page with the print button.
 */
export class PrintConstants {
  /**
   * Selector for the articles (chapters) of a page.
   */
  static articleSelector = '.article';

  /**
   * CSS class of an article that is higher than a printed page: only these articles may break across pages.
   */
  static breakableArticleClass = 'article--breakable';

  /**
   * CSS class set on the root element while the articles are measured. It gives the content the width
   * and the layout it has on a printed page.
   */
  static measuringClass = 'print-measuring';

  /**
   * Printable height of a page: A4 (297mm) minus the top and bottom margins of the print style (2 x 20mm).
   */
  static printableHeight = '257mm';
}
