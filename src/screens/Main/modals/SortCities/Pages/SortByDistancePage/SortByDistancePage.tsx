import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchInput} from './SearchInput/SearchInput';
import {CitiesRequest} from './CitiesRequest/CitiesRequest';

interface IProps {}

export const SortByDistancePage: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <CitiesRequest />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
