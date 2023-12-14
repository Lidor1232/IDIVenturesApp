import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {SortByNameButton} from './SortByNameButton/SortByNameButton';
import {SortByDistanceButton} from './SortByDistanceButton/SortByDistanceButton';

interface IProps {}

export const PagesButtons: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <SortByNameButton />
      <SortByDistanceButton />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-evenly',
  },
});
