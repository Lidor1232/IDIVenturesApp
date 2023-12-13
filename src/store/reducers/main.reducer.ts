import {IAction, ICity, ICountry} from '../../utills/types';
import {
  MAIN_PAGE_CITIES_FETCH_FAIL,
  MAIN_PAGE_CITIES_FETCH_REQUEST,
  MAIN_PAGE_CITIES_FETCH_SUCCESS,
  MAIN_PAGE_CITIES_QUERIES_SET_COUNTRY,
  MAIN_PAGE_CITIES_QUERIES_SET_NAME_PREFIX,
} from '../actions/main.actions';

export interface IState {
  requests: {
    citiesRequest: {
      isLoading: boolean;
      isError: boolean;
      cities: ICity[];
      queries: {
        namePrefix: string | null;
        country: ICountry | null;
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
        country: null,
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

    case MAIN_PAGE_CITIES_QUERIES_SET_NAME_PREFIX:
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

    case MAIN_PAGE_CITIES_QUERIES_SET_COUNTRY:
      return {
        ...state,
        requests: {
          ...state.requests,
          citiesRequest: {
            ...state.requests.citiesRequest,
            queries: {
              ...state.requests.citiesRequest.queries,
              country: action.payload.country,
            },
          },
        },
      };

    default:
      return state;
  }
}
