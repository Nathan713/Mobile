import * as React from 'react';
import { useState } from 'react';

import { ScrollView,StatusBar,Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => { //store object
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}


const LoginFormScreen = () => {
  const [loginError, setLoginError] = useState(null);
    const loginSchema = yup.object().shape({
        email: yup.string().email("example: user@site.com").required("Required"),
        password: yup.string().required("Required"),
    });


  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "all",
    reValidateMode: "all",
  });
  const navigation = useNavigation();

  const onLogin = async (data) => {
    try
    {
      console.log("Hello");
      var send = JSON.stringify(data);
      console.log(send);
      const response = await fetch('http://marketsquare.herokuapp.com/api/login',
        {method:'POST',body:send,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      console.log(res);
      if (res.fn.length <= 0) {
        setLoginError("User/Password combination incorrect");
      }
      else
      {
        storeData(res);
        console.log("Succesfull");
        navigation.navigate('LoggedInScreen');
      }
    }
    catch(e)
    {
      setLoginError("Login Failed");
    }
  };

  console.log(errors);

  return (
    
    <View >
      <Header text={"Login"}/>
    <ScrollView>
    <View style={styles.container}>
        
    
        <Text style={styles.label}>Email</Text>
        <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.email?.message}</Text>)}
      
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.password?.message}</Text>)}
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{loginError}</Text>
      <View >
        <CustomButton
          text="Reset"
          onPress={() => {
            reset({
              Name: '',
              Description: ''
            })
          }}
        />
      </View>

      <View >
        <CustomButton
          text="Login"
          //onPress={() => onLogin('hgf')}
          onPress={handleSubmit(onLogin)} 
        />
      </View>
      </View>
      </ScrollView>
      </View>
    
  );
};

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
    
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    paddingBottom: 200
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default LoginFormScreen;