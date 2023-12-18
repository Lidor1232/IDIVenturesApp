import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../../../../../components/Text/Text';

interface IProps {}

export const NoResults: FC<IProps> = React.memo(({}) => {
  return (
    <View style={styles.container}>
      <Text>Zero Cities Results</Text>
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
