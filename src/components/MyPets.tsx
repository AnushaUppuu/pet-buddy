import React, {useContext} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext, GlobalContextProvider} from '../context/GlobalContext';
import { useNavigation } from '@react-navigation/native';

function MyPets() {
  const nav=useNavigation<any>();
  const {username} = useContext(GlobalContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profile} testID='profile-container'>
        <Text style={styles.userDetails} testID='username-text'>Hii! {username} </Text>
        <TouchableOpacity onPress={()=>nav.navigate('Profile')} testID='profile-button'>
        <Image
          style={styles.profileImage}
          source={require('../assessts/profile.jpg')}
        />
        </TouchableOpacity>
       
      </View>
      <View style={styles.myPets} testID='pets-container'>
        <Text>My pets</Text>
      </View>
      <TouchableOpacity style={styles.addPet} onPress={()=>nav.navigate('AddPet')} testID='addPet-button'>
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
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  userDetails: {
    fontWeight: 'bold',
    color: 'white',
  },
  myPets: {
    flex: 0.8,
  },
  addPet: {
    flex: 0.1,
    justifyContent:'center',
    alignItems:'flex-end',
    padding:10
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius:10
  },
  addpetText:{
    borderWidth:2,
    borderRadius:10,
    padding:10,
    width:100,
    textAlign:'right',
    fontWeight:'bold',
    backgroundColor:'limegreen',
    borderColor:'limegreen',
    color:'white'
  }
});
export default MyPets;
