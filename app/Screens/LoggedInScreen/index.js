import * as React from 'react';
import { ScrollView,StatusBar,Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TakePhoto from '../../Components/TakePhoto';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';


const LoggedInScreen = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState('');
  
  const getUserData = async() => {
    
    try{
        const userData = await AsyncStorage.getItem('@storage_Key');
        const fn = JSON.parse(userData).fn;
        const ln = JSON.parse(userData).ln;
        setFirstName(fn);
        setLastName(ln);

        
    }catch (e) {

    }
  }
  
  useEffect(() => {
    getUserData();

    }, [])

    return(
        <View>
            <Text> You are Logged In As {firstName} {lastName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'black',
    height: 40,
    backgroundColor: '#b6e3ff',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default LoggedInScreen;