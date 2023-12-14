import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Button} from '../../../../../../components/Button/Button';
import {
  onPressSortByAscendingOrder,
  onPressSortByDescendingOrder,
} from './SortByNamePage.controller';
import {COLORS} from '../../../../../../assets/colors/colors';

interface IProps {}

export const SortByNamePage: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Button
        color={COLORS.grey}
        onPress={onPressSortByAscendingOrder}
        style={styles.ascendingOrderButton}>
        A - Z
      </Button>
      <Button color={COLORS.grey} onPress={onPressSortByDescendingOrder}>
        Z - A
      </Button>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ascendingOrderButton: {
    marginBottom: 12,
  },
});
