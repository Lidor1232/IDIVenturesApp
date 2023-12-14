import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Button} from '../../../../../../../components/Button/Button';
import {COLORS} from '../../../../../../../assets/colors/colors';

interface IProps {
  children: string;
  onPress: () => void;
}

export const PageButton: FC<IProps> = React.memo(({onPress, children}) => {
  return (
    <Button color={COLORS.green} onPress={onPress} style={styles.button}>
      {children}
    </Button>
  );
});

const styles = StyleSheet.create({
  button: {
    width: '45%',
  },
});
