import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {CityWeather} from './CityWeather/CityWeather';
import {Text} from '../../../../../components/Text/Text';

interface IProps {}

export const CityDetails: FC<IProps> = React.memo(({}) => {
  const city = useSelector(
    (state: IRootState) => state.cityDetails.requests.cityRequest.city,
    shallowEqual,
  );

  return (
    <>
      {city ? (
        <View>
          <Text style={styles.title}>Details</Text>
          <Text>City: {city.name}</Text>
          <Text>Country: {city.country}</Text>
          <Text>Population: {city.population}</Text>
          <Text>Latitude: {city.latitude}</Text>
          <Text style={styles.longitudeTitle}>Longitude: {city.longitude}</Text>
          <CityWeather />
        </View>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  longitudeTitle: {
    marginBottom: 40,
  },
  title: {
    marginBottom: 40,
    fontSize: 18,
  },
});
