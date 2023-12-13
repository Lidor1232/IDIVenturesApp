import {ICity, ICountry} from '../../utills/types';

export const MAIN_PAGE_CITIES_FETCH_REQUEST = 'MAIN_PAGE_CITIES_FETCH_REQUEST';
export const MAIN_PAGE_CITIES_FETCH_SUCCESS = 'MAIN_PAGE_CITIES_FETCH_SUCCESS';
export const MAIN_PAGE_CITIES_FETCH_FAIL = 'MAIN_PAGE_CITIES_FETCH_FAIL';
export const MAIN_PAGE_CITIES_QUERIES_SET_NAME_PREFIX =
  'MAIN_PAGE_CITIES_QUERIES_SET_NAME_PREFIX';
export const MAIN_PAGE_CITIES_QUERIES_SET_COUNTRY =
  'MAIN_PAGE_CITIES_QUERIES_SET_COUNTRY';

export function mainPageCitiesFetchRequest() {
  return {
    type: MAIN_PAGE_CITIES_FETCH_REQUEST,
  };
}

export function mainPageCitiesFetchSuccess(data: {cities: ICity[]}) {
  return {
    type: MAIN_PAGE_CITIES_FETCH_SUCCESS,
    payload: data,
  };
}

export function mainPageCitiesFetchFail() {
  return {
    type: MAIN_PAGE_CITIES_FETCH_FAIL,
  };
}

export function mainPageCitiesQueriesSetNamePrefix(data: {
  namePrefix: string | null;
}) {
  return {
    type: MAIN_PAGE_CITIES_QUERIES_SET_NAME_PREFIX,
    payload: data,
  };
}

export function mainPageCitiesQueriesSetCountry(data: {country: ICountry}) {
  return {
    type: MAIN_PAGE_CITIES_QUERIES_SET_COUNTRY,
    payload: data,
  };
}
