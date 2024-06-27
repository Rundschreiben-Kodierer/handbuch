/**
 * @fileOverview Implements the dynamic behavior of collapsible blocks
 * within a web application. This script includes classes and initialization logic to manage collapsible
 * elements on the page, allowing them to expand or collapse in response to user interactions.
 *
 * @title CollapsibleBlock.js
 * @description This script is designed to enhance the interactivity of a web page by introducing collapsible blocks
 * that allow users to easily show or hide content. It defines `CollapsibleBlock` class
 * which handles the dynamic behavior of individual collapsible elements.
 *
 * `CollapsibleBlock` manages the expansion and collapse of content areas, responding to user clicks. It controls
 * the display of content and changes in the appearance of its associated toggle button and icon, based on its current
 * state (expanded or collapsed). Each collapsible block can operate independently, or it can be associated with a
 * group of blocks for synchronized behavior.
 *
 * @author Raphaël Capocasale
 * @creationDate 2024-04-11
 * @lastUpdated 2024-05-13
 *
 * @notes Example Usage in a Hugo/Docsy Site:
 * ```html
 * A title - {{<collapsibleGroupCommand groupId="the_group_id">}}
 *
 * {{<collapsibleBlock groupId="the_group_id">}}
 * A diam maecenas sed enim ut. Nulla facilisi morbi tempus iaculis urna id. Arcu dui vivamus arcu felis bibendum ut tristique.
 * Odio euismod lacinia at quis. Ipsum suspendisse ultrices gravida dictum fusce ut. Tempus egestas sed sed risus pretium quam vulputate.
 * Massa vitae tortor condimentum lacinia quis vel. Interdum varius sit amet mattis vulputate enim nulla aliquet. Amet dictum sit amet justo.
 * {{</collapsibleBlock>}}
 */

import { CollapsibleConstants } from '../constants';

/**
 * Represents a collapsible block component, managing its state (expanded/collapsed),
 * content, and interactions. This class relies on specific DOM structure and CSS classes
 * to control the visibility and appearance of the collapsible content and its toggle button.
 */
export class CollapsibleBlock {
  // CSS class to apply to content when the block is expanded.
  static #expandedDisplayClass = 'block';
  // CSS class to apply to content when the block is collapsed.
  static #collapsedDisplayClass = 'none';
  // Selector for the icon element within the collapsible block.
  static #collapsibleBlockIconSelector = '.collapsible-block__icon';
  // Selector for the button element that toggles the collapsible block.
  static #collapsibleBlockButtonSelector = '.collapsible-block__button';
  // Selector for the content element within the collapsible block.
  static #collapsibleBlockContentSelector = '.collapsible-block__content';

  // The root element of the collapsible block component.
  #rootElement = null;
  // The group ID attribute value.
  #groupId = null;
  // The content element that is shown/hidden.
  #contentElement = null;
  // The icon element that indicates the current state (expanded/collapsed).
  #iconElement = null;
  // The button element that toggles the collapsible state.
  #buttonElement = null;
  // Indicates whether the block is currently expanded.
  #isExpanded = false;
  // The text to display on the toggle button when the block is collapsed.
  #collapsedText = null;
  // The text to display on the toggle button when the block is expanded.
  #expandedText = null;

  /**
   * Initializes a new instance of the CollapsibleBlock class.
   * @param {Element} element The DOM element that acts as the root of the collapsible block.
   * @throws {Error} If the element is invalid or essential attributes are missing.
   */
  constructor(element) {
    if (!element || !(element instanceof Element)) {
      throw new Error('Invalid or missing DOM element');
    }
    this.#rootElement = element;

    this.#groupId = this.#rootElement.getAttribute(CollapsibleConstants.groupIdAttribute);
    if (this.#groupId === null) {
      throw new Error('Root Element does not have a valid \'group-id\' attribute.');
    }

    this.#iconElement = this.#rootElement.querySelector(CollapsibleBlock.#collapsibleBlockIconSelector);
    if (this.#iconElement === null) {
      throw new Error('Root Element parent does not have an Icon element.');
    }

    this.#buttonElement = this.#rootElement.querySelector(CollapsibleBlock.#collapsibleBlockButtonSelector);
    if (this.#buttonElement === null) {
      throw new Error('Root Element parent does not have a Button element.');
    }

    this.#contentElement = this.#rootElement.querySelector(CollapsibleBlock.#collapsibleBlockContentSelector);
    if (this.#contentElement === null) {
      throw new Error('Root Element parent does not have a Content element.');
    }

    this.#collapsedText = this.#rootElement.getAttribute(CollapsibleConstants.collapsedTextAttribute);
    if (this.#collapsedText === null) {
      throw new Error('Root element does not have a collapsed text attribute.');
    }

    this.#expandedText = this.#rootElement.getAttribute(CollapsibleConstants.expandedTextAttribute);
    if (this.#expandedText === null) {
      throw new Error('Root element does not have an expanded text attribute.');
    }

    this.#initialize();
  }

  /**
   * Sets up the initial state of the collapsible block and registers event listeners.
   * By default, the block is initialized in a collapsed state.
   */
  #initialize() {
    this.#buttonElement.addEventListener('click', () => this.toggle());
    this.#iconElement.addEventListener('click', () => this.toggle());
    this.collapse();
  }

  /**
   * Gets the group ID of the collapsible block, if it is part of a group.
   * @returns {string|null} The group ID, or null if not part of a group.
   */
  get groupId() {
    return this.#groupId;
  }

  /**
   * Toggles the collapsible block between its expanded and collapsed states.
   */
  toggle() {
    if(this.#isExpanded){
      this.collapse();
    } else {
      this.expand();
    }
  }

  /**
   * Expands the collapsible block, showing its content and updating the toggle button and icon.
   */
  expand(){
    this.#isExpanded = true;
    this.#buttonElement.textContent  = this.#expandedText;
    this.#contentElement.style.display = CollapsibleBlock.#expandedDisplayClass;
    this.#iconElement.classList.remove(CollapsibleConstants.collapseIconClass);
    this.#iconElement.classList.add(CollapsibleConstants.expandIconClass);
    this.#buttonElement.classList.remove(CollapsibleConstants.paddingBottomClass);
  }

  /**
   * Collapses the collapsible block, hiding its content and updating the toggle button and icon.
   */
  collapse(){
    this.#isExpanded = false;
    this.#buttonElement.textContent  = this.#collapsedText;
    this.#contentElement.style.display = CollapsibleBlock.#collapsedDisplayClass;
    this.#iconElement.classList.remove(CollapsibleConstants.expandIconClass);
    this.#iconElement.classList.add(CollapsibleConstants.collapseIconClass);
    this.#buttonElement.classList.add(CollapsibleConstants.paddingBottomClass);
  }
}
