import {IAction, ICity, ICountry} from '../../utills/types';
import {
  MAIN_PAGE_CITIES_FETCH_FAIL,
  MAIN_PAGE_CITIES_FETCH_REQUEST,
  MAIN_PAGE_CITIES_FETCH_SUCCESS,
  MAIN_PAGE_CITIES_FOR_SORT_BY_DISTANCE_FETCH_FAIL,
  MAIN_PAGE_CITIES_FOR_SORT_BY_DISTANCE_FETCH_REQUEST,
  MAIN_PAGE_CITIES_FOR_SORT_BY_DISTANCE_FETCH_SUCCESS,
  MAIN_PAGE_CITIES_SET_COUNTRY_IDS_QUERY,
  MAIN_PAGE_CITIES_SET_NAME_PREFIX_QUERY,
  MAIN_PAGE_CITIES_SET_NEAR_CITY_QUERY,
  MAIN_PAGE_CITIES_SET_SORT_QUERY,
  MAIN_PAGE_FILTER_CITIES_MODAL_SET_ACTIVE_FILTER_OPTION,
  MAIN_PAGE_FILTER_CITIES_MODAL_SET_SEARCH_INPUT,
  MAIN_PAGE_SEARCH_COUNTRIES_FAIL,
  MAIN_PAGE_SEARCH_COUNTRIES_REQUEST,
  MAIN_PAGE_SEARCH_COUNTRIES_SUCCESS,
  MAIN_PAGE_SET_SHOW_FILTER_CITIES_MODAL,
  MAIN_PAGE_SET_SHOW_SORT_CITIES_MODAL,
  MAIN_PAGE_SORT_CITIES_MODAL_SET_ACTIVE_PAGE,
  MAIN_PAGE_SORT_CITIES_MODAL_SORT_BY_DISTANCE_PAGE_SET_SEARCH_INPUT,
} from '../actions/main.actions';

export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';

export type IFilterOption = typeof FILTER_BY_NAME | typeof FILTER_BY_COUNTRY;

export const SORT_BY_NAME_PAGE = 'SORT_BY_NAME_PAGE';
export const SORT_BY_DISTANCE_PAGE = 'SORT_BY_DISTANCE_PAGE';

export type ISortCitiesModalActivePage =
  | typeof SORT_BY_NAME_PAGE
  | typeof SORT_BY_DISTANCE_PAGE;

export interface IGetCitiesQueries {
  namePrefix: string | null;
  countryIds: string | null;
  sort: 'name' | '-name' | null;
  nearCity: ICity | null;
}

export interface IState {
  requests: {
    citiesRequest: {
      isLoading: boolean;
      isError: boolean;
      cities: ICity[];
      queries: IGetCitiesQueries;
    };
    searchCountriesRequest: {
      isLoading: boolean;
      isError: boolean;
      countries: ICountry[];
    };
    citiesForSortByDistanceRequest: {
      isLoading: boolean;
      isError: boolean;
      cities: ICity[];
    };
  };
  modals: {
    filterCitiesModal: {
      showModal: boolean;
      searchInput: string;
      activeFilterOption: IFilterOption;
    };
    sortCitiesModal: {
      showModal: boolean;
      activePage: ISortCitiesModalActivePage;
      pages: {
        sortByDistancePage: {
          searchInput: string;
        };
      };
    };
  };
}

const initialState: IState = {
  requests: {
    citiesRequest: {
      isLoading: false,
      isError: false,
      cities: [],
      queries: {
        namePrefix: null,
        countryIds: null,
        sort: null,
        nearCity: null,
      },
    },
    searchCountriesRequest: {
      countries: [],
      isError: false,
      isLoading: false,
    },
    citiesForSortByDistanceRequest: {
      isLoading: false,
      isError: false,
      cities: [],
    },
  },
  modals: {
    filterCitiesModal: {
      showModal: false,
      searchInput: '',
      activeFilterOption: FILTER_BY_NAME,
    },
    sortCitiesModal: {
      showModal: false,
      activePage: SORT_BY_NAME_PAGE,
      pages: {
        sortByDistancePage: {
          searchInput: '',
        },
      },
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

    case MAIN_PAGE_SORT_CITIES_MODAL_SORT_BY_DISTANCE_PAGE_SET_SEARCH_INPUT:
      return {
        ...state,
        modals: {
          ...state.modals,
          sortCitiesModal: {
            ...state.modals.sortCitiesModal,
            pages: {
              ...state.modals.sortCitiesModal.pages,
              sortByDistancePage: {
                ...state.modals.sortCitiesModal.pages.sortByDistancePage,
                searchInput: action.payload.searchInput,
              },
            },
          },
        },
      };

    case MAIN_PAGE_SET_SHOW_SORT_CITIES_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          sortCitiesModal: {
            ...state.modals.sortCitiesModal,
            showModal: action.payload.showModal,
          },
        },
      };

    case MAIN_PAGE_SORT_CITIES_MODAL_SET_ACTIVE_PAGE:
      return {
        ...state,
        modals: {
          ...state.modals,
          sortCitiesModal: {
            ...state.modals.sortCitiesModal,
            activePage: action.payload.activePage,
          },
        },
      };

    case MAIN_PAGE_CITIES_SET_NAME_PREFIX_QUERY:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            queries: {
              ...state.requests.citiesRequest.queries,
              namePrefix: action.payload.namePrefix,
            },
          },
        },
      };

    case MAIN_PAGE_CITIES_SET_COUNTRY_IDS_QUERY:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            queries: {
              ...state.requests.citiesRequest.queries,
              countryIds: action.payload.countryIds,
            },
          },
        },
      };

    case MAIN_PAGE_CITIES_SET_SORT_QUERY:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            queries: {
              ...state.requests.citiesRequest.queries,
              sort: action.payload.sort,
            },
          },
        },
      };

    case MAIN_PAGE_CITIES_FOR_SORT_BY_DISTANCE_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesForSortByDistanceRequest: {
            ...state.requests.citiesForSortByDistanceRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case MAIN_PAGE_CITIES_FOR_SORT_BY_DISTANCE_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesForSortByDistanceRequest: {
            ...state.requests.citiesForSortByDistanceRequest,
            isLoading: false,
            cities: action.payload.cities,
          },
        },
      };

    case MAIN_PAGE_CITIES_FOR_SORT_BY_DISTANCE_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesForSortByDistanceRequest: {
            ...state.requests.citiesForSortByDistanceRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case MAIN_PAGE_CITIES_SET_NEAR_CITY_QUERY:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            queries: {
              ...state.requests.citiesRequest.queries,
              nearCity: action.payload.nearCity,
            },
          },
        },
      };

    default:
      return state;
  }
}
