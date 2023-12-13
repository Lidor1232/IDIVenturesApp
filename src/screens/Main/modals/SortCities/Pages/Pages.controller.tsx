import React, {ReactNode} from 'react';
import {
  ISortCitiesModalActivePage,
  SORT_BY_DISTANCE_PAGE,
  SORT_BY_NAME_PAGE,
} from '../../../../../store/reducers/main.reducer';
import {SortByNamePage} from './SortByNamePage/SortByNamePage';
import {SortByDistancePage} from './SortByDistancePage/SortByDistancePage';

export function onGetActivePage({
  activePage,
}: {
  activePage: ISortCitiesModalActivePage;
}): ReactNode {
  switch (activePage) {
    case SORT_BY_NAME_PAGE:
      return <SortByNamePage />;

    case SORT_BY_DISTANCE_PAGE:
      return <SortByDistancePage />;
  }
}
