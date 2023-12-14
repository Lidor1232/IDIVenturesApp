import {idiappAxios} from './api-config';
import {RAPID_API_KEY, WEATHER_API_KEY} from '../../config/config';
import {
  ICity,
  ICoordinates,
  ICountry,
  IWeather,
  IWeatherUnits,
} from '../../utills/types';

export interface IGetCitiesResponse {
  links: {
    rel: string;
    href: string;
  }[];
  data: ICity[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}

export async function getCities({
  offset,
  namePrefix,
  location,
  countryIds,
  sort,
}: {
  offset: number;
  namePrefix?: string;
  location?: string;
  countryIds?: string;
  sort?: string;
}): Promise<IGetCitiesResponse> {
  const res = await idiappAxios({
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
    params: {
      offset,
      namePrefix,
      location,
      countryIds,
      sort,
      limit: 10,
    },
  });
  return res.data;
}

export interface IGetCountriesResponse {
  links: {
    rel: string;
    href: string;
  }[];
  data: ICountry[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}

export async function getCountries({
  namePrefix,
}: {
  namePrefix?: string;
}): Promise<IGetCountriesResponse> {
  const res = await idiappAxios({
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
    params: {
      namePrefix,
    },
  });
  return res.data;
}

export interface IGetCitiesNearLocation {
  links: {
    rel: string;
    href: string;
  }[];
  data: ICity[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}

export async function getCitiesNearLocation({
  location,
  radius,
}: {
  radius: number;
  location: string;
}): Promise<IGetCitiesNearLocation> {
  const res = await idiappAxios({
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${location}/nearbyCities`,
    params: {
      radius,
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  });
  return res.data;
}

export interface IGetCityDetailsResponse {
  data: ICity;
}

export async function getCityDetails({
  cityId,
}: {
  cityId: string;
}): Promise<IGetCityDetailsResponse> {
  const res = await idiappAxios({
    method: 'GET',
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityId}`,
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  });
  return res.data;
}

export async function getLocationWeather({
  coordinates,
  units,
}: {
  coordinates: ICoordinates;
  units: IWeatherUnits;
}): Promise<IWeather> {
  const res = await idiappAxios({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      lat: coordinates.latitude,
      lon: coordinates.longitude,
      appid: WEATHER_API_KEY,
      units,
    },
  });
  return res.data;
}
