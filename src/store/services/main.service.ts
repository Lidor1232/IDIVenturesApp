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

export async function onGetCities(): Promise<void> {
  try {
    store.dispatch(mainPageCitiesFetchRequest());
    const queries = store.getState().main.requests.citiesRequest.queries;
    const citiesRes = await getCities({
      offset: 0,
      ...(queries.namePrefix ? {namePrefix: queries.namePrefix} : null),
      ...(queries.countryIds ? {countryIds: queries.countryIds} : null),
      ...(queries.sort ? {sort: queries.sort} : null),
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
