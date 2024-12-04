import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
function AddImage({modalVisible, setModalVisible}: any) {
  const [uri, setUri] = useState<any>();
  const pickPicture = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64:true,
      mediaType:'photo'
    }).then(image => {
      console.log(image.data);
      setUri(image.data);
    });
  };
  async function handleAdd(){
     const result=await fetch('')
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.container}>
            <View style={styles.detailsContainer}>
              <TouchableOpacity
                onPress={pickPicture}
                style={styles.imageButton} testID='image-button'>
                <Text style={styles.imageButtonText}>Select the image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '100%'}} testID='add-button'>
                <Text style={styles.addButton}>Add</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.cross}
              testID='cross-button'
              onPress={() => setModalVisible(false)}>
              <Text style={styles.crossText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightgreen',
    borderColor: 'lightgreen',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '80%',
  },
  addButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    borderColor: 'green',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
  imageButtonText: {
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  imageButton: {
    width: '80%',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'floralwhite',
    borderColor: 'floralwhite',
  },
  detailsContainer: {
    gap: 10,
    width: '90%',
  },
  cross: {
    borderWidth: 2,
    height: '25%',
    width: '10%',
    borderRadius: 20,
    backgroundColor: 'red',
    borderColor: 'red',
  },
  crossText: {
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default AddImage;
