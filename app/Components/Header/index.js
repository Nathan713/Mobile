import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function Header({ text }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText} >{text}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0e101c',
        width: '100%',
        height:'15%',
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      headerText:{
        color: 'gold',
        margin: 20,
        fontSize: 20,
        
        
      }
});

