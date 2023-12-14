import {ICity, IWeather} from '../../utills/types';

export const CITY_DETAILS_SET_CITY_ID = 'CITY_DETAILS_SET_CITY_ID';
export const CITY_DETAILS_FETCH_REQUEST = 'CITY_DETAILS_FETCH_REQUEST';
export const CITY_DETAILS_FETCH_SUCCESS = 'CITY_DETAILS_FETCH_SUCCESS';
export const CITY_DETAILS_FETCH_FAIL = 'CITY_DETAILS_FETCH_FAIL';
export const CITY_DETAILS_WEATHER_FETCH_REQUEST =
  'CITY_DETAILS_WEATHER_FETCH_REQUEST';
export const CITY_DETAILS_WEATHER_FETCH_SUCCESS =
  'CITY_DETAILS_WEATHER_FETCH_SUCCESS';
export const CITY_DETAILS_WEATHER_FETCH_FAIL =
  'CITY_DETAILS_WEATHER_FETCH_FAIL';

export function cityDetailsSetCityId(data: {cityId: string}) {
  return {
    type: CITY_DETAILS_SET_CITY_ID,
    payload: data,
  };
}

export function cityDetailsFetchRequest() {
  return {
    type: CITY_DETAILS_FETCH_REQUEST,
  };
}

export function cityDetailsFetchSuccess(data: {city: ICity}) {
  return {
    type: CITY_DETAILS_FETCH_SUCCESS,
    payload: data,
  };
}

export function cityDetailsFetchFail() {
  return {
    type: CITY_DETAILS_FETCH_FAIL,
  };
}

export function cityDetailsWeatherFetchRequest() {
  return {
    type: CITY_DETAILS_WEATHER_FETCH_REQUEST,
  };
}

export function cityDetailsWeatherFetchSuccess(data: {weather: IWeather}) {
  return {
    type: CITY_DETAILS_WEATHER_FETCH_SUCCESS,
    payload: data,
  };
}

export function cityDetailsWeatherFetchFail() {
  return {
    type: CITY_DETAILS_WEATHER_FETCH_FAIL,
  };
}
