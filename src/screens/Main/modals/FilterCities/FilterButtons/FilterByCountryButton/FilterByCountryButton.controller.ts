import {
  FILTER_BY_COUNTRY,
  IFilterOption,
} from '../../../../../../store/reducers/main.reducer';
import {store} from '../../../../../../store/store';
import {
  mainPageCitiesSetNamePrefixQuery,
  mainPageFilterCitiesModalSetActiveFilterOption,
} from '../../../../../../store/actions/main.actions';

export function onGetIsActive({
  activeFilterOption,
}: {
  activeFilterOption: IFilterOption;
}): boolean {
  return activeFilterOption === FILTER_BY_COUNTRY;
}

export function onPress(): void {
  store.dispatch(
    mainPageCitiesSetNamePrefixQuery({
      namePrefix: null,
    }),
  );
  store.dispatch(
    mainPageFilterCitiesModalSetActiveFilterOption({
      activeFilterOption: FILTER_BY_COUNTRY,
    }),
  );
}
