import * as React from 'react';
import { ScrollView,StatusBar,Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header';

const LoginFormScreen = () => {
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
  const onLogin = data => {
    console.log("Succesfull");
    navigation.navigate('LoggedInScreen');
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
          onPress={onLogin}
          //onPress={handleSubmit(onLogin)} uncomment later
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