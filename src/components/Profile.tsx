import React, { useContext, useEffect, useState } from 'react'
import { View,Text, Image, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'
import { TUser } from '../types/TUser';
import FTIcon from 'react-native-vector-icons/Fontisto';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Feather';

function Profile() {
  const {username}=useContext(GlobalContext);
  const [userData,setUserData]=useState<TUser>()
  const [url,setUrl]=useState('');
  const nav=useNavigation<any>();
  useEffect(()=>{
    async function fetching(){
      let baseurl="https://pet-buddy-backend.onrender.com";
      if(Platform.OS==="android"){
        baseurl="https://pet-buddy-backend.onrender.com"
      }
      console.log(baseurl);
      const result=await fetch(`${baseurl}/users/getSingleUser/${username}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      })
      const value=await result.json();
      setUserData(value);
      setUrl(value.profile_picture);
    }
    if(username){
      console.log("yes")
    fetching();
    console.log(url);
    }
  },[])
  return (
   <View>
    
    <Image style={{width:"70%",height:"50%", borderRadius:70, justifyContent:"center",alignSelf:"center"}} source={{uri:userData?.profile_picture?`data:image/jpeg;base64,${userData.profile_picture.toString()}`:""}} testID='profile-image'/>
    <View style={styles.mainDetails}>
      <View style={styles.nameEmail}>
      <Text style={styles.name} testID='Username'>{username}</Text>
      <Text style={styles.emailNumber} testID='email'><FTIcon name='email' size={20}/> {userData?.email_address}</Text>
      <Text style={styles.emailNumber}testID='phone-number'><IIcon name='call-outline' size={20}/> {userData?.phone_number}</Text>
      </View>
      <TouchableOpacity onPress={()=>nav.navigate('SingnedOut')}testID='sign-out' >
        <Text style={styles.signOut}><AIcon name='logout' size={18}/> Sign out</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.moreDetailsContainer}>
      <TouchableOpacity style={styles.buttonContainer} testID='mypets' onPress={()=>nav.navigate('MyPets')}>
        <View style={styles.button}>
          <FIcon name='package' size={20}/>
        <Text>My Pets</Text>
        </View>
       <AIcon name='right'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} testID='my-address'>
        <View style={styles.button}>
          <IIcon name='location-outline' size={20}/>
        <Text >My Address</Text>
        </View>
        <AIcon name='right'/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} testID='add-pet' onPress={()=>nav.navigate('AddPet')}>
        <View style={styles.button}>
          <IIcon name='paw-outline' size={20}/>
        <Text>Add Pet</Text>
        </View>
        <AIcon name='right'/>
      </TouchableOpacity>
    </View>
   </View>
  )
}
const styles=StyleSheet.create({
  mainDetails:{
    borderWidth:2,
    borderRadius:10,
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    backgroundColor:'white',
    borderColor:'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nameEmail:{
     gap:20,
  },
  name:{
    fontSize:17,
    fontWeight:'bold',
  },
  emailNumber:{
    fontSize:15,
    alignItems:'center',
    justifyContent:'center'
  },
  signOut:{
    color:"red",
    textAlign:'center',
    justifyContent:'center',
   
  },
  moreDetailsContainer:{
    borderWidth:2,
    borderRadius:10,
    padding:10,
    margin:10,
    backgroundColor:'white',
    borderColor:'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:"space-between",
    padding:10
  },
  button:{
    display:'flex',
    flexDirection:'row',
    gap:10,
  }
})
export default Profile