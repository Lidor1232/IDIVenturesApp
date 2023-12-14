import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {FilterByCountryButton} from './FilterByCountryButton/FilterByCountryButton';
import {FilterByNameButton} from './FilterByNameButton/FilterByNameButton';

interface IProps {}

export const FilterButtons: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <FilterByNameButton />
      <FilterByCountryButton />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '45%',
  },
});
