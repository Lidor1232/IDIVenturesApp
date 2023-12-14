import React, {FC, useCallback} from 'react';
import {CityItem as CityItemComponent} from '../../../../../../../../../components/CityItem/CityItem';
import {ICity} from '../../../../../../../../../utills/types';
import {onPress} from './CityItem.controller';

interface IProps {
  item: ICity;
}

export const CityItem: FC<IProps> = React.memo(({item}) => {
  const _onPress = useCallback(() => {
    onPress({
      item,
    });
  }, [item]);

  return <CityItemComponent item={item} onPress={_onPress} />;
});
