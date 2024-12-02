import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { GlobalContext } from '../context/GlobalContext';

function Register() {
  const [usernametemp,setUsernameTemp]=useState('');
  const [password,setPassword]=useState('');
  const [confirmpassword,setConfirmPassword]=useState('');
  const[email,setEmail]=useState('');
  const [phonenumber,setPhoneNumber]=useState('');
  const [address,setAddress]=useState('');
  const[profile,setProfile]=useState<any>();
  const pickPicture = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64:true,
      mediaType:'photo'
    }).then(image => {
      // console.log(image.data);
      setProfile(image.data)
    });
  };
  const {setUsername}=useContext(GlobalContext);
  const navi=useNavigation<any>();
   async function handleRegister(){
    const value={
      username:usernametemp,
      password:password,
      email_address:email,
      phone_number:phonenumber,
      profile_picture:profile,
      address:address
    };
    console.log('entered in the register');
    if(usernametemp==""||password==""||email==""|| phonenumber==""){
      Alert.alert("Please fill the required details");
    }
    else{
      if(password!=confirmpassword){
        Alert.alert("Check the password! it is not matching the confirm password");
      }
      const result=await fetch(`http://localhost:4000/users/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(value)
      })
      if(result.ok){
        console.log("YEs");
        setUsername(usernametemp);
        Alert.alert("User registered successfully");
        navi.navigate('SingnedIn')
      }
      else{
        Alert.alert("Try again");
      }
    }
   }
    const nav=useNavigation<any>();
  return (
    <View style={styles.maincontainer}>
      <TextInput onChangeText={setUsernameTemp} testID='username' placeholder="Username" style={styles.input} />
      <TextInput onChangeText={setPassword} testID='password' style={styles.input} placeholder="Password" />
      <TextInput onChangeText={setConfirmPassword} testID='confirm-password' style={styles.input} placeholder="ConfirmPassword" />
      <TextInput onChangeText={setEmail} testID='email' style={styles.input} placeholder="Email Address" />
      <TextInput onChangeText={setPhoneNumber} testID='phone-number' style={styles.input} placeholder="Phone Number" />
      <TextInput onChangeText={setAddress} testID='address' style={styles.input} placeholder="Address" />
     <TouchableOpacity style={styles.input} testID='profile-add-button' onPress={pickPicture}>
        <Text>Add Profile picture</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.registerButton} testID='register-button' onPress={()=>handleRegister()}>
        <Text style={styles.registertext}>Register</Text>
     </TouchableOpacity>
     <View style={styles.LoginTextContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity testID='login-text' onPress={()=>nav.navigate('Login')}>
        <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        
     </View>
    </View>
  );
}
const styles=StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        height: 45,
        width: '80%',
        fontSize:17,
        fontWeight:"bold",
        backgroundColor:"lightgrey",
        borderColor:"lightgrey"
      },
      maincontainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
      },
      registerButton: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        height: 50,
        width: '80%',
        backgroundColor: 'limegreen',
        borderColor: 'limegreen',
      },
      registertext: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:"center",
        fontSize:19,
      },
      LoginTextContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      text: {
        // fontWeight: 'bold',
        fontSize: 18,
        color: 'green',
      },
})
export default Register;
