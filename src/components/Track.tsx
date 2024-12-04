import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';

function Track({modalVisible, setModalVisible}: any) {
  const nav = useNavigation<any>();
  return (
    <View>
      <Modal
        testID="modal"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{flex: 1}}>
        <View style={[styles.flexContainer]}>
          <View style={styles.mainContainer}>
            <TouchableOpacity
              style={styles.box}
              testID="remainder-button"
              onPress={() => {
                setModalVisible(false);
                nav.navigate('Remainder');
              }}>
              <View style={styles.iconText}>
                <FIcon name="package" size={20} />
                <Text style={styles.boxText}>Remainders</Text>
              </View>

              <Text style={styles.boxText}>{'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              testID="activity-button"
              onPress={() => {
                setModalVisible(false);
                nav.navigate('Activity');
              }}>
              <View style={styles.iconText}>
                <FIcon name="activity" size={20} />
                <Text style={styles.boxText}>Activities</Text>
              </View>

              <Text style={styles.boxText}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    padding: 10,
    width: '60%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'blue',
    alignSelf: 'center',
    alignContent: 'flex-end',
    gap: 10,
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    gap: 10,
  },
  boxText: {
    fontWeight: 'bold',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});
export default Track;
