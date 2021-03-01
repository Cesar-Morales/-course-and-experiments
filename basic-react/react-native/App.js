import React, {useState} from "react";
import { 
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import beagle from './assets/beagle.jpg'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'


const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    console.log('ToucheableOpacity')
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false){
      alert('Permission to access camera is required!')
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    //console.log(pickerResult)
    if (pickerResult.cancelled === true){
      ToastAndroid.show('You didnt choose any image!',  ToastAndroid.LONG);
      return null;
    }

    setSelectedImage({localUri: pickerResult.uri})

  };

  const loadAImage = () => {
    ToastAndroid.show('Load a image',  ToastAndroid.SHORT);
    return null
  }

  const openShareDialog = async() => {
    //console.log("hello")
    if (!(await Sharing.isAvailableAsync())){
      alert("Sharing, is not available on your plataform");
      return
    }

    await Sharing.shareAsync(selectedImage.localUri)
  }

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.text}>Pick a image</Text>
        
        
        <TouchableOpacity
          onPress={ openImagePickerAsync }>
          <Image
            source={{
              uri: 
                selectedImage !== null 
                ? selectedImage.localUri 
                : "https://picsum.photos/300/300"
              }}
            style={styles.images}>
          </Image>
        </TouchableOpacity>
        
        
        
        {/* customizable botton with alert*/}
        <TouchableOpacity
          style={ selectedImage ? styles.buttonEnabled : styles.buttonDisabled}
          onPress={ selectedImage ? openShareDialog : loadAImage}>
          <Text>{ selectedImage ? 'Share this image' : 'Load a image' }</Text>
        </TouchableOpacity>
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
  buttonEnabled: {
    backgroundColor: 'green',
    padding: 7,
    margin: 10
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    padding: 7,
    margin: 10
  }

});

export default App;
