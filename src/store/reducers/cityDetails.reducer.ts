import {IAction, ICity, IWeather} from '../../utills/types';
import {
  CITY_DETAILS_FETCH_FAIL,
  CITY_DETAILS_FETCH_REQUEST,
  CITY_DETAILS_FETCH_SUCCESS,
  CITY_DETAILS_SET_CITY_ID,
  CITY_DETAILS_WEATHER_FETCH_FAIL,
  CITY_DETAILS_WEATHER_FETCH_REQUEST,
  CITY_DETAILS_WEATHER_FETCH_SUCCESS,
} from '../actions/cityDetails.actions';

export interface IState {
  cityId: string | null;
  requests: {
    cityRequest: {
      isLoading: boolean;
      isError: boolean;
      city: ICity | null;
    };
    weatherRequest: {
      isLoading: boolean;
      isError: boolean;
      weather: IWeather | null;
    };
  };
}

const initialState: IState = {
  cityId: null,
  requests: {
    cityRequest: {
      isLoading: false,
      isError: false,
      city: null,
    },
    weatherRequest: {
      isLoading: false,
      isError: false,
      weather: null,
    },
  },
};

export function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case CITY_DETAILS_SET_CITY_ID:
      return {
        ...state,
        cityId: action.payload.cityId,
      };

    case CITY_DETAILS_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          cityRequest: {
            ...state.requests.cityRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case CITY_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          cityRequest: {
            ...state.requests.cityRequest,
            isLoading: false,
            city: action.payload.city,
          },
        },
      };

    case CITY_DETAILS_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          cityRequest: {
            ...state.requests.cityRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case CITY_DETAILS_WEATHER_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          weatherRequest: {
            ...state.requests.weatherRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case CITY_DETAILS_WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          weatherRequest: {
            ...state.requests.weatherRequest,
            isLoading: false,
            weather: action.payload.weather,
          },
        },
      };

    case CITY_DETAILS_WEATHER_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          weatherRequest: {
            ...state.requests.weatherRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    default:
      return state;
  }
}
