import {
  onGetCityDetails,
  onGetCityWeather,
} from '../../store/services/cityDetails.service';

export async function onMount(): Promise<void> {
  const city = await onGetCityDetails();
  if (city) {
    await onGetCityWeather({
      cityCoordinates: {
        latitude: city.latitude,
        longitude: city.longitude,
      },
    });
  }
}
