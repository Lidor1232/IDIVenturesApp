import {StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

interface IProps {}

export const Main: FC<IProps> = React.memo(({}) => {
  return (
    <ScreenContainer>
      <Text>Kjkjj</Text>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({});
