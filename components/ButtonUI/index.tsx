import React from 'react';
import {
  ContainerMargin,
  ContainerView,
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
          <ContainerView>
            <TextButtonPrimary>{children}</TextButtonPrimary>
          </ContainerView>
        </Primary>
      ) : (
        <Secondary onPress={onPress}>
          <ContainerView>
            <TextButtonSecondary>{children}</TextButtonSecondary>
          </ContainerView>
        </Secondary>
      )}
    </ContainerMargin>
  );
}

export default ButtonUI;
