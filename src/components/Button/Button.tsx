import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface IProps {
  color: string;
  children: string;
  labelStyle?: TextStyle;
  style?: ViewStyle;
  isLoading?: boolean;
  onPress: () => void;
  icon?: ReactNode;
}

export const Button: FC<IProps> = ({
  children,
  labelStyle,
  style,
  onPress,
  isLoading = false,
  icon,
  color,
}) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        ...{backgroundColor: color},
        ...style,
      }}
      onPress={onPress}>
      {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
      {!isLoading ? (
        <Text style={[styles.label, labelStyle]}>{children}</Text>
      ) : (
        <ActivityIndicator color={'white'} size={'small'} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
});
