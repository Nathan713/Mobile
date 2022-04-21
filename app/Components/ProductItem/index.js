import React from 'react';
import {View, Text,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";


function ProductItem(props) {
    const{title} = props;
    const{image} = props;
    const{price} = props;
    const{ratings} = props;
    const{oldPrice} = props;
    const{avgRating} = props;
    const{id} = props;
    return (
    <View style={styles.root}>
        <Image 
            style={styles.image} 
            source={{uri:image}}
         />
	    <View style = {styles.rightContainer}>
		    <Text style = {styles.title} numberOfLines={3}>{title}
            </Text>
		    {/*Ratings*/}
		    <View style={styles.ratingsContainer}>
                {[0,0,0,0,0].map((el,i) =>
                     <FontAwesome
                    key={`${id}--${i}`}
                     style={styles.star} 
                     name={i < Math.floor(avgRating) ? 'star' : 'star-o'}
                     size={18} 
                     color={"#e47911"} 
                     />
                )}
                <Text>{ratings}</Text>
            </View>
		    <Text style = {styles.price}>
                from ${price}
                {oldPrice && (
                    <Text style={styles.oldPrice}>  was ${oldPrice}</Text>
                )}
		    </Text>
	    </View>
    </View>
    );
}

export default ProductItem;