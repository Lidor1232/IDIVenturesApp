import {store} from '../../../../../../../store/store';
import {mainPageSetShowFilterCitiesModal} from '../../../../../../../store/actions/main.actions';
import {onGetCities} from '../../../../../../../store/services/main.service';

export function onPress(): void {
  store.dispatch(
    mainPageSetShowFilterCitiesModal({
      showModal: false,
    }),
  );
  const searchInput =
    store.getState().main.modals.filterCitiesModal.searchInput;
  onGetCities({
    namePrefix: searchInput,
  });
}
