import React, {FC} from 'react';
import {PageButton} from '../UI/PageButton/PageButton';
import {onPress} from './SortByDistanceButton.controller';

interface IProps {}

export const SortByDistanceButton: FC<IProps> = React.memo(({}) => {
  return <PageButton onPress={onPress}>Sort by distance</PageButton>;
});
