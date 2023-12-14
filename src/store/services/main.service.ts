import {store} from '../store';
import {
  mainPageCitiesFetchFail,
  mainPageCitiesFetchRequest,
  mainPageCitiesFetchSuccess,
  mainPageCitiesForSortByDistanceFetchFail,
  mainPageCitiesForSortByDistanceFetchRequest,
  mainPageCitiesForSortByDistanceFetchSuccess,
  mainPageSearchCountriesFail,
  mainPageSearchCountriesRequest,
  mainPageSearchCountriesSuccess,
} from '../actions/main.actions';
import {getCities, getCountries} from '../../services/api/api';
import {onGetFormatCoordinatesToISO6709} from '../../utills/location/location';
import {ICity} from '../../utills/types';

export function onGetLocationQueryByCity({city}: {city: ICity}): string {
  const formattedCoordinates = onGetFormatCoordinatesToISO6709({
    latitude: city.latitude,
    longitude: city.longitude,
  });
  return `${formattedCoordinates.latitude}${formattedCoordinates.longitude}`;
}

export async function onGetCities(): Promise<void> {
  try {
    store.dispatch(mainPageCitiesFetchRequest());
    const queries = store.getState().main.requests.citiesRequest.queries;
    const citiesRes = await getCities({
      offset: 0,
      ...(queries.namePrefix ? {namePrefix: queries.namePrefix} : null),
      ...(queries.countryIds ? {countryIds: queries.countryIds} : null),
      ...(queries.sort ? {sort: queries.sort} : null),
      ...(queries.nearCity
        ? {
            location: onGetLocationQueryByCity({
              city: queries.nearCity,
            }),
            radius: 100,
          }
        : null),
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

export async function onGetCitiesForSortByDistance(): Promise<void> {
  try {
    store.dispatch(mainPageCitiesForSortByDistanceFetchRequest());
    const searchInput =
      store.getState().main.modals.sortCitiesModal.pages.sortByDistancePage
        .searchInput;
    const citiesRes = await getCities({
      offset: 0,
      namePrefix: searchInput,
    });
    store.dispatch(
      mainPageCitiesForSortByDistanceFetchSuccess({
        cities: citiesRes.data,
      }),
    );
  } catch {
    store.dispatch(mainPageCitiesForSortByDistanceFetchFail());
  }
}
