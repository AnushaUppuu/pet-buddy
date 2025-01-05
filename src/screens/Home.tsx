import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPets from '../components/MyPets';
import Profile from '../components/Profile';
import AddPet from '../components/AddPet';
import Pet from '../components/Pet';
import Remainder from '../components/Remainder';
import Activity from '../components/Activity';
import Gallery from '../components/Gallery';
import {GlobalContext} from '../context/GlobalContext';
const Stack = createNativeStackNavigator();
import notifee, {EventType} from '@notifee/react-native';
import Loading from '../components/Loading';
import { NotificationContext } from '../context/NavigationContext';

function Home() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyPets"
        component={MyPets}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddPet" component={AddPet} />
      <Stack.Screen name="Pet" component={Pet} options={{headerShown: false}} />
      <Stack.Screen name="Remainder" component={Remainder} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  );
}

export default Home;
