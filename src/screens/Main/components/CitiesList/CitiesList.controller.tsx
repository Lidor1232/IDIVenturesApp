import React from 'react';
import {ICity} from '../../../../utills/types';
import {CityItem} from './CityItem/CityItem';

export function onRenderItem({item}: {item: ICity}) {
  return <CityItem item={item} />;
}

export function onKeyExtractor(item: ICity): string {
  return item.id.toString();
}
