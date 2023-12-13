import React from 'react';
import {
  FILTER_BY_COUNTRY,
  FILTER_BY_NAME,
  IFilterOption,
} from '../../../../../store/reducers/main.reducer';
import {FilterByCountryPage} from './FilterByCountryPage/FilterbyCountryPage';
import {FilterByNamePage} from './FilterByNamePage/FilterByNamePage';

export function onGetActiveFilterPage({
  activeFilterOption,
}: {
  activeFilterOption: IFilterOption;
}) {
  switch (activeFilterOption) {
    case FILTER_BY_COUNTRY:
      return <FilterByCountryPage />;

    case FILTER_BY_NAME:
      return <FilterByNamePage />;
  }
}
