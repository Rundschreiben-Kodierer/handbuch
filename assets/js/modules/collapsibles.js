import { CollapsibleConstants } from '../constants';
import { CollapsibleGroupCommand, CollapsibleBlock } from '../shortcodes';

const collapsibleBlocks = [];
const collapsibleGroupCommands = [];

/**
 * Initializes all the collapsibles.
 */
export function initializeCollapsibles() {
  document.querySelectorAll(CollapsibleConstants.collapsibleBlockSelector).forEach(collapsibleBlockElement => {
    collapsibleBlocks.push(new CollapsibleBlock(collapsibleBlockElement));
  });

  document.querySelectorAll(CollapsibleConstants.collapsibleGroupCommandSelector).forEach(collapsibleGroupCommandElement => {
    const groupId = collapsibleGroupCommandElement.getAttribute(CollapsibleConstants.groupIdAttribute);
    const filteredCollapsibleBlocks = collapsibleBlocks.filter(item => item.groupId === groupId);
    collapsibleGroupCommands.push(new CollapsibleGroupCommand(collapsibleGroupCommandElement, filteredCollapsibleBlocks));
  });
}

/**
 * Opens all collapsible blocks.
 */
export function openAllBlocks() {
  collapsibleGroupCommands.forEach(groupCommand => {
    groupCommand.expandAll();
  });
}

/**
 * Closes all collapsible blocks.
 */
export function closeAllBlocks() {
  collapsibleGroupCommands.forEach(groupCommand => {
    groupCommand.collapseAll();
  });
}