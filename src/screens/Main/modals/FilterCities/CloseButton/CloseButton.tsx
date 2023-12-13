import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {onPress} from './CloseButton.controller';

interface IProps {}

export const CloseButton: FC<IProps> = React.memo(({}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>Back</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  buttonContainer: {
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
