import {imperial, IWeatherUnits} from '../../../../../utills/types';
import {store} from '../../../../../store/store';
import {weatherSetUnits} from '../../../../../store/actions/weather.actions';

export function onGetIsActive({
  weatherUnits,
}: {
  weatherUnits: IWeatherUnits;
}): boolean {
  return weatherUnits === imperial;
}

export function onPress(): void {
  store.dispatch(
    weatherSetUnits({
      units: imperial,
    }),
  );
}
