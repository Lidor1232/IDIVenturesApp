import React, {FC, useEffect} from 'react';
import {onMount} from './CityDetails.controller';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import {CityDetailsRequest} from './components/CityDetailsRequest/CityDetailsRequest';

interface IProps {}

export const CityDetails: FC<IProps> = React.memo(({}) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <ScreenContainer>
      <CityDetailsRequest />
    </ScreenContainer>
  );
});
