import React from 'react';
import {Primary, TextButtonPrimary} from './styles';

interface IButtonUI {
  children: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
}

function ButtonUI({children, onPress, type = 'primary'}: IButtonUI) {
  if (type === 'primary') {
    return (
      <Primary onPress={onPress}>
        <TextButtonPrimary>{children}</TextButtonPrimary>
      </Primary>
    );
  }

  return (
    <Primary onPress={onPress}>
      <TextButtonPrimary>{children}</TextButtonPrimary>
    </Primary>
  );
}

export default ButtonUI;
