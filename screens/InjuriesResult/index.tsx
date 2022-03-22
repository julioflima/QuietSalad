import {NavigationContext} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import ButtonUI from '../../components/ButtonUI';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import H5 from '../../components/H5';
import {useInjuries} from '../../contexts/InjuriesContext';
import {ButtonsContainer, Container} from './Styles';

function BackInjuries() {
  const navigation = useContext(NavigationContext);

  const context = useInjuries();
  const {
    injuriesState: [injuries],
  } = context;

  const onSkipHandler = useCallback(
    () => navigation?.navigate('BodyBack'),
    [navigation],
  );

  return (
    <Container>
      <H4>Injury 1/2</H4>
      {injuries.map(injury => (
        <H4 key={injury.injurie}>{injury.injurie}</H4>
      ))}
      <H1>Log your injuries</H1>
      <H4>
        Is there any area I should be more cautious about? All my workouts will
        be built with this in mind.
      </H4>
      <H5>Range of Severity</H5>
      <ButtonsContainer>
        <ButtonUI type="secondary" onPress={onSkipHandler}>
          Skip
        </ButtonUI>
      </ButtonsContainer>
    </Container>
  );
}

export default BackInjuries;
