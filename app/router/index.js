import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';

const Root = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen component={BottomTabNav} name="HomeTab" />
            </Root.Navigator>
        </NavigationContainer>
    );
}

export default Router;