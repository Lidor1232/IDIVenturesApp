import {store} from '../../../../../../store/store';
import {mainPageSortCitiesModalSetActivePage} from '../../../../../../store/actions/main.actions';
import {SORT_BY_NAME_PAGE} from '../../../../../../store/reducers/main.reducer';

export function onPress(): void {
  store.dispatch(
    mainPageSortCitiesModalSetActivePage({
      activePage: SORT_BY_NAME_PAGE,
    }),
  );
}
