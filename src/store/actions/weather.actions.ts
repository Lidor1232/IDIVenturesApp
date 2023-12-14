import {IWeatherUnits} from '../../utills/types';

export const WEATHER_SET_UNITS = 'WEATHER_SET_UNITS';

export function weatherSetUnits(data: {units: IWeatherUnits}) {
  return {
    type: WEATHER_SET_UNITS,
    payload: data,
  };
}
