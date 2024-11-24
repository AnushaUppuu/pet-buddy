import React from 'react';
import {StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View} from 'react-native';

function AddPet() {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.input} testID='petname' placeholder='Petname'/>
      <TextInput style={styles.input} testID='petage' placeholder='Pet age'/>
      <TextInput style={styles.input} testID='petweight' placeholder='Pet weight'/>
      <TextInput style={styles.input} testID='petheight' placeholder='Pet height'/>
      <TextInput style={styles.input} testID='petcolor' placeholder='Pet color'/>
      <TextInput style={styles.input} testID='petremarks' placeholder='remarks'/>
      <TextInput style={styles.input} testID='petgender' placeholder='Pet Gender'/>
      <TextInput style={styles.input} testID='petcategory' placeholder='Pet category'/>
      <TextInput style={styles.input} testID='petbreed' placeholder='Pet breed'/>
      <TextInput style={styles.input} testID='emergencyContact' placeholder='emergencyContact'/>
      <TouchableOpacity style={styles.input} testID='profilepicture'>
        <Text>Choose pet profile picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} testID='add-button'>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles=StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: '80%',
    fontSize:17,
    fontWeight:"bold",
    backgroundColor:"lightgrey",
    borderColor:"lightgrey"
  },
  mainContainer:{
    flex:1,
    gap:10,
    justifyContent:"center",
    alignItems:"center"
  },
  addButton:{
    borderWidth:2,
    borderRadius:10,
    padding:10,
    backgroundColor:'limegreen',
    borderColor:'limegreen'
  },
  addButtonText:{
    fontWeight:'bold',
    fontSize:15,
    color:'white',
  }
})
export default AddPet;
