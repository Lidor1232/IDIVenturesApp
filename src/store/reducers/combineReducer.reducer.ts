import {combineReducers} from 'redux';
import {
  reducer as deviceReducer,
  IState as IDeviceState,
} from './device.reducer';
import {reducer as mainReducer, IState as IMainState} from './main.reducer';

export default combineReducers({
  device: deviceReducer,
  main: mainReducer,
});

export interface IRootState {
  device: IDeviceState;
  main: IMainState;
}
