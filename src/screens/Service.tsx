import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {serviceData} from '../data/service';
import AIcon from 'react-native-vector-icons/AntDesign'
function Service() {
  const vetData=serviceData.filter((data)=>data.category=="Veterinary");
  const groomData=serviceData.filter((data)=>data.category=="Grooming");

  const [vetselected,setVetSelected]=useState(true)
  return (
    <View>
      <Text style={styles.heading} testID='mainText'>Hello, How may I help you ?</Text>
      <View style={styles.imageBox}>
        <TouchableOpacity style={vetselected?styles.selected:styles.notSelected} onPress={()=>{setVetSelected(!vetselected)}} testID='veterinary-button'>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assessts/veterinary.png')}
        />
        <Text>Veterinary</Text>
        </TouchableOpacity>
         <TouchableOpacity style={!vetselected?styles.selected:styles.notSelected} onPress={()=>{setVetSelected(!vetselected)}} testID='Grooming-button'>
         <Image
          style={{width: 40, height: 40}}
          source={require('../assessts/dog.png')}
        />
        <Text>Grooming</Text>
         </TouchableOpacity>
       
      </View>
      <View testID='line'
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderWidth: 1,
          margin: 10,
        }}
      />
      {vetselected && vetData.map(data => {
        return (
          <View style={styles.detailsBox}>
            <View style={styles.box1}>
              <Image
                style={{width: 50, height: 50,borderRadius:10}}
                source={{uri: data.image}}
              />
              <View>
              <Text style={styles.name}>Dr.{data.name}</Text>
              <Text style={styles.greyText}>{data.degree}</Text>
              <Text><AIcon name='star' color={'gold'} size={20}/> {data.rating} {`{${data.reviewsCount} reviews}`}</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <Text style={styles.greyText}>{data.experience}</Text>
              <Text style={styles.greyText}>{data.distance}</Text>
              <Text style={styles.greyText}>{data.cost}$</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.greyText}>{data.timings}</Text>
            </View>
          </View>
        );
      })}
       {!vetselected && groomData.map(data => {
        return (
          <View style={styles.detailsBox}>
            <View style={styles.box1}>
              <Image
                style={{width: 50, height: 50,borderRadius:10}}
                source={{uri: data.image}}
              />
              <View>
              <Text style={styles.name}>Dr.{data.name}</Text>
              <Text style={styles.greyText}>{data.degree}</Text>
              <Text><AIcon name='star' color={'gold'} size={20}/>{data.rating} {`{${data.reviewsCount} reviews}`}</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <Text style={styles.greyText}>{data.experience}</Text>
              <Text style={styles.greyText}>{data.distance}</Text>
              <Text style={styles.greyText}>{data.cost}$</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.greyText}>{data.timings}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  imageBox: {
    display: 'flex',
    flexDirection: 'row',
    gap:100,
    padding: 10,
    
  },
  detailsBox: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius:10,
    backgroundColor:'white',
    borderColor:'white',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    gap:10,
  },
  box1:{
     display:'flex',
     flexDirection:'row',
     justifyContent:"space-around"
  },
  box2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  box3:{
    flexDirection:'row',
    padding:10,
  },
  name:{
    fontWeight:'bold',
    fontSize:17,
  },
  greyText:{
    color:'grey',
  },
  selected:{
    backgroundColor:'limegreen',
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    borderRadius:10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  notSelected:{
    backgroundColor:"white",
       justifyContent:"center",
    alignItems:"center",
    padding:5,
    borderRadius:10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  heading:{
    fontSize:17,
    fontWeight:'bold',
    padding:10,
  }
});
export default Service;
