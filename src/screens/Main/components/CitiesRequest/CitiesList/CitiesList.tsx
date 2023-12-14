import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {onKeyExtractor, onRenderItem} from './CitiesList.controller';
import {NoResults} from './NoResults/NoResults';

interface IProps {}

export const CitiesList: FC<IProps> = React.memo(({}) => {
  const cities = useSelector(
    (state: IRootState) => state.main.requests.citiesRequest.cities,
    shallowEqual,
  );

  return (
    <FlatList
      data={cities}
      renderItem={onRenderItem}
      keyExtractor={onKeyExtractor}
      ListEmptyComponent={NoResults}
    />
  );
});
