import {COLORS} from '../../../../../../../assets/colors/colors';

export function onGetButtonColor({isActive}: {isActive: boolean}): string {
  if (isActive) {
    return COLORS.primary;
  }
  return COLORS.grey;
}
