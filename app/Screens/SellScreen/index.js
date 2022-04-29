import React from 'react';
import { ScrollView, StatusBar ,StyleSheet,SafeAreaView,Text,View} from 'react-native';

function LoginOrRegisterScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <Text  style={styles.text}>
                    Sell Screen
                </Text>
                
            </ScrollView>
        </View>
        
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"dodgerblue",
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