import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {InjuriesProvider} from './contexts/InjuriesContext';
import BackInjuries from './screens/BackInjuries';
import FrontInjuries from './screens/FrontInjuries';
import Result from './screens/Result';

const Stack = createStackNavigator();

const App = () => {
  return (
    <InjuriesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BodyFront" component={FrontInjuries} />
          <Stack.Screen name="BodyBack" component={BackInjuries} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </InjuriesProvider>
  );
};

export default App;
