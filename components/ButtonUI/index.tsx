import React from 'react';
import {
  ContainerMargin,
  Primary,
  Secondary,
  TextButtonPrimary,
  TextButtonSecondary,
} from './Styles';

interface IButtonUI {
  children: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
}

function ButtonUI({children, onPress, type = 'primary'}: IButtonUI) {
  return (
    <ContainerMargin>
      {type === 'primary' ? (
        <Primary onPress={onPress}>
          <TextButtonPrimary>{children}</TextButtonPrimary>
        </Primary>
      ) : (
        <Secondary onPress={onPress}>
          <TextButtonSecondary>{children}</TextButtonSecondary>
        </Secondary>
      )}
    </ContainerMargin>
  );
}

export default ButtonUI;
