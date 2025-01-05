import React, {useContext, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Home from './Home';
import Service from './Service';
import Training from './Training';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function SingInStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'green',
        tabBarStyle: {
          backgroundColor: 'limegreen',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon name="home" testID='homeIcon' size={25} color={focused ? 'white' : 'green'} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Georgia',
            fontWeight: 300,
            color:"green"
          },
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon2
              name="location-outline"
              size={25}
              color={focused ? 'white' : 'green'}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Georgia',
            fontWeight: 100,
            color:"green"
          },
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: ({focused}) => (
            <MIcon name="dog" size={25} color={focused ? 'white' : 'green'} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Georgia',
            fontWeight: 300,
            color:"green"
          },
          tabBarActiveTintColor:"white"
        }}
      />
    </Tab.Navigator>
  );
}

export default SingInStack;
