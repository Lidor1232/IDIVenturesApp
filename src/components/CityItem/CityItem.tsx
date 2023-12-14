import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ICity} from '../../utills/types';

interface IProps {
  item: ICity;
  onPress: () => void;
}

export const CityItem: FC<IProps> = React.memo(({item, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.contentContainer}>
        <Text style={styles.cityName}>City name: {item.name}</Text>
        <Text style={styles.countryName}>Country name: {item.country}</Text>
        <Text style={styles.description}>
          Population: {item.population} in coordinates {item.latitude},
          {item.longitude}
        </Text>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  contentContainer: {
    borderWidth: 1,
  },
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
