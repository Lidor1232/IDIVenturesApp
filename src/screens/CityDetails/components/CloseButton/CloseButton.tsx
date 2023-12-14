import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {onPress} from './CloseButton.controller';
import {Button} from '../../../../components/Button/Button';
import {COLORS} from '../../../../assets/colors/colors';

interface IProps {}

export const CloseButton: FC<IProps> = React.memo(({}) => {
  const navigation = useNavigation();

  const _onPress = useCallback(() => {
    onPress({
      navigation,
    });
  }, [navigation]);

  return (
    <Button color={COLORS.grey} onPress={_onPress}>
      Close
    </Button>
  );
});
