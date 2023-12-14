import {COLORS} from '../../../../../../assets/colors/colors';

export function onGetButtonColor({isActive}: {isActive: boolean}): string {
  return isActive ? COLORS.primary : COLORS.grey;
}
