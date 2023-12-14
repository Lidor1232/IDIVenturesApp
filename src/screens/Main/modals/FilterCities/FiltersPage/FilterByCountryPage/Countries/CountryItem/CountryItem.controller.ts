import {store} from '../../../../../../../../store/store';
import {ICountry} from '../../../../../../../../utills/types';
import {
  mainPageCitiesSetCountryIdsQuery,
  mainPageSetShowFilterCitiesModal,
} from '../../../../../../../../store/actions/main.actions';
import {onGetCities} from '../../../../../../../../store/services/main.service';

export function onPress({item}: {item: ICountry}): void {
  store.dispatch(
    mainPageSetShowFilterCitiesModal({
      showModal: false,
    }),
  );
  store.dispatch(
    mainPageCitiesSetCountryIdsQuery({
      countryIds: item.wikiDataId,
    }),
  );
  onGetCities();
}
