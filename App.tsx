import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {InjuriesProvider} from './contexts/InjuriesContext';
import BackInjuries from './screens/BackInjuries';
import FrontInjuries from './screens/FrontInjuries';
import InjuriesResult from './screens/InjuriesResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <InjuriesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BodyFront" component={FrontInjuries} />
          <Stack.Screen name="BodyBack" component={BackInjuries} />
          <Stack.Screen name="InjuriesResult" component={InjuriesResult} />
        </Stack.Navigator>
      </NavigationContainer>
    </InjuriesProvider>
  );
};

export default App;
