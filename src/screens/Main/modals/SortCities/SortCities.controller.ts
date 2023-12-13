import {store} from '../../../../store/store';
import {mainPageSetShowSortCitiesModal} from '../../../../store/actions/main.actions';

export function onCloseModal(): void {
  store.dispatch(
    mainPageSetShowSortCitiesModal({
      showModal: false,
    }),
  );
}
