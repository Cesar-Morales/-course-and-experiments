import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert,
TouchableOpacity, 
ScrollView} from "react-native";
import beagle from './assets/beagle.jpg'

const App = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello world!!</Text>
        <Image
          source={{uri:"https://picsum.photos/300/300"}}
          style={styles.images}>
        </Image>
        <Image style={styles.images}
          source={beagle}>
        </Image>
        {/* normal button with console.log */}
        <Button
          title= 'console.log'
          color= 'black'
          onPress={ () =>  {console.log('button pressed')} }/>
        {/* normal button with alert */}
        <Button
          title= 'alert'
          color= 'gray'
          onPress={ () =>  {Alert.alert('button pressed')} }/>
        {/* customizable botton with alert*/}
        <TouchableOpacity
          style={styles.button}
          onPress={ () =>  {Alert.alert('button pressed')} }>
          <Text>ToucheableOpacity</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: '#595959'
  },
  container: { 
    margin:30,
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
  },
  button: {
    backgroundColor: 'white',
    padding: 7,
    margin: 10
  }

});

export default App;
