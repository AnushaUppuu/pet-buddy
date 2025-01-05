import React, {useContext, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {GlobalContext} from '../context/GlobalContext';
import { FromDailyNotification, FromMonthlyNotification, FromWeeklyNotification} from '../permissions/FromNotification';
import { NotificationContext } from '../context/NavigationContext';
import { TRemainder } from '../types/TRemainder';
export function AddRemainder({modalVisible, setModalVisible}: any) {
  const data = [
    {label: 'Daily', value: 'Daily'},
    {label: 'Weekly', value: 'Weekly'},
    {label: 'Monthly', value: 'Monthly'},
  ];
  const {username, petname} = useContext(GlobalContext);
  const {setTimePeriod,} =useContext(NotificationContext);
  const [value, setValue] = useState('');
  const [activitytemp, setActivityTemp] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [showTo, setShowTo] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
async function scheduleNotifications(remainder:TRemainder){
  console.log(remainder);
  if(remainder.category==="Daily"){
    FromDailyNotification(remainder,date,petname,username);
  }
else if(remainder.category==="Weekly"){
  FromWeeklyNotification(remainder,date,petname,username);
}
else{
  FromMonthlyNotification(remainder,date,petname,username);
}
}
  async function handleAdd() {
      const fromsend=from.getHours().toString().concat("-");
      const tosend=to.getHours().toString();
      const resultString=fromsend.concat(tosend);
      console.log(resultString);
      setTimePeriod(resultString);
    console.log('triggered');
    const value2 = {
      name: activitytemp,
      category: value,
      fromHour: from.getHours(),
      fromMinute: from.getMinutes(),
      toHour: to.getHours(),
      toMinute: to.getMinutes(),
     
    };
    const result = await fetch(
      `https://pet-buddy-backend.onrender.com/pets/addRemainder/${username}/${petname}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value2),
      },
    );
    if (result.ok) {
     
      Alert.alert('Remainder added');
      scheduleNotifications(value2); 
    }
    setModalVisible(false);
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.detailsContainer}>
              <Dropdown
                testID='dropdown'
                style={styles.input}
                data={data}
                search
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
              <TextInput
                testID='activity-name'
                style={styles.input}
                placeholder="Activity"
                onChangeText={setActivityTemp}
              />
              <TouchableOpacity onPress={() => setOpen(true)} testID='date-selecting-button'>
                <Text style={styles.input}>Select Date</Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <View style={styles.toFrom}>
                <TouchableOpacity onPress={showDatePicker} testID='from-button'>
                  <Text style={styles.input}>from</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  date={from}
                  isVisible={datePickerVisible}
                  mode="time"
                  is24Hour={true}
                  display="inline"
                  onConfirm={date => {
                    setFrom(date);
                    setDatePickerVisible(false);
                  }}
                  onCancel={() => {
                    setDatePickerVisible(false);
                  }}
                />
                <TouchableOpacity onPress={() => setShowTo(true)} testID='to-button'>
                  <Text style={styles.input}>To</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  date={to}
                  isVisible={showTo}
                  mode="time"
                  is24Hour={true}
                  display="inline"
                  onConfirm={date => {
                    setTo(date);
                    setShowTo(false);
                  }}
                  onCancel={() => {
                    setShowTo(false);
                  }}
                />
              </View>
              <TouchableOpacity onPress={() => handleAdd()} testID='add-button'>
                <Text style={styles.addButton}>Add Remainder</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)} testID='cross-button'>
              <Text style={styles.cross}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subContainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'limegreen',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    borderColor: 'limegreen',
  },
  dropdown: {
    width: '80%',
    backgroundColor: 'lightgreen',
  },
  input: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  detailsContainer: {
    width: '90%',
    gap: 10,
  },
  toFrom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  addButton: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'green',
    fontWeight: 'bold',
    color: 'white',
    borderColor: 'green',
  },
  cross: {
    borderWidth: 2,
    padding: 2,
    borderRadius: 25,
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
    width: 20,
    height: 20,
    textAlign: 'center',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
});
export default AddRemainder;
