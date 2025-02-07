import { ClickDisablerConstants } from '../constants';
import { ClickDisabler } from '../shortcodes';

const disabledElements = [];

/**
 * Initializes the click disabler functionality by selecting all elements
 * that match the disabled element selector and creating a new ClickDisabler
 * instance for each of them.
 *
 * @function
 */
export function initializeClickDisabler() {
  document.querySelectorAll(ClickDisablerConstants.disabledElementSelector).forEach(disabledElement => {
    disabledElements.push(new ClickDisabler(disabledElement));
  });
}