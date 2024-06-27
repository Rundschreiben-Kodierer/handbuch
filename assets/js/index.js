import { CollapsibleConstants, ClickDisablerConstants } from './constants';
import { ClickDisabler, CollapsibleGroupCommand, CollapsibleBlock } from './shortcodes';

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script.
document.addEventListener('DOMContentLoaded', function () {
  // An array to hold all the CollapsibleBlock instances.
  const collapsibleBlocks = [];
  // Query the DOM for elements matching the collapsible block selector.
  document.querySelectorAll(CollapsibleConstants.collapsibleBlockSelector).forEach(collapsibleBlockElement => {
    collapsibleBlocks.push(new CollapsibleBlock(collapsibleBlockElement));
  });

  // An array to hold all the CollapsibleGroupCommand instances.
  const collapsibleGroupCommands = [];
  // Query the DOM for elements matching the collapsible group command selector.
  document.querySelectorAll(CollapsibleConstants.collapsibleGroupCommandSelector).forEach(collapsibleGroupCommandElement => {
    // Extract the groupId attribute value to identify which group the command controls.
    const groupId = collapsibleGroupCommandElement.getAttribute(CollapsibleConstants.groupIdAttribute);
    // Filter the collapsibleBlocks array to get only those blocks that belong to the current group.
    const filteredCollapsibleBlocks = collapsibleBlocks.filter(item => item.groupId === groupId);
    // Create a new CollapsibleGroupCommand instance with the filtered blocks and add it to the array.
    collapsibleGroupCommands.push(new CollapsibleGroupCommand(collapsibleGroupCommandElement, filteredCollapsibleBlocks));
  });

  const disabledElements = [];
  document.querySelectorAll(ClickDisablerConstants.disabledElementSelector).forEach(disabledElement => {
    disabledElements.push(new ClickDisabler(disabledElement));
  });
});