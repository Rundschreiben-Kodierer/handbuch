/**
 * @fileOverview Implements the dynamic behavior of collapsible group commands
 * within a web application. This script includes the class to manage a group of collapsible
 * elements on the page.
 *
 * @title CollapsibleGroupCommand.js
 * @description This script is designed to enhance the interactivity of a web page by introducing group command.
 * It defines a class `CollapsibleGroupCommand`, which handles groups of collapsible elements.
 *
 * `CollapsibleGroupCommand` provides a mechanism to control multiple `CollapsibleBlock` instances as a group. With
 * a single action, users can expand or collapse all blocks within the same group, enhancing the user experience
 * by offering a quick way to show or hide grouped information.
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
 * Represents a controller for a group of `CollapsibleBlock` instances,
 * providing a unified command to collapse or expand all blocks within the group.
 * This class interacts with specific DOM elements to provide group-wide toggle functionality.
 */
export class CollapsibleGroupCommand {
  // Selector for the button element within the group command component.
  static #collapsibleGroupCommandButtonSelector = '.collapsible-group-command__button';
  // Selector for the icon element within the group command component.
  static #collapsibleGroupCommandIconSelector = '.collapsible-group-command__icon';

  // The root element of the collapsible group command component.
  #rootElement = null;
  // The button element that toggles the state of all collapsible blocks in the group.
  #buttonElement = null;
  // An array of CollapsibleBlock instances that are controlled by this command.
  #groupBlocks = [];
  // Indicates whether the blocks in the group are currently expanded.
  #isExpanded = false;
  // The icon element that indicates the current state (expanded/collapsed) of the group.
  #iconElement = null;
  // The text to display on the toggle button when the group is collapsed.
  #collapsedText = null;
  // The text to display on the toggle button when the group is expanded.
  #expandedText = null;

  /**
   * Initializes a new instance of the CollapsibleGroupCommand class.
   * @param {Element} element The DOM element that acts as the root of the collapsible group command.
   * @param {Array<CollapsibleBlock>} groupObjects An array of CollapsibleBlock instances to be controlled.
   * @throws {Error} If the element is invalid, missing, or if essential attributes are missing.
   */
  constructor(element, groupObjects) {
    if (!element) {
      throw new Error('Invalid or missing DOM element');
    }
    this.#rootElement = element;

    if (groupObjects === null) {
      throw new Error('groupObjects parameter must be not null');
    }
    this.#groupBlocks = groupObjects;

    this.#buttonElement = this.#rootElement.querySelector(CollapsibleGroupCommand.#collapsibleGroupCommandButtonSelector);
    if (this.#buttonElement === null) {
      throw new Error('Root element does not have a button element.');
    }

    this.#iconElement = this.#rootElement.querySelector(CollapsibleGroupCommand.#collapsibleGroupCommandIconSelector);
    if (this.#iconElement === null) {
      throw new Error('Root element does not have an icon element.');
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
   * Sets up the initial state of the collapsible group command and registers event listeners.
   * By default, the group is initialized in a collapsed state.
   */
  #initialize() {
    this.#buttonElement.addEventListener('click', () => this.toggleAll());
    this.#iconElement.addEventListener('click', () => this.toggleAll());
    this.collapseAll();
  }

  /**
   * Toggles the state of all collapsible blocks in the group between expanded and collapsed.
   */
  toggleAll() {
    if(this.#isExpanded) {
      this.collapseAll();
    } else {
      this.expandAll();
    }
  }

  /**
   * Collapses all collapsible blocks in the group, updates the toggle button and icon to represent the collapsed state.
   */
  collapseAll() {
    this.#isExpanded = false;
    this.#buttonElement.textContent  = this.#collapsedText;
    this.#groupBlocks.forEach(item => item.collapse());
    this.#iconElement.classList.remove(CollapsibleConstants.expandIconClass);
    this.#iconElement.classList.add(CollapsibleConstants.collapseIconClass);
  }

  /**
   * Expands all collapsible blocks in the group, updates the toggle button and icon to represent the expanded state.
   */
  expandAll() {
    this.#isExpanded = true;
    this.#buttonElement.textContent  = this.#expandedText;
    this.#groupBlocks.forEach(item => item.expand());
    this.#iconElement.classList.remove(CollapsibleConstants.collapseIconClass);
    this.#iconElement.classList.add(CollapsibleConstants.expandIconClass);
  }
}
