import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Starting() {
  return (
    <View style={styles.mainContainer}>
      <Image
      testID='pet-image'
        style={styles.image}
        source={{
          uri: 'https://assets-au-01.kc-usercontent.com/1f0619a0-4164-0241-3335-de16f4a2d9f3/b03078fb-e2c9-4967-932f-fb082a06bf47/article-best-dog-breeds-families-golden-retriever.jpg',
        }}
      />
      <Modal
        testID='modal'
        animationType={'slide'}
        visible={true}
        transparent={true}
        style={{flex: 1, backgroundColor: 'green'}}>
        <View style={styles.modal}>
          <View style={styles.subContainer}>
            <Text style={styles.boldText}>Hey ! Welcome</Text>
            <Text style={styles.level2Text}>
              While you sit and stay - we'll go out and play
            </Text>
            <TouchableOpacity style={styles.startButtonContainer} testID='start-button'>
              <Text style={styles.startButton}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    flex: 0.9,
  },
  startButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '40%',
    backgroundColor: 'limegreen',
    overflow: 'hidden',
    borderColor: 'limegreen',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  startButtonContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: 'floralwhite',
    flex: 0.2,
    width: '100%',
    alignSelf: 'center',
    borderWidth:2,
    borderRadius:10,
    borderColor:'floralwhite'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 29,
    textAlign: 'center',
  },
  level2Text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
export default Starting;
