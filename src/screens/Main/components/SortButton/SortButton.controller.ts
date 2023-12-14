import {store} from '../../../../store/store';
import {mainPageSetShowSortCitiesModal} from '../../../../store/actions/main.actions';

export function onPress(): void {
  store.dispatch(
    mainPageSetShowSortCitiesModal({
      showModal: true,
    }),
  );
}
