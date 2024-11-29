import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Training() {
  const data=[
    {
      id:1,
      name:"Helpful Dog Training",
      Link:"https://www.ccpdt.org/resources/"
    },
    {
      id:2,
      name:"Kitten Behavior understand your kitten",
      Link:"https://www.royalcanin.com/in/cats/kitten/understanding-your-kittens-behaviour?gclsrc=aw.ds&gad_source=1&gbraid=0AAAAADDBKrXmUSKUS5HUiSrzZcqGyErDp&gclid=EAIaIQobChMItYKy5J79iQMV6qtmAh1oOCBrEAAYASAAEgLHIPD_BwE"
    }
  ]
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.name} testID='heading'>Trainings</Text>
        {data.map((resource)=>{
          return(
            <View style={styles.container}>
              <Text style={styles.name} testID='resource-name'>{resource.name}</Text>
              <Text style={styles.link} testID='link'>{resource.Link}</Text>
              </View>
          )
        })}
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    borderWidth:2,
    padding:10,
    borderRadius:10,
    margin:10,
  },
  mainContainer:{
    gap:10,
  },
  name:{
    fontWeight:'bold'
  },
  link:{
    color:'blue'
  }
})

export default Training