import {onNavigateCityDetails} from '../../../../../../navigation/navigation.controller';
import {ICity} from '../../../../../../utills/types';

export function onPress({
  navigation,
  item,
}: {
  navigation: any;
  item: ICity;
}): void {
  onNavigateCityDetails({
    navigation,
    routeParams: {
      cityId: item.wikiDataId,
    },
  });
}
