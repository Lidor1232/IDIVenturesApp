import React, {FC, useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../store/reducers/combineReducer.reducer';
import {onGetIsActive, onPress} from './FilterByCountryButton.controller';
import {FilterButton} from '../UI/FilterButton/FilterButton';

interface IProps {}

export const FilterByCountryButton: FC<IProps> = React.memo(({}) => {
  const activeFilterOption = useSelector(
    (state: IRootState) =>
      state.main.modals.filterCitiesModal.activeFilterOption,
    shallowEqual,
  );

  const isActive = useMemo(
    () =>
      onGetIsActive({
        activeFilterOption,
      }),
    [activeFilterOption],
  );

  return (
    <FilterButton isActive={isActive} onPress={onPress}>
      Filter by country
    </FilterButton>
  );
});
