import React, {useContext, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';
import ImageCropPicker from 'react-native-image-crop-picker';

function AddPet() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');
  const [remarks, setRemarks] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [breed, setBreed] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [profile, setProfile] = useState<any>();
  const {username, petname} = useContext(GlobalContext);
  const pickPicture = () => {
    
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    }).then(image => {
      setProfile(image.data);
    }).catch(error => {
      console.error('Error picking image:', error);
    });
  };
  async function handleAdd() {
    const value = {
      name: name,
      age: age,
      weight: weight,
      height: height,
      color: color,
      remarks: remarks,
      gender: gender,
      category: category,
      breed: breed,
      emergencyContact: emergencyContact,
      profileImage: profile,
      username: username,
    };
    const result = await fetch(`https://pet-buddy-backend.onrender.com/pets/addPet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });
    if (result.ok) {
      Alert.alert('Pet added successfully');
    } else {
      Alert.alert(`Try again ${result.status}`);
    }
  }
  return (
    <View style={styles.mainContainer}>
      <TextInput
        onChangeText={setName}
        style={styles.input}
        testID="petname"
        placeholder="Petname"
      />
      <TextInput
        onChangeText={setAge}
        style={styles.input}
        testID="petage"
        placeholder="Pet age"
      />
      <TextInput
        onChangeText={setWeight}
        style={styles.input}
        testID="petweight"
        placeholder="Pet weight"
      />
      <TextInput
        onChangeText={setHeight}
        style={styles.input}
        testID="petheight"
        placeholder="Pet height"
      />
      <TextInput
        onChangeText={setColor}
        style={styles.input}
        testID="petcolor"
        placeholder="Pet color"
      />
      <TextInput
        onChangeText={setRemarks}
        style={styles.input}
        testID="petremarks"
        placeholder="remarks"
      />
      <TextInput
        onChangeText={setGender}
        style={styles.input}
        testID="petgender"
        placeholder="Pet Gender"
      />
      <TextInput
        onChangeText={setCategory}
        style={styles.input}
        testID="petcategory"
        placeholder="Pet category"
      />
      <TextInput
        onChangeText={setBreed}
        style={styles.input}
        testID="petbreed"
        placeholder="Pet breed"
      />
      <TextInput
        onChangeText={setEmergencyContact}
        style={styles.input}
        testID="emergencyContact"
        placeholder="emergencyContact"
      />
      <TouchableOpacity
        style={styles.input}
        testID="profilepicture"
        onPress={pickPicture}>
        <Text>Choose pet profile picture</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        testID="add-button"
        onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 40,
    width: '80%',
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
  },
  mainContainer: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
  },
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});
export default AddPet;
