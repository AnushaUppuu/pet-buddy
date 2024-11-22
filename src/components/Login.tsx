import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function Login() {
    const nav=useNavigation<any>();
  return (
    <View style={styles.maincontainer}>
      <TextInput testID='username' placeholder="Username" style={styles.input} />
      <TextInput testID='password' placeholder="Password" style={styles.input} />
      <TouchableOpacity style={styles.loginButton} testID='login-button'>
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
