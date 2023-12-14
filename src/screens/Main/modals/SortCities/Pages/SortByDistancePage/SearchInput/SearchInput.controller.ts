import {store} from '../../../../../../../store/store';
import {mainPageSortCitiesModalSortByDistancePageSetSearchInput} from '../../../../../../../store/actions/main.actions';

export function onChangeText(text: string): void {
  store.dispatch(
    mainPageSortCitiesModalSortByDistancePageSetSearchInput({
      searchInput: text,
    }),
  );
}
