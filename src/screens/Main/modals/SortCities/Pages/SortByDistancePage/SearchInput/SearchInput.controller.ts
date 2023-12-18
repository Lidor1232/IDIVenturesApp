import {store} from '../../../../../../../store/store';
import {mainPageSortCitiesModalSortByDistancePageSetSearchInput} from '../../../../../../../store/actions/main.actions';
import {onGetCitiesForSortByDistance} from '../../../../../../../store/services/main.service';

export function onChangeText(text: string): void {
  store.dispatch(
    mainPageSortCitiesModalSortByDistancePageSetSearchInput({
      searchInput: text,
    }),
  );
  if (text.length > 0) {
    onGetCitiesForSortByDistance();
  }
}
