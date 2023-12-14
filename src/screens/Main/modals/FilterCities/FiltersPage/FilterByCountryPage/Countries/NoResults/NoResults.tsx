import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface IProps {}

export const NoResults: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>Zero Countries Results</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
