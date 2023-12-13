import {store} from '../../../../../store/store';
import {mainPageFilterCitiesModalSetSearchInput} from '../../../../../store/actions/main.actions';
import {FILTER_BY_COUNTRY} from '../../../../../store/reducers/main.reducer';
import {onGetSearchCountries} from '../../../../../store/services/main.service';

export function onChangeText(text: string): void {
  store.dispatch(
    mainPageFilterCitiesModalSetSearchInput({
      searchInput: text,
    }),
  );
  const activeFilterOption =
    store.getState().main.modals.filterCitiesModal.activeFilterOption;
  if (activeFilterOption === FILTER_BY_COUNTRY && text.length > 0) {
    onGetSearchCountries({
      namePrefix: text,
    });
  }
}
