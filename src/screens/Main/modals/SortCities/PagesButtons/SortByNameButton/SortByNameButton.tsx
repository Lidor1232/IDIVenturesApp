import React, {FC} from 'react';
import {PageButton} from '../UI/PageButton/PageButton';
import {onPress} from './SortByNameButton.controller';

interface IProps {}

export const SortByNameButton: FC<IProps> = React.memo(({}) => {
  return <PageButton onPress={onPress}>Sort by name</PageButton>;
});
