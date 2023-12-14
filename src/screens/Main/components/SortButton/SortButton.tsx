import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Button} from '../../../../components/Button/Button';
import {COLORS} from '../../../../assets/colors/colors';
import {onPress} from './SortButton.controller';

interface IProps {}

export const SortButton: FC<IProps> = React.memo(({}) => {
  return (
    <Button onPress={onPress} color={COLORS.grey} style={styles.button}>
      Choose sort by
    </Button>
  );
});

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
});
