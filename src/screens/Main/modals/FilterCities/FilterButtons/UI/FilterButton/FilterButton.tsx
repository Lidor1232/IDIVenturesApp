import {StyleSheet} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Button} from '../../../../../../../components/Button/Button';
import {onGetButtonColor} from './FilterButton.controller';

interface IProps {
  isActive: boolean;
  children: string;
  onPress: () => void;
}

export const FilterButton: FC<IProps> = React.memo(
  ({children, onPress, isActive}) => {
    const buttonColor = useMemo(
      () =>
        onGetButtonColor({
          isActive,
        }),
      [isActive],
    );

    return (
      <Button style={styles.button} color={buttonColor} onPress={onPress}>
        {children}
      </Button>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    width: '45%',
  },
});
