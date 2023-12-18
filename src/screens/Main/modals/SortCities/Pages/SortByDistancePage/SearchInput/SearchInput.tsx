import {StyleSheet, TextInput} from 'react-native';
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../../store/reducers/combineReducer.reducer';
import {onChangeText} from './SearchInput.controller';
import {COLORS} from '../../../../../../../assets/colors/colors';

interface IProps {}

export const SearchInput: FC<IProps> = React.memo(({}) => {
  const searchInput = useSelector(
    (state: IRootState) =>
      state.main.modals.sortCitiesModal.pages.sortByDistancePage.searchInput,
    shallowEqual,
  );

  return (
    <TextInput
      style={styles.input}
      value={searchInput}
      onChangeText={onChangeText}
      placeholder={'Search...'}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: COLORS.grey,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: COLORS.black,
  },
});
