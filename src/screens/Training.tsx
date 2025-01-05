import React, {useState} from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
function Training() {
  const [playing, setPlaying] = useState(true);
  const data = [
    {
      id: 1,
      name: 'Helpful Dog Training',
      Link: 'https://www.ccpdt.org/resources/',
      youtubeLink: 'bsoN0Xgw44DvwC_v',
    },
    {
      id: 2,
      name: 'Kitten Behavior understand your kitten',
      Link: 'https://www.royalcanin.com/in/cats/kitten/understanding-your-kittens-behaviour?gclsrc=aw.ds&gad_source=1&gbraid=0AAAAADDBKrXmUSKUS5HUiSrzZcqGyErDp&gclid=EAIaIQobChMItYKy5J79iQMV6qtmAh1oOCBrEAAYASAAEgLHIPD_BwE',
      youtubeLink: 'bsoN0Xgw44DvwC_v',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.name} testID="heading">
        Trainings
      </Text>
      {data.map(resource => {
        return (
          <View style={styles.container}>
            <Text style={styles.name} testID="resource-name">
              {resource.name}
            </Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${resource.Link}`)}>
              <Text style={styles.link} testID="link">
                {resource.Link}
              </Text>
              <YoutubePlayer
                height={300}
                play={playing}
                videoId={`${resource.youtubeLink}`}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  mainContainer: {
    gap: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
  },
});

export default Training;
