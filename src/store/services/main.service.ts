import {store} from '../store';
import {
  mainPageCitiesFetchFail,
  mainPageCitiesFetchRequest,
  mainPageCitiesFetchSuccess,
  mainPageSearchCountriesFail,
  mainPageSearchCountriesRequest,
  mainPageSearchCountriesSuccess,
} from '../actions/main.actions';
import {getCities, getCountries} from '../../services/api/api';

export async function onGetCities({
  namePrefix,
  countryIds,
}: {
  namePrefix?: string;
  countryIds?: string;
}): Promise<void> {
  try {
    store.dispatch(mainPageCitiesFetchRequest());
    const citiesRes = await getCities({
      offset: 0,
      namePrefix,
      countryIds,
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

export async function onGetSearchCountries({
  namePrefix,
}: {
  namePrefix: string;
}): Promise<void> {
  try {
    store.dispatch(mainPageSearchCountriesRequest());
    const countriesRes = await getCountries({
      namePrefix,
    });
    store.dispatch(
      mainPageSearchCountriesSuccess({
        countries: countriesRes.data,
      }),
    );
  } catch {
    store.dispatch(mainPageSearchCountriesFail());
  }
}
