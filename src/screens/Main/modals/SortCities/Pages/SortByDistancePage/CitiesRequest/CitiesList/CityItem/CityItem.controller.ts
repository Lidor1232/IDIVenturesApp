import {ICity} from '../../../../../../../../../utills/types';
import {store} from '../../../../../../../../../store/store';
import {
  mainPageCitiesSetNearCityQuery,
  mainPageSetShowSortCitiesModal,
} from '../../../../../../../../../store/actions/main.actions';
import {onGetCities} from '../../../../../../../../../store/services/main.service';

export function onPress({item}: {item: ICity}) {
  store.dispatch(
    mainPageSetShowSortCitiesModal({
      showModal: false,
    }),
  );
  store.dispatch(
    mainPageCitiesSetNearCityQuery({
      nearCity: item,
    }),
  );
  onGetCities();
}
