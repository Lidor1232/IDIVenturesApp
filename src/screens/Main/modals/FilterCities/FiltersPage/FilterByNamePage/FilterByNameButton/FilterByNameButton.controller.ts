import {store} from '../../../../../../../store/store';
import {
  mainPageCitiesSetNamePrefixQuery,
  mainPageSetShowFilterCitiesModal,
} from '../../../../../../../store/actions/main.actions';
import {onGetCities} from '../../../../../../../store/services/main.service';

export function onPress(): void {
  store.dispatch(
    mainPageSetShowFilterCitiesModal({
      showModal: false,
    }),
  );
  const searchInput =
    store.getState().main.modals.filterCitiesModal.searchInput;
  store.dispatch(
    mainPageCitiesSetNamePrefixQuery({
      namePrefix: searchInput,
    }),
  );
  onGetCities();
}
