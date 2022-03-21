import {NavigationContext} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import BodyBack from '../../components/BodyBack';
import {Container} from './styles';

function BackInjuries() {
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    navigation?.navigate('BodyBack');
  }, [navigation]);

  return (
    <Container>
      <BodyBack />
    </Container>
  );
}

export default BackInjuries;
