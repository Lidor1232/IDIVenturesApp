import React, {FC, useEffect} from 'react';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import {SearchButton} from './components/SearchButton/SearchButton';
import {onMount} from './Main.controller';
import {CitiesRequest} from './components/CitiesRequest/CitiesRequest';

interface IProps {}

export const Main: FC<IProps> = React.memo(({}) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <ScreenContainer>
      <SearchButton />
      <CitiesRequest />
    </ScreenContainer>
  );
});
