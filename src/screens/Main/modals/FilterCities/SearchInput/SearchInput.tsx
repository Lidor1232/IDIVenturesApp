import {StyleSheet, TextInput} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {onChangeText} from './SearchInput.controller';

interface IProps {}

export const SearchInput: FC<IProps> = React.memo(({}) => {
  const searchInput = useSelector(
    (state: IRootState) => state.main.modals.filterCitiesModal.searchInput,
    shallowEqual,
  );

  return (
    <TextInput
      value={searchInput}
      onChangeText={onChangeText}
      style={styles.searchInput}
      placeholder={'Search...'}
    />
  );
});

const styles = StyleSheet.create({
  searchInput: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
