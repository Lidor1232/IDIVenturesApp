import {IAction, IWeatherUnits} from '../../utills/types';
import {WEATHER_SET_UNITS} from '../actions/weather.actions';

export interface IState {
  units: IWeatherUnits;
}

const initialState: IState = {
  units: 'metric',
};

export function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case WEATHER_SET_UNITS:
      return {
        ...state,
        units: action.payload.units,
      };

    default:
      return state;
  }
}
