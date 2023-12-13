import React, {FC, useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {onGetActiveFilterPage} from './FiltersPage.controller';

interface IProps {}

export const FiltersPage: FC<IProps> = React.memo(({}) => {
  const activeFilterOption = useSelector(
    (state: IRootState) =>
      state.main.modals.filterCitiesModal.activeFilterOption,
    shallowEqual,
  );

  const ACTIVE_PAGE_NODE = useMemo(
    () =>
      onGetActiveFilterPage({
        activeFilterOption,
      }),
    [activeFilterOption],
  );

  return <>{ACTIVE_PAGE_NODE}</>;
});
