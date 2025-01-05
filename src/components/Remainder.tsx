import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import {GlobalContext} from '../context/GlobalContext';
import EachRemainder from './EachRemainder';
import AddRemainder from './AddRemainder';
import {TRemainder} from '../types/TRemainder';

function Remainder() {
  const {username, petname, petdata} = useContext(GlobalContext);
  const [url, setUrl] = useState<string>();
  const [selected, setSelected] = useState<string>();
  const [modalVisible, setModalVisible] = useState(false);
  const [showremainders, setShowRemainders] = useState<
    TRemainder[] | undefined
  >([]);
 
  useEffect(() => {
    if (petdata) {
      const url2 = petdata.profileImage?.toString();
      console.log(petdata.profileImage);
      setUrl(url2);
    }
    setSelected('Daily');

  }, []);
  useEffect(() => {
    const value = petdata?.remainders?.filter(ele => ele.category == selected);
    setShowRemainders(value);
    // console.log(value);
  }, [selected]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.RemainderIconText}>
          <AIcon name="aliwangwang-o1" size={20} testID="remainder-icon" />
          <Text style={styles.remainderText} testID="remainder-text">
            Remainders
          </Text>
        </View>
        {petdata && <Image style={styles.image} source={{uri:`data:image/jpeg;base64,${url}` }} />}
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          testID="Daily-button"
          onPress={() => setSelected('Daily')}>
          <Text style={selected=="Daily"?styles.selectedButton:styles.dateButton}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="Weekly-button"
          onPress={() => setSelected('Weekly')}>
          <Text style={selected=="Weekly"?styles.selectedButton:styles.dateButton}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="Monthly-button"
          onPress={() => setSelected('Monthly')}>
          <Text style={selected=="Monthly"?styles.selectedButton:styles.dateButton}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatListContainer} testID="flat-list-container">
        {showremainders && (
          <FlatList
            testID="flat-list"
            data={showremainders}
            renderItem={item => (
              <EachRemainder testID="each-remainder" remainder={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          testID="add-button">
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <AddRemainder
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flex: 0.1,
  },
  RemainderIconText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  remainderText: {
    fontWeight: 'bold',
  },
  mainContainer: {
    borderWidth: 2,
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.1,
  },
  dateButton: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
    fontWeight: 'bold',
    color: 'white',
  },
  flatListContainer: {
    flex: 0.7,
  },
  addButtonContainer: {
    flex: 0.1,
    padding: 10,
  },
  addButton: {
    borderWidth: 2,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
    color: 'white',
    alignSelf: 'flex-end',
  },
  selectedButton:{
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    borderColor: 'green',
    fontWeight: 'bold',
    color: 'white', 
  }
});
export default Remainder;
