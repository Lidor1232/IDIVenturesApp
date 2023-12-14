import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../../../../store/reducers/combineReducer.reducer';
import {onGetIsNoResult} from './NoResults.controller';

interface IProps {}

export const NoResults: FC<IProps> = React.memo(({}) => {
  const searchInput = useSelector(
    (state: IRootState) =>
      state.main.modals.sortCitiesModal.pages.sortByDistancePage.searchInput,
    shallowEqual,
  );

  const isNoResult = useMemo(
    () =>
      onGetIsNoResult({
        searchInput,
      }),
    [searchInput],
  );

  return (
    <>
      {isNoResult ? (
        <View style={styles.container}>
          <Text>No Cities Results</Text>
        </View>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
