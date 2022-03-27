import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const share: IconLookup = { prefix: 'fas', iconName: 'share' };
export const shareIcon: IconDefinition = findIconDefinition(share);

const edit: IconLookup = { prefix: 'fas', iconName: 'edit' };
export const editIcon: IconDefinition = findIconDefinition(edit);

const trash: IconLookup = { prefix: 'fas', iconName: 'trash' };
export const trashIcon: IconDefinition = findIconDefinition(trash);
