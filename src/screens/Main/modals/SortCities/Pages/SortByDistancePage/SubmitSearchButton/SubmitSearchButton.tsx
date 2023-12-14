import React, {FC} from 'react';
import {Button} from '../../../../../../../components/Button/Button';
import {onPress} from './SubmitSearchButton.controller';
import {COLORS} from '../../../../../../../assets/colors/colors';

interface IProps {}

export const SubmitSearchButton: FC<IProps> = React.memo(({}) => {
  return (
    <Button onPress={onPress} color={COLORS.primary}>
      Search
    </Button>
  );
});
