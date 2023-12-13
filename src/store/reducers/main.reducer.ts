import {IAction, ICity, ICountry} from '../../utills/types';
import {
  MAIN_PAGE_CITIES_FETCH_FAIL,
  MAIN_PAGE_CITIES_FETCH_REQUEST,
  MAIN_PAGE_CITIES_FETCH_SUCCESS,
  MAIN_PAGE_FILTER_CITIES_MODAL_SET_ACTIVE_FILTER_OPTION,
  MAIN_PAGE_FILTER_CITIES_MODAL_SET_SEARCH_INPUT,
  MAIN_PAGE_SEARCH_COUNTRIES_FAIL,
  MAIN_PAGE_SEARCH_COUNTRIES_REQUEST,
  MAIN_PAGE_SEARCH_COUNTRIES_SUCCESS,
  MAIN_PAGE_SET_SHOW_FILTER_CITIES_MODAL,
} from '../actions/main.actions';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';

export type IFilterOption = typeof FILTER_BY_NAME | typeof FILTER_BY_COUNTRY;

export interface IState {
  requests: {
    citiesRequest: {
      isLoading: boolean;
      isError: boolean;
      cities: ICity[];
    };
    searchCountriesRequest: {
      isLoading: boolean;
      isError: boolean;
      countries: ICountry[];
    };
  };
  modals: {
    filterCitiesModal: {
      showModal: boolean;
      searchInput: string;
      activeFilterOption: IFilterOption;
    };
  };
}

const initialState: IState = {
  requests: {
    citiesRequest: {
      isLoading: false,
      isError: false,
      cities: [],
    },
    searchCountriesRequest: {
      countries: [],
      isError: false,
      isLoading: false,
    },
  },
  modals: {
    filterCitiesModal: {
      showModal: false,
      searchInput: '',
      activeFilterOption: FILTER_BY_NAME,
    },
  },
};

export function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case MAIN_PAGE_CITIES_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case MAIN_PAGE_CITIES_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            isLoading: false,
            cities: action.payload.cities,
          },
        },
      };

    case MAIN_PAGE_CITIES_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case MAIN_PAGE_SEARCH_COUNTRIES_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          searchCountriesRequest: {
            ...state.requests.searchCountriesRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case MAIN_PAGE_SEARCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          searchCountriesRequest: {
            ...state.requests.searchCountriesRequest,
            isLoading: false,
            countries: action.payload.countries,
          },
        },
      };

    case MAIN_PAGE_SEARCH_COUNTRIES_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          searchCountriesRequest: {
            ...state.requests.searchCountriesRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case MAIN_PAGE_SET_SHOW_FILTER_CITIES_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          filterCitiesModal: {
            ...state.modals.filterCitiesModal,
            showModal: action.payload.showModal,
          },
        },
      };

    case MAIN_PAGE_FILTER_CITIES_MODAL_SET_SEARCH_INPUT:
      return {
        ...state,
        modals: {
          ...state.modals,
          filterCitiesModal: {
            ...state.modals.filterCitiesModal,
            searchInput: action.payload.searchInput,
          },
        },
      };

    case MAIN_PAGE_FILTER_CITIES_MODAL_SET_ACTIVE_FILTER_OPTION:
      return {
        ...state,
        modals: {
          ...state.modals,
          filterCitiesModal: {
            ...state.modals.filterCitiesModal,
            activeFilterOption: action.payload.activeFilterOption,
          },
        },
      };

    default:
      return state;
  }
}
