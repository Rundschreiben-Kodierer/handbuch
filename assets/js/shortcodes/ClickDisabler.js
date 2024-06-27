/**
 * @fileOverview
 *
 * @title ClickDisabler.js
 * @description This file includes the implementation of the ClickDisabler class which is used
 * to manage and disable click events on specified DOM elements to prevent any default action and propagation of the event.
 * It also includes the Constants class, which holds constants used across the application.
 *
 * @author Raphaël Capocasale
 * @creationDate 2024-05-06
 * @lastUpdated 2024-05-13
 */

/**
 * Manages the disabling of click events on a specified DOM element.
 */
export class ClickDisabler {
  /**
   * The DOM element to which the click disable functionality is applied.
   * @private
   */
  #disabledElement = null;

  /**
   * Creates an instance of ClickDisabler for the specified `element`.
   * Throws an error if the `element` is null or undefined.
   * @param {HTMLElement} element - The DOM element to disable clicks on.
   * @throws {Error} If the specified `element` is invalid or missing.
   */
  constructor(element) {
    if (!element) {
      throw new Error('Invalid or missing DOM element');
    }
    this.#disabledElement = element;
    this.#initialise();
  }

  /**
   * Initializes the click event handlers to prevent click actions on the `#disabledElement`.
   * @private
   */
  #initialise() {
    this.#disabledElement.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
    });
  }
}
