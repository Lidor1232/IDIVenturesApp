import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../../store/reducers/combineReducer.reducer';
import {onKeyExtractor, onRenderItem} from './Countries.controller';

interface IProps {}

export const Countries: FC<IProps> = React.memo(({}) => {
  const countries = useSelector(
    (state: IRootState) => state.main.requests.searchCountriesRequest.countries,
    shallowEqual,
  );

  return (
    <FlatList
      data={countries}
      renderItem={onRenderItem}
      keyExtractor={onKeyExtractor}
    />
  );
});
