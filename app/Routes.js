import React from 'react';
import{createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import LoginOrRegisterScreen from './Screens/LoginOrRegisterScreen/LoginOrRegisterScreen';
import ProductScreen from './Screens/ProductScreen/ProductScreen';
import Home from './Screens/HomeScreen/Home';

const Stack = createStackNavigator();

export const Routes = () =>{
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home} 
            /> 
            <Stack.Screen 
                name="LoginOrRegister" 
                options={{
                
            }} 
                component={LoginOrRegisterScreen} 
            /> 
            <Stack.Screen 
                name="ProductScreen" 
                component={ProductScreen} 
            /> 
        </Stack.Navigator>
    </NavigationContainer>
    );
}