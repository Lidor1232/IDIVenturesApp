import {store} from '../../../../../store/store';
import {mainPageSetShowFilterCitiesModal} from '../../../../../store/actions/main.actions';

export function onPress(): void {
  store.dispatch(
    mainPageSetShowFilterCitiesModal({
      showModal: false,
    }),
  );
}
