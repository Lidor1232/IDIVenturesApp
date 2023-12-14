import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {onPress} from './SearchButton.controller';
import {Button} from '../../../../components/Button/Button';
import {COLORS} from '../../../../assets/colors/colors';

interface IProps {}

export const SearchButton: FC<IProps> = React.memo(({}) => {
  return (
    <Button color={COLORS.grey} onPress={onPress} style={styles.container}>
      Choose filter by
    </Button>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});
