import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from './Home';
import Service from './Service';
import Training from './Training';

function SingInStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Service" component={Service} />
      <Tab.Screen name="Training" component={Training} />
    </Tab.Navigator>
  );
}

export default SingInStack;
