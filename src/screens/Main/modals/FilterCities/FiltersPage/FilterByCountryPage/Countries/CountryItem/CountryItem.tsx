import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC, useCallback} from 'react';
import {ICountry} from '../../../../../../../../utills/types';
import {onPress} from './CountryItem.controller';

interface IProps {
  item: ICountry;
}

export const CountryItem: FC<IProps> = React.memo(({item}) => {
  const _onPress = useCallback(() => {
    onPress({item});
  }, [item]);

  return (
    <Pressable style={styles.container} onPress={_onPress}>
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    paddingVertical: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
});
