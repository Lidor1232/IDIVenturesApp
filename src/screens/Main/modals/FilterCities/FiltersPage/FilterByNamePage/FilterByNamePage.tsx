import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {FilterByNameButton} from './FilterByNameButton/FilterByNameButton';

interface IProps {}

export const FilterByNamePage: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <FilterByNameButton />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
