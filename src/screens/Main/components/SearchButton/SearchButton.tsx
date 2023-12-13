import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';

interface IProps {}

export const SearchButton: FC<IProps> = React.memo(({}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {},
});
