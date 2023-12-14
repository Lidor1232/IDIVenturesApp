import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../../../../components/Loader/Loader';
import {Error} from '../../../../../../../components/Error/Error';
import {CitiesList} from './CitiesList/CitiesList';

interface IProps {}

export const CitiesRequest: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) =>
      state.main.requests.citiesForSortByDistanceRequest.isLoading,
    shallowEqual,
  );
  const isError = useSelector(
    (state: IRootState) =>
      state.main.requests.citiesForSortByDistanceRequest.isError,
    shallowEqual,
  );

  return <>{isLoading ? <Loader /> : isError ? <Error /> : <CitiesList />}</>;
});
