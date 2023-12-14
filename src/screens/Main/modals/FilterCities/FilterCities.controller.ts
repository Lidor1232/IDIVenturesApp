import {store} from '../../../../store/store';
import {mainPageSetShowFilterCitiesModal} from '../../../../store/actions/main.actions';

export function onCloseModal(): void {
  store.dispatch(
    mainPageSetShowFilterCitiesModal({
      showModal: false,
    }),
  );
}
