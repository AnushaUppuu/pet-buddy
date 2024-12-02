import {GlobalContext} from '../context/GlobalContext';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingnedOutStack from './SingnedOutStack';
import SingInStack from './SingInStack';
const Stack = createNativeStackNavigator();
import notifee, {EventType} from '@notifee/react-native';

function Main(): React.JSX.Element {
  const {triggered, setTriggered} = useContext(GlobalContext);
  useEffect(() => {
    const notiFun = notifee.onForegroundEvent(async ({type, detail}) => {
      if (type === EventType.PRESS) {
        console.log('User pressed the notification.');
        console.log(detail);
        setTriggered(true);
      }
    });
    return () => {
      notiFun();
    };
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SingnedOut"
          component={SingnedOutStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingnedIn"
          component={SingInStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
