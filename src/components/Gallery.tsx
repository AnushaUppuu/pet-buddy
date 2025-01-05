import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext} from '../context/GlobalContext';

import ImageCropPicker from 'react-native-image-crop-picker';
function Gallery() {
  const {petdata, petname, username} = useContext(GlobalContext);
  const url = '';
  const [uri, setUri] = useState<any>("");
 
  useEffect(() => {
    console.log('triggered');
    async function handleAdd() {
      const result = await fetch(
        `https://pet-buddy-backend.onrender.com/pets/petImage/${username}/${petname}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({petImage: uri}),
        },
      );
      if (result.ok) {
        Alert.alert('Pet image added successfully');
      } else {
        Alert.alert(`${result.status}`);
      }
    }
    if(uri!==""){
    handleAdd();
    }
  }, [uri]);
  const pickPicture = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    }).then(image => {
      console.log(image.data);
      setUri(image.data);
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading} testID="pet-name">
        Gallery of {petdata?.name}
      </Text>
      {petdata && (
        <FlatList
          testID="flat-list"
          style={styles.flatList}
          numColumns={2}
          data={petdata.gallery}
          renderItem={item => (
            <Image
              style={{width: 200, height: 200, padding: 10, borderRadius: 10}}
              source={{
                uri: item.item
                  ? `data:image/jpeg;base64,${item.item.toString()}`
                  : url,
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <TouchableOpacity
        style={styles.addButtonContainer}
        onPress={pickPicture}
        testID="add-button">
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  heading: {
    flex: 0.1,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    color: 'limegreen',
  },
  flatList: {
    flex: 0.7,
  },
  addButtonContainer: {
    flex: 0.2,
    padding: 10,
  },
  addButton: {
    borderWidth: 2,
    width: 40,
    height: 40,
    textAlign: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    fontSize: 27,
    fontWeight: 'bold',
    alignContent: 'center',
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
    color: 'white',
  },
});
export default Gallery;
