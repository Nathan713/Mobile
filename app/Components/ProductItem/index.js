import React from 'react';
import {View, Text,Image,Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';
import { NavigationEvents } from 'react-navigation';


function ProductItem(props) {
    const{image} = props;
    const{price} = props;
    const{productName} = props;
    const{condition} =props;
    const{city} = props;
    const{state} = props;
    const{id} = props;
    const{contactInfo} = props;
    const{email} = props;
    const{category} = props;
    const{description} = props;
    const{images} = props

    //console.log(id);
    //console.log(productName);
    //console.log(price);
    //console.log(image);

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('ProductDetails', {
            id:id, 
            condition:condition, 
            images:images,
            description:description,
            category:category,
            email:email,
            contactInfo: contactInfo,
            state: state,
            city:city,
            price: price,
            productName: productName
            });
        //console.log(id);
    }
    return (
    <Pressable onPress={onPress} style={styles.root}>
        { <Image 
            style={styles.image} 
            source={{uri:image}}
         /> }
	    <View style = {styles.rightContainer}>
		    <Text style = {styles.title} numberOfLines={3}>{productName}</Text>
            <Text style = {styles.title}>Condition: {condition}</Text>
            <Text style = {styles.title}>{city},{state}</Text>
		    <Text style = {styles.price}>
                ${price}
		    </Text>
	    </View>
    </Pressable>
    );
}

export default ProductItem;