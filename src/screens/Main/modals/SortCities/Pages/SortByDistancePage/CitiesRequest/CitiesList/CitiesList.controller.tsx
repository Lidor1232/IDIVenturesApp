import React, {ReactElement} from 'react';
import {ICity} from '../../../../../../../../utills/types';
import {CityItem} from './CityItem/CityItem';

export function onRenderItem({item}: {item: ICity}): ReactElement {
  return <CityItem item={item} />;
}

export function onKeyExtractor(item: ICity): string {
  return item.wikiDataId;
}
