import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-svg';
import {InjuriesContext} from '../../contexts/InjuriesContext';

function Result() {
  const context = useContext(InjuriesContext);

  const [injuries] = context.injuriesState;

  return (
    <View>
      {injuries.map(injury => (
        <Text key={injury.injurie + ',' + injury.severity}>
          {/* {injury.injurie} , {injury.severity} */}
        </Text>
      ))}
    </View>
  );
}

export default Result;
