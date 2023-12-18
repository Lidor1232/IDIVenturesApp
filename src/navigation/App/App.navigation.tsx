import {lazy, Suspense, useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {screenNames, screensOptions} from './App.constans';
import {Loader} from '../../components/Loader/Loader';
import {COLORS} from '../../assets/colors/colors';
const Main = lazy(() =>
  import('../../screens/Main/Main').then(module => ({
    default: module.Main,
  })),
);
const CityDetails = lazy(() =>
  import('../../screens/CityDetails/CityDetails').then(module => ({
    default: module.CityDetails,
  })),
);

const Stack = createStackNavigator();

interface IProps {}

export const AppNavigation: FC<IProps> = React.memo(({}) => {
  const _onMainComponent = useCallback((props: {}) => {
    return (
      <Suspense fallback={<Loader color={COLORS.white} />}>
        <Main {...props} />
      </Suspense>
    );
  }, []);

  const _onCityDetailsComponent = useCallback((props: {}) => {
    return (
      <Suspense fallback={<Loader color={COLORS.white} />}>
        <CityDetails {...props} />
      </Suspense>
    );
  }, []);

  return (
    <Stack.Navigator initialRouteName={screenNames.Main}>
      <Stack.Screen
        name={screenNames.Main}
        component={_onMainComponent}
        options={screensOptions.main}
      />
      <Stack.Screen
        name={screenNames.CityDetails}
        component={_onCityDetailsComponent}
        options={screensOptions.cityDetails}
      />
    </Stack.Navigator>
  );
});
