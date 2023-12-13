import {ICity, ICountry} from '../../utills/types';
import {IFilterOption} from '../reducers/main.reducer';

export const MAIN_PAGE_CITIES_FETCH_REQUEST = 'MAIN_PAGE_CITIES_FETCH_REQUEST';
export const MAIN_PAGE_CITIES_FETCH_SUCCESS = 'MAIN_PAGE_CITIES_FETCH_SUCCESS';
export const MAIN_PAGE_CITIES_FETCH_FAIL = 'MAIN_PAGE_CITIES_FETCH_FAIL';
export const MAIN_PAGE_SEARCH_COUNTRIES_REQUEST =
  'MAIN_PAGE_SEARCH_COUNTRIES_REQUEST';
export const MAIN_PAGE_SEARCH_COUNTRIES_SUCCESS =
  'MAIN_PAGE_SEARCH_COUNTRIES_SUCCESS';
export const MAIN_PAGE_SEARCH_COUNTRIES_FAIL =
  'MAIN_PAGE_SEARCH_COUNTRIES_FAIL';
export const MAIN_PAGE_SET_SHOW_FILTER_CITIES_MODAL =
  'MAIN_PAGE_SET_SHOW_FILTER_CITIES_MODAL';
export const MAIN_PAGE_FILTER_CITIES_MODAL_SET_SEARCH_INPUT =
  'MAIN_PAGE_FILTER_CITIES_MODAL_SET_SEARCH_INPUT';
export const MAIN_PAGE_FILTER_CITIES_MODAL_SET_ACTIVE_FILTER_OPTION =
  'MAIN_PAGE_FILTER_CITIES_MODAL_SET_ACTIVE_FILTER_OPTION';

export function mainPageSearchCountriesRequest() {
  return {
    type: MAIN_PAGE_SEARCH_COUNTRIES_REQUEST,
  };
}

export function mainPageSearchCountriesSuccess(data: {countries: ICountry[]}) {
  return {
    type: MAIN_PAGE_SEARCH_COUNTRIES_SUCCESS,
    payload: data,
  };
}

export function mainPageSearchCountriesFail() {
  return {
    type: MAIN_PAGE_SEARCH_COUNTRIES_FAIL,
  };
}

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

export function mainPageSetShowFilterCitiesModal(data: {showModal: boolean}) {
  return {
    type: MAIN_PAGE_SET_SHOW_FILTER_CITIES_MODAL,
    payload: data,
  };
}

export function mainPageFilterCitiesModalSetSearchInput(data: {
  searchInput: string;
}) {
  return {
    type: MAIN_PAGE_FILTER_CITIES_MODAL_SET_SEARCH_INPUT,
    payload: data,
  };
}

export function mainPageFilterCitiesModalSetActiveFilterOption(data: {
  activeFilterOption: IFilterOption;
}) {
  return {
    type: MAIN_PAGE_FILTER_CITIES_MODAL_SET_ACTIVE_FILTER_OPTION,
    payload: data,
  };
}
