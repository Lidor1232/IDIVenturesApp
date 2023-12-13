import React from 'react';
import {ICountry} from '../../../../../../../utills/types';
import {CountryItem} from './CountryItem/CountryItem';

export function onRenderItem({item}: {item: ICountry}) {
  return <CountryItem item={item} />;
}

export function onKeyExtractor(item: ICountry): string {
  return item.wikiDataId;
}
