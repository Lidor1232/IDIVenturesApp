import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {ICity} from '../../../../../../utills/types';
import {useNavigation} from '@react-navigation/native';
import {onPress} from './CityItem.controller';

interface IProps {
  item: ICity;
}

export const CityItem: FC<IProps> = React.memo(({item}) => {
  const navigation = useNavigation();

  const _onPress = useCallback(() => {
    onPress({
      item,
      navigation,
    });
  }, [navigation, item]);

  return (
    <Pressable style={styles.container} onPress={_onPress}>
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
