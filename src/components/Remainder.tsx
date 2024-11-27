import React, { useContext, useEffect, useState } from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import { GlobalContext } from '../context/GlobalContext';
import EachRemainder from './EachRemainder';
import AddRemainder from './AddRemainder';

function Remainder() {
    const {username,petname,petdata}=useContext(GlobalContext);
    const [url,setUrl]=useState('../assessts/profile.jpg');
    const [modalVisible,setModalVisible]=useState(false);
  useEffect(()=>{
    if(petdata){
        const url2=petdata.petImage.toString();
        setUrl(url2);
       
        
    }
  },[])
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header} >
        <View style={styles.RemainderIconText}>
          <AIcon name="aliwangwang-o1" size={20} testID='remainder-icon'/>
          <Text style={styles.remainderText} testID='remainder-text'>Remainders</Text>
        </View>
        {petdata &&
        <Image style={styles.image} source={{uri:url}} />}
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity testID='Daily-button'>
            <Text style={styles.dateButton}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='Weekly-button'>
            <Text style={styles.dateButton}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='Monthly-button'>
            <Text style={styles.dateButton}>Monthly</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatListContainer} testID='flat-list-container'>
        {petdata?.remainder &&
        <FlatList
         testID='flat-list'
         data={petdata.remainder}
         renderItem={(item)=><EachRemainder remainder={item}/>}
         keyExtractor={(item,index)=>index.toString()}
        />}
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={()=>setModalVisible(true)} testID='add-button'>
            <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <AddRemainder modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
}
const styles=StyleSheet.create({
    image:{
        width:50,
        height:50,
        borderRadius:20,
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        flex:0.1,
       
    },
    RemainderIconText:{
        display:'flex',
        flexDirection:'row',
        gap:10,
    },
    remainderText:{
        fontWeight:'bold',

    },
    mainContainer:{
        borderWidth:2,
        flex:1,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor:'white',
        borderColor:'white',
        borderRadius:10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        flex:0.1,
       
    },
    dateButton:{
        borderWidth:2,
        padding:10,
        borderRadius:10,
        backgroundColor:'limegreen',
        borderColor:'limegreen',
        fontWeight:'bold',
        color:'white'
    },
    flatListContainer:{
        flex:0.7,
      
    },
    addButtonContainer:{
        flex:0.1,
        padding:10,
        
    },
    addButton:{
        borderWidth:2,
        width:40,
        height:40,
        textAlign:'center',
        fontSize:27,
        fontWeight:'bold',
        borderRadius:10,
        backgroundColor:'limegreen',
        borderColor:'limegreen',
        color:'white',
        alignSelf:'flex-end'
    }
})
export default Remainder;
