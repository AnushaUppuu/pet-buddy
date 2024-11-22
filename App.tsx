/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Starting from './src/components/Starting';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingnedOutStack from './src/screens/SingnedOutStack';
import SingInStack from './src/screens/SingInStack';
import { GlobalContext, GlobalContextProvider } from './src/context/GlobalContext';
const Stack=createNativeStackNavigator();
function App(): React.JSX.Element {
  const [username,setUsername]=useState('');
  const [petname,setPetName]=useState('');
  return (
    <GlobalContextProvider>
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='SingnedOut' component={SingnedOutStack} options={{headerShown:false}}/>
      <Stack.Screen name='SingnedIn' component={SingInStack} options={{headerShown:false}}/>
     </Stack.Navigator>
    </NavigationContainer>
    </GlobalContextProvider>
 
  );
}

const styles = StyleSheet.create({
  app:{
    flex:1,
    
  }
});

export default App;
