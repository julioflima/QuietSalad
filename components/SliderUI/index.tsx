import {Slider} from '@miblanchard/react-native-slider';
import React, {Dispatch} from 'react';
import {gradientSlider} from '../../constants/gradient';
import SliderContainer from './SliderContainer';
import {customStyles4} from './Styles';
import Thumb from './Thumb';

interface ISliderUI {
  stateValue: [number[], Dispatch<number[]>];
}

function SliderUI({stateValue}: ISliderUI) {
  const [value, setValue] = stateValue;

  return (
    <SliderContainer stateValue={[value, setValue]}>
      <Slider
        animateTransitions
        maximumValue={gradientSlider.length - 1}
        minimumValue={0}
        step={1}
        minimumTrackTintColor={gradientSlider[value[0]].stop}
        renderThumbComponent={() => <Thumb index={value[0]} />}
        trackStyle={customStyles4.track}
      />
    </SliderContainer>
  );
}

export default SliderUI;
