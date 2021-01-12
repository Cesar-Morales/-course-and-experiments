import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import beagle from './assets/beagle.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!!</Text>
      <Image
        source={{uri:"https://picsum.photos/300/300"}}
        style={styles.images}>
      </Image>
      <Image style={styles.images}
        source={beagle}>
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: 'chocolate' },
  text: { 
    fontSize: 50,
    color: 'white' },
  images: {
    height: 300,
    width: 300,
    borderRadius:150
  }
});

export default App;
