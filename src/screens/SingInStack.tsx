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
            <Icon name="home" size={20} color={focused ? 'white' : 'green'} />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon2
              name="location-outline"
              size={20}
              color={focused ? 'white' : 'green'}
            />
            //  const  url= focused?'https://cdn-icons-png.flaticon.com/512/25/25694.png
            //     <Image />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={Training}
        options={{
          tabBarIcon: ({focused}) => (
            <MIcon name="dog" size={20} color={focused ? 'white' : 'green'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default SingInStack;
