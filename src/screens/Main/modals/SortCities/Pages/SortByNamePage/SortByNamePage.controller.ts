import {onGetCities} from '../../../../../../store/services/main.service';
import {store} from '../../../../../../store/store';
import {mainPageCitiesSetSortQuery} from '../../../../../../store/actions/main.actions';

export function onPress(): void {
  onGetCities();
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
