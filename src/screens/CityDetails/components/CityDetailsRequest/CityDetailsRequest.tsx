import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {Loader} from '../../../../components/Loader/Loader';
import {Error} from '../../../../components/Error/Error';
import {CityDetails} from './CityDetails/CityDetails';

interface IProps {}

export const CityDetailsRequest: FC<IProps> = React.memo(({}) => {
  const isLoading = useSelector(
    (state: IRootState) => state.cityDetails.requests.cityRequest.isLoading,
    shallowEqual,
  );
  const isError = useSelector(
    (state: IRootState) => state.cityDetails.requests.cityRequest.isError,
    shallowEqual,
  );

  return <>{isLoading ? <Loader /> : isError ? <Error /> : <CityDetails />}</>;
});
