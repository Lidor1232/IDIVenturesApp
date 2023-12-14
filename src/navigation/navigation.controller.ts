import {screenNames} from './App/App.constans';
import {store} from '../store/store';
import {cityDetailsSetCityId} from '../store/actions/cityDetails.actions';

export function onNavigate({
  screenName,
  routeParams,
  navigation,
}: {
  screenName: string;
  routeParams?: any;
  navigation: any;
}): void {
  navigation.navigate(screenName, routeParams);
}

export function onNavigateCityDetails({
  navigation,
  routeParams,
}: {
  navigation: any;
  routeParams: {
    cityId: string;
  };
}): void {
  store.dispatch(
    cityDetailsSetCityId({
      cityId: routeParams.cityId,
    }),
  );
  onNavigate({
    navigation,
    routeParams,
    screenName: screenNames.CityDetails,
  });
}
