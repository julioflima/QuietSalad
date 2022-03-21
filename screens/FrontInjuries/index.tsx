import {NavigationContext} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import BodyFront from '../../components/BodyFront';
import ButtonUI from '../../components/ButtonUI';
import H1 from '../../components/H1';
import H4 from '../../components/H4';
import H5 from '../../components/H5';
import {Container} from './Styles';

function FrontInjuries() {
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
      <BodyFront />
      <H5>Range of Severity</H5>
      <ButtonUI type="secondary">Next</ButtonUI>
      <ButtonUI>Skip</ButtonUI>
    </Container>
  );
}

export default FrontInjuries;
