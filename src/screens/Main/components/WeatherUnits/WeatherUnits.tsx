import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {ImperialWeatherUnitButton} from './ImperialWeatherUnitButton/ImperialWeatherUnitButton';
import {MetricWeatherUnitButton} from './MetricWeatherUnitButton/MetricWeatherUnitButton';
import {Text} from '../../../../components/Text/Text';

interface IProps {}

export const WeatherUnits: FC<IProps> = React.memo(({}) => {
  const weatherUnits = useSelector(
    (state: IRootState) => state.weather.units,
    shallowEqual,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current weather units: {weatherUnits}</Text>
      <View style={styles.weatherButtonsContainer}>
        <ImperialWeatherUnitButton />
        <MetricWeatherUnitButton />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  weatherButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
