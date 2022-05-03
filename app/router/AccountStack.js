import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen/Home';
import ProductScreen from '../Screens/ProductScreen/ProductScreen';
import RegisterFormScreen from '../Screens/RegisterFormScreen';
import LoginOrRegisterScreen from '../Screens/LoginOrRegisterScreen/LoginOrRegisterScreen';
import LoginFormScreen from '../Screens/LoginFormScreen';
import LoggedInScreen from '../Screens/LoggedInScreen';
import { SafeAreaView } from 'react-navigation';
import { View, StyleSheet} from 'react-native';
import WaitForVerify from '../Screens/WaitForVerify';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <View style={styles.droidSafeArea}>
      <Stack.Navigator 
        screenOptions={{
           headerShown:false
         }}>
        <Stack.Screen
          name="LoginOrRegisterScreen"
          component={LoginOrRegisterScreen}
        />
        <Stack.Screen name="RegisterFormScreen" component={RegisterFormScreen} />
        <Stack.Screen name="LoginFormScreen" component={LoginFormScreen} />
        <Stack.Screen name="WaitForVerify" component={WaitForVerify} />
        <Stack.Screen
          name="LoggedInScreen"
          component={LoggedInScreen}
        />
      </Stack.Navigator>
      </View>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
export default AccountStack;