import {NavigationContext} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import BodyBack from '../../components/BodyBack';
import ButtonUI from '../../components/ButtonUI';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import H5 from '../../components/H5';
import SliderUI from '../../components/SliderUI';
import {useInjuries} from '../../contexts/InjuriesContext';
import {ButtonsContainer, Container} from './Styles';

function BackInjuries() {
  const navigation = useContext(NavigationContext);

  const context = useInjuries();

  const {
    valueState: [value, setValue],
    musclesState,
    onNextHandler,
  } = context;

  const onSkipHandler = useCallback(
    () => navigation?.navigate('Result'),
    [navigation],
  );

  return (
    <Container>
      <H4>Injury 2/2</H4>
      <H1>Log your injuries</H1>
      <H4>Together we can build a lasting plan!</H4>
      <BodyBack indexGradientSlider={value} musclesState={musclesState} />
      <H5>Range of Severity</H5>
      <SliderUI stateValue={[value, setValue]} />
      <ButtonsContainer>
        <ButtonUI onPress={onNextHandler}>Next</ButtonUI>
        <ButtonUI type="secondary" onPress={onSkipHandler}>
          Skip
        </ButtonUI>
      </ButtonsContainer>
    </Container>
  );
}

export default BackInjuries;
