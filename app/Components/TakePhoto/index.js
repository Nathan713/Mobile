import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function TakePhoto() {
    const [pickedImagePath, setPickedImagePath] = useState('');

    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
      // Ask the user for the permission to access the media library 
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
      
  
      // Explore the result
      console.log(result);
  
      if (!result.cancelled) {
        setPickedImagePath(result.uri);
        setStateOfParent(result.uri);
        console.log(result.uri);
      }
    }
  
    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
      // Ask the user for the permission to access the camera
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync();
  
      // Explore the result
      console.log(result);
  
      if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
      }
    }
  
    return (
      <View style={styles.screen}>
        <View style={styles.buttonContainer}>
          <Button onPress={showImagePicker} title="Select an image" />
          <View style={styles.space} />
          <Button onPress={openCamera} title="Open camera" />
        </View>
  
        {/* <View style={styles.imageContainer}>
          {
            pickedImagePath !== '' && <Image
              source={{ uri: pickedImagePath }}
              style={styles.image}
            />
          }
        </View> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: 200,
      justifyContent: 'space-around',
      
    },
    imageContainer: {
      padding: 30
    },
    image: {
      width: 400,
      height: 300,
      resizeMode: 'cover'
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
      },
  });

