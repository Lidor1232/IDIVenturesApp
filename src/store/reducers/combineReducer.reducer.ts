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

export default combineReducers({
  device: deviceReducer,
  main: mainReducer,
  cityDetails: cityDetailsReducer,
});

export interface IRootState {
  device: IDeviceState;
  main: IMainState;
  cityDetails: ICityDetailsReducer;
}
