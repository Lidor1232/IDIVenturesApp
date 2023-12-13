import {idiappAxios} from './api-config';
import {RAPID_API_KEY} from '../../config/config';
import {ICity, ICountry} from '../../utills/types';

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
  });
  return res.data;
}
