import {GlobalContext} from '../context/GlobalContext';
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingnedOutStack from './SingnedOutStack';
import SingInStack from './SingInStack';
const Stack = createNativeStackNavigator();
import notifee, {EventType} from '@notifee/react-native';
import Loading from '../components/Loading';
import {Alert, Platform} from 'react-native';

function Main(): React.JSX.Element {
  async function handleActivity(data:any){
    const value={
      name:data.activityname,
      timePeriod:data.fromHour.toString().concat(data.toHour)
    };
    const result=await fetch(`https://pet-buddy-backend.onrender.com/pets/addActivity/${data.username}/${data.petname}`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(value)
    })
    if(result.ok){
      Alert.alert('Add to the activity');
    }
    else{
      Alert.alert('Not added');
    }
  }
  useEffect(() => {
    const notiFun = notifee.onForegroundEvent(async ({type, detail}) => {
      if (type === EventType.ACTION_PRESS) {
        console.log('User pressed the notification.');
        if (Platform.OS == 'android' && detail.pressAction?.id==="accept") {
          console.log(detail.notification?.data);
          handleActivity(detail.notification?.data);
        } else if (Platform.OS == 'ios') {
          console.log(detail);
          handleActivity(detail.notification?.data)
        }
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
          name="Loading"
          component={Loading}
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
