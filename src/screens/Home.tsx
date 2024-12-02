import React, { useContext, useEffect } from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyPets from '../components/MyPets';
import Profile from '../components/Profile';
import AddPet from '../components/AddPet';
import Pet from '../components/Pet';
import Remainder from '../components/Remainder';
import Activity from '../components/Activity';
import Gallery from '../components/Gallery';
import { GlobalContext } from '../context/GlobalContext';
const Stack = createNativeStackNavigator();
import notifee, { EventType } from '@notifee/react-native'

function Home() {
  const {triggered,setTriggered,acivityname,timePeriod,username,petname}=useContext(GlobalContext);
  useEffect(()=>{
    
      async function fetcthing() {
        console.log("username",username);
        console.log("activityname",acivityname);
        const value = {
          name: acivityname,
          timePeriod: timePeriod,
        };
        const result = await fetch(
          `http://localhost:4000/pets/addActivity/${username}/${petname}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(value),
          },
        );
        if (result.ok) {
          console.log('Added to activity');
        }
      }
      fetcthing();
     
  },[triggered])
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPets" component={MyPets} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddPet" component={AddPet} />
      <Stack.Screen name="Pet" component={Pet}  options={{headerShown:false}}/>
      <Stack.Screen name='Remainder' component={Remainder}/>
      <Stack.Screen name='Activity' component={Activity}/>
      <Stack.Screen name='Gallery' component={Gallery}/>
    </Stack.Navigator>
  );
}

export default Home;
