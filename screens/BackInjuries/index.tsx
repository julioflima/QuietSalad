import {NavigationContext} from '@react-navigation/native';
import React, {ReactNode, useContext, useEffect} from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

interface BackInjuriesProps {
  children: ReactNode;
}

function BackInjuries({children}: BackInjuriesProps) {
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    navigation?.navigate('BodyBack');
  }, [navigation]);

  return (
    <Container>
      <Text>BackInjuries</Text>
      {children}
    </Container>
  );
}

export default BackInjuries;
