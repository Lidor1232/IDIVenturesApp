import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Button} from '../../../../../components/Button/Button';
import {onCloseModal} from './CloseButton.controller';
import {COLORS} from '../../../../../assets/colors/colors';

interface IProps {}

export const CloseButton: FC<IProps> = React.memo(({}) => {
  return (
    <Button onPress={onCloseModal} color={COLORS.grey} style={styles.button}>
      Close
    </Button>
  );
});

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
});
