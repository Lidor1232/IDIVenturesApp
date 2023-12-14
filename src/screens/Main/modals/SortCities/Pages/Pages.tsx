import React, {FC, useMemo} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../store/reducers/combineReducer.reducer';
import {onGetActivePage} from './Pages.controller';

interface IProps {}

export const Pages: FC<IProps> = React.memo(({}) => {
  const activePage = useSelector(
    (state: IRootState) => state.main.modals.sortCitiesModal.activePage,
    shallowEqual,
  );

  const ACTIVE_PAGE_NODE = useMemo(
    () =>
      onGetActivePage({
        activePage,
      }),
    [activePage],
  );

  return <>{ACTIVE_PAGE_NODE}</>;
});
