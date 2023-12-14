import {combineReducers} from 'redux';
import {
  reducer as deviceReducer,
  IState as IDeviceState,
} from './device.reducer';
import {reducer as mainReducer, IState as IMainState} from './main.reducer';
import {
  reducer as cityDetailsReducer,
  IState as ICityDetailsReducer,
} from './cityDetails.reducer';
import {
  reducer as weatherReducer,
  IState as IWeatherState,
} from './weather.reducer';

export default combineReducers({
  device: deviceReducer,
  main: mainReducer,
  cityDetails: cityDetailsReducer,
  weather: weatherReducer,
});

export interface IRootState {
  device: IDeviceState;
  main: IMainState;
  cityDetails: ICityDetailsReducer;
  weather: IWeatherState;
}
