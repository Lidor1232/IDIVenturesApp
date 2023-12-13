import {onGetCities} from '../../store/services/main.service';

export function onMount(): void {
  onGetCities({});
}
