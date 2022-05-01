import React from 'react';
import { ScrollView, StatusBar ,StyleSheet,SafeAreaView,Text,View} from 'react-native';
import LoginButton from '../../Components/LoginButton';
import {useNavigation} from '@react-navigation/native';

function LoginOrRegisterScreen(props) {
    const navigation = useNavigation();
    const onRegister = data => {
        navigation.navigate('RegisterFormScreen');
        
      };
      const onLogin = () => {
        navigation.navigate('LoginFormScreen');
    }
    return (
        <View style={styles.container}>
           <LoginButton 
           style={[ styles.CircleShapeView, { backgroundColor: "#fff" } ]}  
          text="Sign Up"
          onPress={onRegister}
        />
        <LoginButton
          text="Login"
          onPress={onLogin}
        />
        </View>
        
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#858450",
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScrollView: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        justifyContent: "center",
        fontFamily: "Roboto",
        fontSize: 20,
    },
})

export default LoginOrRegisterScreen;