import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import BodyBack from './components/BodyBack';
import BodyFront from './components/BodyFront';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BodyFront}
          options={{title: 'BodyFront'}}
        />
        <Stack.Screen
          name="Home"
          component={BodyBack}
          options={{title: 'BodyBack'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
