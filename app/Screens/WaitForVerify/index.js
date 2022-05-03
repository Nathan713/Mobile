import React from 'react';
import { ScrollView, StatusBar ,StyleSheet,SafeAreaView,Text,View} from 'react-native';
import LoginButton from '../../Components/LoginButton';
import {useNavigation} from '@react-navigation/native';

function WaitForVerify(props) {
    const navigation = useNavigation();

      const onLogin = () => {
        navigation.navigate('LoginFormScreen');
    }
    return (
        <View style={styles.container}>
         <Text> Please Verify Your email To Complete Registration</Text>
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

export default WaitForVerify;