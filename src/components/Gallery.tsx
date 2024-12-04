import React, { useContext, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GlobalContext } from '../context/GlobalContext'
import AddImage from './AddImage';

function Gallery() {
  const {petdata}=useContext(GlobalContext);
  const url="";
  const [modalVisible,setModalVisible]=useState(false);
  return (
   <View style={styles.mainContainer}>
    <Text style={styles.heading} testID='pet-name'>Gallery of {petdata?.name}</Text>
     {petdata && 
     <FlatList 
     testID='flat-list'
       style={styles.flatList}
      numColumns={2}
      data={petdata.gallery}
      renderItem={(item)=><Image style={{width:200,height:200,padding:10,borderRadius:10}} source={{uri:item.item?item.item.toString():url}}/>}
      keyExtractor={(item,index)=>index.toString()}
      />}
      <TouchableOpacity style={styles.addButtonContainer} onPress={()=>setModalVisible(true)} testID='add-button'>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
      <AddImage modalVisible={modalVisible} setModalVisible={setModalVisible} />
   </View>
  )
}
const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  heading:{
    flex:0.1,
    fontWeight:'bold',
    fontSize:17,
    textAlign:'center',
    color:'limegreen'
  },
  flatList:{
    flex:0.7,
  },
  addButtonContainer:{
    flex:0.2,
    padding:10,
  },
  addButton:{
    borderWidth:2,
    width:40,
    height:40,
    textAlign:"center",
    paddingHorizontal:10,
    borderRadius:10,
    alignSelf:"flex-end",
    fontSize:27,
    fontWeight:'bold',
    alignContent:'center',
    backgroundColor:'limegreen',
    borderColor:'limegreen',
    color:"white"
  }
})
export default Gallery