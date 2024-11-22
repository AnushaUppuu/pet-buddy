import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Starting from '../components/Starting';
import Login from '../components/Login';
import Register from '../components/Register';
const Stack= createNativeStackNavigator();
function SingnedOutStack() {
  return (
   <Stack.Navigator>
    <Stack.Screen name='Starting' component={Starting}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Register' component={Register}/>
   </Stack.Navigator>
  )
}

export default SingnedOutStack