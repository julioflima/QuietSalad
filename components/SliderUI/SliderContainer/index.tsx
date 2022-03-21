import React, {Dispatch} from 'react';
import {Slider} from 'react-native';

const SliderContainer = (props: {
  children: React.ReactElement;
  trackMarks?: Array<number>;
  stateValue: [number, Dispatch<number>];
}) => {
  const {trackMarks, stateValue} = props;
  const [value, setValue] = stateValue;

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return <>{renderChildren()}</>;
};

export default SliderContainer;
