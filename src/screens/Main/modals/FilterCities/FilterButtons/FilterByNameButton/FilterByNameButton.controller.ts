import {
  FILTER_BY_NAME,
  IFilterOption,
} from '../../../../../../store/reducers/main.reducer';
import {store} from '../../../../../../store/store';
import {
  mainPageCitiesSetCountryIdsQuery,
  mainPageFilterCitiesModalSetActiveFilterOption,
} from '../../../../../../store/actions/main.actions';

export function onGetIsActive({
  activeFilterOption,
}: {
  activeFilterOption: IFilterOption;
}): boolean {
  return activeFilterOption === FILTER_BY_NAME;
}

export function onPress(): void {
  store.dispatch(
    mainPageCitiesSetCountryIdsQuery({
      countryIds: null,
    }),
  );
  store.dispatch(
    mainPageFilterCitiesModalSetActiveFilterOption({
      activeFilterOption: FILTER_BY_NAME,
    }),
  );
}
