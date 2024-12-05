import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function Loading() {
  const nav = useNavigation<any>();


  useEffect(() => {
    function Goto(){
        nav.navigate('SingnedIn')
    }
    setTimeout(Goto, 1000);
  });
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.mainContainer}>
        <Image style={styles.bgImage} source={require('../assessts/Loading.png')} testID='loading-image'/>
        <Text style={styles.loadingText} testID='loading-text'>Loading</Text>
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightgreen"
    },
    loadingText:{
        fontWeight:'bold',
        fontSize:17,
    },
    bgImage:{
        width:"100%",
        height:"50%"
    }
})

export default Loading;
