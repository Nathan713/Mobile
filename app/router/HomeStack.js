import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import Home from '../Screens/HomeScreen/Home';
import ProductScreen from '../Screens/ProductScreen/ProductScreen';
import { TextInput, View , StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';


const Stack = createStackNavigator();

const HeaderComponent = ({searchValue, setSearchValue}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#22e3dd'}} >
        <View
            style={{
                height:40,
                margin: 10,
                padding: 5,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center'
            }}> 
            <Feather name = "search" size={20}/>
            <TextInput  
                style={{height: 40, marginLeft: 10, width:'100%'}}
                placeholder="Search..."
                value={searchValue}
                onChangeText={setSearchValue}
            />
        </View>
        </SafeAreaView>
    )
}
function HomeStack() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <View style={styles.droidSafeArea}>
            <Stack.Navigator
                screenOptions={{
                    header: () => <HeaderComponent  searchValue={searchValue} setSearchValue={setSearchValue}/>,
                }}>
                   
                <Stack.Screen  name="HomeScreen" OPTIONS={{title: 'Home'}}>
                {() => <Home searchValue={searchValue} />}
                </Stack.Screen>
                <Stack.Screen component={ProductScreen} name="ProductDetails" />
            </Stack.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#22e3dd',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});

export default HomeStack;