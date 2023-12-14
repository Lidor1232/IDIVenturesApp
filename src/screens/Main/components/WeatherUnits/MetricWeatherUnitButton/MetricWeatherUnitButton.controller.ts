import {IWeatherUnits, metric} from '../../../../../utills/types';
import {store} from '../../../../../store/store';
import {weatherSetUnits} from '../../../../../store/actions/weather.actions';

export function onGetIsActive({
  weatherUnits,
}: {
  weatherUnits: IWeatherUnits;
}): boolean {
  return weatherUnits === metric;
}

export function onPress(): void {
  store.dispatch(
    weatherSetUnits({
      units: metric,
    }),
  );
}
