import React, {FC} from 'react';
import {Button} from '../../../../../../../components/Button/Button';
import {COLORS} from '../../../../../../../assets/colors/colors';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../../store/reducers/combineReducer.reducer';
import {onPress} from './FilterByNameButton.controller';

interface IProps {}

export const FilterByNameButton: FC<IProps> = React.memo(({}) => {
  const searchInput = useSelector(
    (state: IRootState) => state.main.modals.filterCitiesModal.searchInput,
    shallowEqual,
  );

  return (
    <Button color={COLORS.grey} onPress={onPress}>
      {`Choose filter by name: "${searchInput}"`}
    </Button>
  );
});
