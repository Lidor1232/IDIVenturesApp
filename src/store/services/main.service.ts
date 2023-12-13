import {store} from '../store';
import {
  mainPageCitiesFetchFail,
  mainPageCitiesFetchRequest,
  mainPageCitiesFetchSuccess,
} from '../actions/main.actions';
import {getCities} from '../../services/api/api';

export async function onGetCities(): Promise<void> {
  try {
    store.dispatch(mainPageCitiesFetchRequest());
    const citiesRes = await getCities({
      offset: 0,
    });
    store.dispatch(
      mainPageCitiesFetchSuccess({
        cities: citiesRes.data,
      }),
    );
  } catch {
    store.dispatch(mainPageCitiesFetchFail());
  }
}
