import {NavigationContext} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import BodyBack from '../../components/BodyBack';
import ButtonUI from '../../components/ButtonUI';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import H5 from '../../components/H5';
import {Container} from './styles';

function BackInjuries() {
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    navigation?.navigate('BodyBack');
  }, [navigation]);

  return (
    <Container>
      <H4>Injury 1/2</H4>
      <H1>Log your injuries</H1>
      <H4>
        Is there any area I should be more cautious about? All my workouts will
        be built with this in mind.
      </H4>
      <BodyBack />
      <H5>Range of Severity</H5>
      <ButtonUI>Next</ButtonUI>
      <ButtonUI type="secondary">Skip</ButtonUI>
    </Container>
  );
}

export default BackInjuries;
