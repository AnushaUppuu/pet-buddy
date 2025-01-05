import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext, GlobalContextProvider} from '../context/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import {TPet} from '../types/TPet';
import EachPet from './EachPet';

function MyPets() {
  const nav = useNavigation<any>();
  const {username} = useContext(GlobalContext);
  const [petdata, setPetData] = useState<TPet[]>([]);
  useEffect(() => {
    async function fetching() {
      const result = await fetch(
        `https://pet-buddy-backend.onrender.com/pets/getAllPets/${username}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const value = await result.json();
      setPetData(value);
      // console.log(value);
    }
    fetching();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profile} testID="profile-container">
        <Text style={styles.userDetails} testID="username-text">
          Hey! {username}{' '}
        </Text>
        <TouchableOpacity
          onPress={() => nav.navigate('Profile')}
          testID="profile-button">
          <Image
            style={styles.profileImage}
            source={require('../assessts/profile.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.myPetTextContainer}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assessts/pawprintBlack.png')}
        />
        <Text style={styles.myPetText}>My pets</Text>
      </View>
      <View style={styles.myPets} testID="pets-container">
        {petdata && (
          <FlatList testID='flat-list-pets'
            data={petdata}
            renderItem={item => <EachPet pet={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.addPet}
        onPress={() => nav.navigate('AddPet')}
        testID="addPet-button">
        <Image
          style={{width: 40, height: 40 }}
          source={require('../assessts/pawprint.png')}
        />
        <Text style={styles.addpetText}>Add Pet</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  profile: {
    backgroundColor: 'green',
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  
  },
  userDetails: {
    fontWeight: 'bold',
    color: 'white',
  },
  myPets: {
    flex: 0.9,
    backgroundColor: 'lightgreen',
    borderRadius:10,
    margin:5,
  },
  addPet: {
    flex: 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    width: '50%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    margin:3,
  },
  addpetText: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  myPetText: {
    // backgroundColor: 'white',
    fontWeight: 'bold',
    textAlign:"center",
    alignSelf:'center'

  },
  myPetTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 17,
    margin: 10,
    // overflow:'hidden',
    backgroundColor:'white',
    borderColor:'white',
  shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding:3,
  },
});
export default MyPets;
