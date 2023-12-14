import React, {FC, useCallback} from 'react';
import {ICity} from '../../../../../../utills/types';
import {useNavigation} from '@react-navigation/native';
import {onPress} from './CityItem.controller';
import {CityItem as CityItemComponent} from '../../../../../../components/CityItem/CityItem';

interface IProps {
  item: ICity;
}

export const CityItem: FC<IProps> = React.memo(({item}) => {
  const navigation = useNavigation();

  const _onPress = useCallback(() => {
    onPress({
      item,
      navigation,
    });
  }, [navigation, item]);

  return <CityItemComponent item={item} onPress={_onPress} />;
});
