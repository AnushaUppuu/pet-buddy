import React, {useContext, useEffect, useState} from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';
import {TPet} from '../types/TPet';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IIcon from 'react-native-vector-icons/Ionicons';
import AIcons from 'react-native-vector-icons/AntDesign';
import Track from './Track';
function Pet() {
  const {petname, username, setPetData} = useContext(GlobalContext);
  const [petdatatemp, setPetDataTemp] = useState<TPet>();
  const [peturl, setPetUrl] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation<any>();
  useEffect(() => {
    async function fetching() {
      const result = await fetch(
        `https://pet-buddy-backend.onrender.com/pets/getSinglePet/${username}/${petname}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const value = await result.json();

      setPetDataTemp(value);
      setPetData(value);
      setPetUrl(value.profileImage);
    }
    fetching();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{uri:`data:image/jpeg;base64,${peturl}`}} testID="pet-image" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => nav.goBack()}
        testID="back-arrow">
        <Text style={styles.backButtonText}><AIcons name='left' size={20}/></Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraIconButton}
        testID="camera-button">
        <Text style={styles.cameraIcon} ><IIcon name='camera-outline' size={30} color={'white'}/></Text>
      </TouchableOpacity>
      <View style={styles.generalDetails} testID="general-details">
        <View>
          <Text style={styles.name}>{petname}</Text>
          <Text style={styles.breedContact}>{petdatatemp?.breed}</Text>
          <TouchableOpacity onPress={()=> {Linking.openURL(`tel:${petdatatemp?.emergencyContact}`);}}>
          <Text style={styles.breedContact}>
            {petdatatemp?.emergencyContact}
          </Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{width: 40, height: 40}}
          source={{
            uri: 'https://cdn-icons-png.freepik.com/256/14987/14987365.png?semt=ais_hybrid',
          }}
        />
      </View>
      <View style={styles.AboutTextContainer} testID="about-text">
        <IIcon name="paw-outline" size={28} />
        <Text style={styles.AboutText}>About {petname}</Text>
      </View>

      <View style={styles.aboutDetails}>
        <TouchableOpacity style={styles.box} testID="age-button">
          <Text>Age</Text>
          <Text style={styles.textLevel1}>{petdatatemp?.age}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} testID="weight-button">
          <Text>Weight</Text>
          <Text style={styles.textLevel1}>{petdatatemp?.weight}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} testID="height-button">
          <Text>Height</Text>
          <Text style={styles.textLevel1}>{petdatatemp?.height}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} testID="color-button">
          <Text>Color</Text>
          <Text style={styles.textLevel1}>{petdatatemp?.color}</Text>
        </TouchableOpacity>
      </View>
      {petdatatemp?.remarks && (
        <View>
          <Text>Remarks</Text>
          <Text>{petdatatemp.remarks}</Text>
        </View>
      )}
      <TouchableOpacity style={{flex: 0.1}} onPress={()=>nav.navigate('Gallery')}>
        <Text style={styles.galleryButton}>Gallery <AIcons name='right' size={20}/> </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 0.1}}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.track}>Track</Text>
      </TouchableOpacity>
      <Track modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',

    borderRadius: 10,
    flex: 0.6,
  },
  generalDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flex: 0.1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  breedContact: {
    color: 'darkcyan',
    fontWeight: 'bold',
  },
  aboutDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.1,
  },
  box: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'darkseagreen',
    borderColor: 'darkseagreen',
    shadowColor: 'darkcyan',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  galleryButton: {
    borderWidth: 2,
    width: '30%',
    padding: 5,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'limegreen',
    color: 'white',
    borderColor: 'limegreen',
    fontWeight: 'bold',
    textAlign:"center",
   
  },
  track: {
    borderWidth: 2,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  AboutText: {
    fontWeight: 'bold',
    padding: 5,
  },
  AboutTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  mainContainer: {
    flex: 1,
  },
  backButton: {
    margin: 5,
    position: 'absolute',
    top: 30,
    left: 15,
    width: 30,
    height: 33,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
    justifyContent: 'center',
    textAlign: 'center',
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  textLevel1: {
    textAlign: 'center',
    color: 'darkcyan',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cameraIconButton:{
    position:"absolute",
    top:320,
    left:320,
    height:40,
    width:40,
    backgroundColor:"green",
    textAlign:"center",
    borderRadius:5,
  },
  cameraIcon:{
    textAlign:"center",
    alignSelf:"center",
    padding:5,
  }
});
export default Pet;
