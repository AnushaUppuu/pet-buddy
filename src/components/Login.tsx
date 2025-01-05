import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useState } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { GlobalContext } from '../context/GlobalContext';
import { platform } from 'os';

function Login() {
    const nav=useNavigation<any>();
    const [tempusername,setTempUsername]=useState('');
    const [password,setPassword]=useState('');
    const {username,setUsername}=useContext(GlobalContext);
    const [showPassword, setShowPassword] = useState(false);
    const value={
      username:tempusername,
      password:password
    }
    async function handleLogin(){
      console.log("Triggered");
       console.log(value);
       if(tempusername!=""|| password!=""){
          const result=await fetch(`https://pet-buddy-backend.onrender.com/users/login`,{
            method:"POST",
            headers:{
              "Content-Type":'application/json'
            },
            body:JSON.stringify(value)
          });

          if(result.ok){
            setUsername(tempusername);
            nav.navigate('Loading')
          }
          else{
            Alert.alert('Tryagain');
          }
       }else{
        Alert.alert('Please enter the username and password')
       }
    }
  return (
    <View style={styles.maincontainer}>
      <TextInput testID='username' placeholder="Username" style={styles.input} onChangeText={setTempUsername}/>
      <TextInput testID='password' placeholder="Password" style={styles.input} onChangeText={setPassword} secureTextEntry={true}/>
      <TouchableOpacity style={styles.loginButton} testID='login-button' onPress={handleLogin}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerTextContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>nav.navigate('Register')} testID='register-text'>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 50,
    width: '80%',
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
  },
  logintext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center",
    fontSize:19,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 50,
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
  registerTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    // fontWeight: 'bold',
    fontSize: 18,
    color: 'green',
  },
});
export default Login;
