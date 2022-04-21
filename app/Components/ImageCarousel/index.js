import React from 'react';
import {View, Text, FlatList,StyleSheet,Image} from 'react-native';

function ImageCarousel({images}) {
    return (
        <View style={styles.root}>
            <FlatList
            data={images}
            renderItem={({item}) =>(
                <Image style={styles.image} source={{uri: item}} />
            )}
            horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        width:100,
        height: 100,
    }
})
export default ImageCarousel;