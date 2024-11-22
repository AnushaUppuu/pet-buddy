import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

function Register() {
    const nav=useNavigation<any>();
  return (
    <View style={styles.maincontainer}>
      <TextInput testID='username' placeholder="Username" style={styles.input} />
      <TextInput testID='password' style={styles.input} placeholder="Password" />
      <TextInput testID='confirm-password' style={styles.input} placeholder="ConfirmPassword" />
      <TextInput testID='email' style={styles.input} placeholder="Email Address" />
      <TextInput testID='phone-number' style={styles.input} placeholder="Phone Number" />
      <TextInput testID='address' style={styles.input} placeholder="Address" />
     <TouchableOpacity style={styles.input} testID='profile-add-button'>
        <Text>Add Profile picture</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.registerButton} testID='register-button'>
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
