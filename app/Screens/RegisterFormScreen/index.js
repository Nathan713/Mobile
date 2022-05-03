import * as React from 'react';
import { useState } from 'react';
import { ScrollView,StatusBar,Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TakePhoto from '../../Components/TakePhoto';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header';
import WaitForVerify from '../WaitForVerify';

const RegisterFormScreen = () => {
  const [registerError, setRegisterError] = useState(null);
  
    const req = "Required field"
    const registerSchema = yup.object().shape({
      firstName: yup.string().required(req),
      lastName: yup.string().required(req),
      email: yup.string().email("example: user@site.com").required(req),
      phoneNumber: yup.string().matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
          , "###-###-#### or ##########"
      ).required(req),
      password: yup.string().min(8, "Must Contain at least 8 characters")
          .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
              , "Must contain, one uppercase letter, one lowercase letter, one number and one special character"
          ).required(req),
      passwordTwo: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required(req),
  });


  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "all",
    reValidateMode: "all",
  });
  const navigation = useNavigation();

  const onRegister = async (data) => {
    try
    {
      //console.log("Hello");
      var send = JSON.stringify(data);
      //console.log(send);
      const response = await fetch('http://marketsquare.herokuapp.com/api/register',
        {method:'POST',body:send,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      console.log(res);
      if (res.error) {
        setRegisterError("Failed to Register");
      }
      else
      {
        //storeData(res);
        console.log("Succesfull");
        navigation.navigate('WaitForVerify');
      }
    }
    catch(e)
    {
      setLoginError("Error bjhh");
    }
  };

  console.log(errors);

  return (
    <View >
      <Header text={"Register an Account"}/>
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
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
        
        name="firstName"
        rules={{ required: true }}
      />
      {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.firstName?.message}</Text>)}
      
      <Text style={styles.label}>Last Name</Text>
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
        name="lastName"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.lastName?.message}</Text>)}
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
      <Text style={styles.label}>Phone Number</Text>
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
        name="phoneNumber"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.phoneNumber?.message}</Text>)}
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
      <Text style={styles.label}>Confirm Password</Text>
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
        name="passwordTwo"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.passwordTwo?.message}</Text>)}
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{registerError}</Text>
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
          text="Register"
          //onPress={onRegister}
          onPress={handleSubmit(onRegister)}
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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    paddingBottom: 100
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default RegisterFormScreen;