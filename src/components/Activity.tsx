import React, { useContext } from 'react'
import { FlatList, Text, View } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'
import EachRemainder from './EachRemainder';

function Activity() {
  const {petdata}=useContext(GlobalContext);
  
  const length=petdata?.activity?petdata?.activity?.length:0;
  return (
    <View>
        <Text testID='heading'>Activities</Text>
        {petdata?.activity&&
        <FlatList
        testID='flat-list'
        data={petdata.activity}
        renderItem={(item)=><EachRemainder remainder={item}/>}
        keyExtractor={(item,index)=>index.toString()}
        />
        }
        {length==0 &&
        <View >
          <Text testID='nodata'>No activities yet!</Text>
          </View>}
    </View>
  )
}

export default Activity