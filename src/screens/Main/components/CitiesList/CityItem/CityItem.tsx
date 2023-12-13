import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ICity} from '../../../../../utills/types';

interface IProps {
  item: ICity;
}

export const CityItem: FC<IProps> = React.memo(({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.cityName}>City name: {item.name}</Text>
        <Text style={styles.countryName}>Country name: {item.country}</Text>
        <Text style={styles.description}>
          Population: {item.population} in coordinates {item.latitude},
          {item.longitude}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '50%',
    marginBottom: 40,
  },
  contentContainer: {},
  cityName: {
    textAlign: 'center',
    marginBottom: 12,
  },
  countryName: {
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    textAlign: 'center',
  },
});
