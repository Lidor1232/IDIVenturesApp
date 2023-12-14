import React, {FC, useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {onGetIsActive, onPress} from './ImperialWeatherUnitButton.controller';
import {WeatherUnitButton} from '../UI/WeatherUnitButton/WeatherUnitButton';

interface IProps {}

export const ImperialWeatherUnitButton: FC<IProps> = React.memo(({}) => {
  const weatherUnits = useSelector(
    (state: IRootState) => state.weather.units,
    shallowEqual,
  );

  const isActive = useMemo(
    () =>
      onGetIsActive({
        weatherUnits,
      }),
    [weatherUnits],
  );

  return (
    <WeatherUnitButton onPress={onPress} isActive={isActive}>
      Imperial
    </WeatherUnitButton>
  );
});
