import React, {useContext, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TPet} from '../types/TPet';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalContext';

function EachPet({pet}: any) {
 const {petname,setPetName}=useContext(GlobalContext)
  const nav=useNavigation<any>();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity testID='pet-image' onPress={()=>{
        setPetName(pet.item.name);
        nav.navigate('Pet')}}>
        <Image style={styles.image} source={{uri:`data:image/jpeg;base64,${pet.item.profileImage}`}} />
      </TouchableOpacity>
      <View style={styles.details}>
        <Text testID='name' style={styles.name}>{pet.item.name}</Text>
        <Text testID='breed'>{pet.item.breed}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 130,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  details: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingVertical: 25,
    paddingRight: 15,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'flex-start',
  },
});
export default EachPet;
