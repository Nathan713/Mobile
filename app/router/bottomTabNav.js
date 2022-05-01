import React from 'react';
import { StatusBar } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen/Home';
import LoginOrRegister from '../Screens/LoginOrRegisterScreen/LoginOrRegisterScreen';
import PostScreen from '../Screens/PostScreen';
import SellScreen from '../Screens/SellScreen'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
    return (
           
            <Tab.Navigator screenOptions={{headerShown: false, tabBarInactiveTintColor: '#000000', tabBarActiveTintColor:'#BA9B37'}}>
                <Tab.Screen component={HomeStack} name="Home" 
                options = {{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                     <Entypo name ="home" color={color} size={25} />
                    ),    
                    }
                }/>
                <Tab.Screen component={PostScreen} name="Post"
                     options = {{
                        title: 'Post Item',
                        tabBarIcon: ({color}) => (
                         <Entypo name ="camera" color={color} size={25} />
                        ),    
                        }
                    } />
                <Tab.Screen component={SellScreen} name="Selling" 
                     options = {{
                        tabBarIcon: ({color}) => (
                         <FontAwesome name ="dollar" color={color} size={25} />
                        ),    
                        }
                    }/>
                <Tab.Screen component={AccountStack} name="Account" 
                     options = {{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                         <Entypo name ="user" color={color} size={25} />
                        ),    
                        }
                    }/>
            
            </Tab.Navigator>
            
    );
}
export default BottomTabNav;