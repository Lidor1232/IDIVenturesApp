import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../store/reducers/combineReducer.reducer';

interface IProps {}

export const CityWeather: FC<IProps> = React.memo(({}) => {
  const weather = useSelector(
    (state: IRootState) => state.cityDetails.requests.weatherRequest.weather,
    shallowEqual,
  );

  return (
    <>
      {weather ? (
        <View>
          <Text style={styles.title}>Weather</Text>
          <Text>Weather: {weather.main.temp}</Text>
        </View>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
});
