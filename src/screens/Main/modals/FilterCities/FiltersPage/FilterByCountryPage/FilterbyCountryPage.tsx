import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../../../components/Loader/Loader';
import {Error} from '../../../../../../components/Error/Error';
import {Countries} from './Countries/Countries';

interface IProps {}

export const FilterByCountryPage: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) => state.main.requests.searchCountriesRequest.isLoading,
    shallowEqual,
  );
  const isError = useSelector(
    (state: IRootState) => state.main.requests.searchCountriesRequest.isError,
    shallowEqual,
  );

  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : isError ? <Error /> : <Countries />}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
