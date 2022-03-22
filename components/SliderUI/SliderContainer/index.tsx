import {Slider} from '@miblanchard/react-native-slider';
import React, {Dispatch, FC} from 'react';

interface ISliderContainer {
  children: React.ReactElement;
  stateValue: [number[], Dispatch<number[]>];
}

const SliderContainer: FC<ISliderContainer> = props => {
  const {stateValue} = props;
  const [value, setValue] = stateValue;

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          value,
        });
      }

      return child;
    });
  };

  return <>{renderChildren()}</>;
};

export default SliderContainer;
