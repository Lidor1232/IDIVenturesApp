import {store} from '../store';
import {
  cityDetailsFetchFail,
  cityDetailsFetchRequest,
  cityDetailsFetchSuccess,
  cityDetailsWeatherFetchFail,
  cityDetailsWeatherFetchRequest,
  cityDetailsWeatherFetchSuccess,
} from '../actions/cityDetails.actions';
import {getCityDetails, getLocationWeather} from '../../services/api/api';
import {ICity, ICoordinates} from '../../utills/types';

export async function onGetCityDetails(): Promise<ICity | undefined> {
  try {
    store.dispatch(cityDetailsFetchRequest());
    const cityId = store.getState().cityDetails.cityId;
    const cityRes = await getCityDetails({
      cityId,
    });
    store.dispatch(
      cityDetailsFetchSuccess({
        city: cityRes.data,
      }),
    );
    return cityRes.data;
  } catch {
    store.dispatch(cityDetailsFetchFail());
  }
}

export async function onGetCityWeather({
  cityCoordinates,
}: {
  cityCoordinates: ICoordinates;
}): Promise<void> {
  try {
    store.dispatch(cityDetailsWeatherFetchRequest());
    const weather = await getLocationWeather({
      coordinates: cityCoordinates,
      units: 'metric',
    });
    store.dispatch(
      cityDetailsWeatherFetchSuccess({
        weather,
      }),
    );
  } catch {
    store.dispatch(cityDetailsWeatherFetchFail());
  }
}
