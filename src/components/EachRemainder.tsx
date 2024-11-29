import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ATIcon from 'react-native-vector-icons/AntDesign';
function EachRemainder({remainder}: any) {

  const DisplayDate = new Date(remainder.item.date);
  const on = DisplayDate.getDate();
  let FromText="AM"
  let ToText="AM";
  let to=remainder.item.toHour;
  let from=remainder.item.fromHour;
  if(remainder.item.fromHour>12){
    from=remainder.item.fromHour-12;
    FromText="PM";
  }
  if(remainder.item.toHour>12){
    ToText="PM";
    to=remainder.item.toHour-12
  }
 return (
    <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
        <ATIcon name='checksquare' size={20}/>
        <Text style={styles.name} testID='name'>{remainder.item.name}</Text>
        </View>
     
      <View style={styles.dateContainer}>
        <Text style={styles.date} testID='date'>On {on},</Text>
        <Text style={styles.date} testID='from'> {from}{FromText} -</Text>
        <Text style={styles.date} testID='to'> {to}{ToText}</Text>
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
    dateContainer:{
        display:'flex',
        flexDirection:'row',
    },
    mainContainer:{
        padding:10,

    },
    nameContainer:{
        display:'flex',
        flexDirection:'row'
    },
    name:{
        fontSize:17,
    },
    date:{
        fontSize:12,
    }
})
export default EachRemainder;
