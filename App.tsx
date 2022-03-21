import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import BackInjuries from './screens/BackInjuries';
import FrontInjuries from './screens/FrontInjuries';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BodyFront" component={FrontInjuries} />
        <Stack.Screen name="BodyBack" component={BackInjuries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
