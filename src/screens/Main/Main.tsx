import React, {FC, useEffect} from 'react';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import {SearchButton} from './components/SearchButton/SearchButton';
import {onMount} from './Main.controller';
import {CitiesRequest} from './components/CitiesRequest/CitiesRequest';
import {FilterCities} from './modals/FilterCities/FilterCities';
import {SortCities} from './modals/SortCities/SortCities';
import {SortButton} from './components/SortButton/SortButton';
import {WeatherUnits} from './components/WeatherUnits/WeatherUnits';

interface IProps {}

export const Main: FC<IProps> = React.memo(({}) => {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      <ScreenContainer>
        <SearchButton />
        <SortButton />
        <WeatherUnits />
        <CitiesRequest />
      </ScreenContainer>

      <FilterCities />
      <SortCities />
    </>
  );
});
