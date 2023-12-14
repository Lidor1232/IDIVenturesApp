import {StyleSheet} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Button} from '../../../../../../components/Button/Button';
import {onGetButtonColor} from './WeatherUnitButton.controller';

interface IProps {
  children: string;
  onPress: () => void;
  isActive: boolean;
}

export const WeatherUnitButton: FC<IProps> = React.memo(
  ({onPress, isActive, children}) => {
    const buttonColor = useMemo(
      () =>
        onGetButtonColor({
          isActive,
        }),
      [isActive],
    );

    return (
      <Button color={buttonColor} onPress={onPress} style={styles.button}>
        {children}
      </Button>
    );
  },
);

const styles = StyleSheet.create({
  button: {
    width: '50%',
  },
});
