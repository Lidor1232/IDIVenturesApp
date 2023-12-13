import {Modal, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import ScreenContainer from '../ScreenContainer/ScreenContainer';

interface IProps {
  visible: boolean;
  onCloseModal: () => void;
  children: ReactNode;
  style?: ViewStyle;
  transparent?: boolean;
  animationType?: 'none' | 'slide' | 'fade' | undefined;
}

export const ScreenModal: FC<IProps> = React.memo(
  ({visible, onCloseModal, children, style, transparent, animationType}) => {
    return (
      <>
        {visible && (
          <Modal
            animationType={animationType}
            transparent={transparent}
            visible={visible}
            onRequestClose={onCloseModal}
            statusBarTranslucent={true}>
            <ScreenContainer style={style}>{children}</ScreenContainer>
          </Modal>
        )}
      </>
    );
  },
);
