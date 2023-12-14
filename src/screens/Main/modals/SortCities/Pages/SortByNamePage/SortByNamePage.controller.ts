import {onGetCities} from '../../../../../../store/services/main.service';
import {store} from '../../../../../../store/store';
import {
  mainPageCitiesSetSortQuery,
  mainPageSetShowSortCitiesModal,
} from '../../../../../../store/actions/main.actions';

export function onPress(): void {
  onGetCities();
  store.dispatch(
    mainPageSetShowSortCitiesModal({
      showModal: false,
    }),
  );
}

export function onPressSortByAscendingOrder(): void {
  store.dispatch(
    mainPageCitiesSetSortQuery({
      sort: 'name',
    }),
  );
  onPress();
}

export function onPressSortByDescendingOrder() {
  store.dispatch(
    mainPageCitiesSetSortQuery({
      sort: '-name',
    }),
  );
  onPress();
}
