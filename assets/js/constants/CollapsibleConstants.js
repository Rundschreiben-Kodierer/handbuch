/**
 * The `CollapsibleConstants` class serves as a centralized repository for constants used
 * within the collapsible components. This includes attributes, selectors, and CSS class names
 * relevant to the operation and styling of collapsible blocks and their grouping controls.
 */
export class CollapsibleConstants {

  /**
   * The attribute name used to denote the group a collapsible block belongs to.
   * Collapsible blocks with the same group ID can be controlled together.
   */
  static groupIdAttribute = 'group-id';

  /**
   * The attribute name for specifying the text to be displayed when a collapsible block
   * is in its collapsed state.
   */
  static collapsedTextAttribute = 'collapsed-text';

  /**
   * The attribute name for specifying the text to be shown when a collapsible block
   * is in its expanded state.
   */
  static expandedTextAttribute = 'expanded-text';

  /**
   * The CSS selector for identifying collapsible block elements in the DOM.
   * This is used to apply JavaScript behaviors and styles dynamically.
   */
  static collapsibleBlockSelector = '.collapsible-block';

  /**
   * The CSS selector for identifying elements that act as commands to control
   * the visibility of entire groups of collapsible blocks.
   */
  static collapsibleGroupCommandSelector = '.collapsible-group-command';

  /**
   * The CSS class name for the icon indicating that a collapsible block can be expanded.
   * Typically, this represents a downward pointing chevron or arrow.
   */
  static expandIconClass = 'fa-chevron-down';

  /**
   * The CSS class name for the icon indicating that a collapsible block can be collapsed.
   * Typically, this represents a rightward pointing chevron or arrow.
   */
  static collapseIconClass = 'fa-chevron-right';

  /**
   * The CSS class name allowing to apply a `padding-bottom` of 20px
   */
  static paddingBottomClass = 'padding-bottom-20';
}