import {Pressable, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {ICity} from '../../utills/types';
import {Image} from '../Image/Image';
import {COLORS} from '../../assets/colors/colors';
import {Text} from '../Text/Text';

interface IProps {
  item: ICity;
  onPress: () => void;
}

export const CityItem: FC<IProps> = React.memo(({item, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        resizeMode={'cover'}
        source={{
          uri: 'https://d1x6rln6sla7wg.cloudfront.net/clubs-images/67ff16c7-841b-43b3-928a-d728be45cb4d.jpg',
        }}
      />
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
    color: COLORS.white,
  },
  countryName: {
    textAlign: 'center',
    marginBottom: 12,
    color: COLORS.white,
  },
  description: {
    textAlign: 'center',
    color: COLORS.white,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});
