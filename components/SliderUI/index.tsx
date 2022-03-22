import {Slider} from '@miblanchard/react-native-slider';
import React, {Dispatch} from 'react';
import {View} from 'react-native';
import {gradientSlider} from '../../constants/gradient';
import {customStyles4, trackMarkStyles} from './Styles';
import Thumb from './Thumb';

interface ISliderUI {
  stateValue: [number, Dispatch<number>];
}

const SliderContainer = (props: {
  children: React.ReactElement;
  trackMarks?: Array<number>;
  stateValue: [number, Dispatch<number>];
}) => {
  const {trackMarks, stateValue} = props;
  const [value, setValue] = stateValue;
  let renderTrackMarkComponent: React.ReactNode;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.activeMark
          : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return <>{renderChildren()}</>;
};

function SliderUI({stateValue}: ISliderUI) {
  const [value, setValue] = stateValue;

  return (
    <SliderContainer stateValue={[value, setValue]}>
      <Slider
        animateTransitions
        maximumValue={gradientSlider.length - 1}
        minimumValue={0}
        step={1}
        minimumTrackTintColor={gradientSlider[value].stop}
        renderThumbComponent={() => <Thumb index={value} />}
        trackStyle={customStyles4.track}
      />
    </SliderContainer>
  );
}

export default SliderUI;
