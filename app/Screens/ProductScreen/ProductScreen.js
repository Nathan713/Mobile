import React, {useState} from "react";
import {View,Text} from 'react-native';
import styles from "./styles";
import product from '../../assets/data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from "../../Components/QuantitySelector/Index";
import Button from "../../Components/Button";
import ImageCarousel from "../../Components/ImageCarousel";

function ProductScreen(){
    const[selectedOption,setSelectedOption] = useState(product.options ? product.options[0] : null);
    const[quantity,setQuantity] = useState(1);

    return (
        <View style={styles.root}>
            <Text style = {styles.title}> {product.title} </Text>
            {/* Image Carousel*/}
            <ImageCarousel images={product.images} />
            {/*Option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) =>
                    setSelectedOption(itemValue)
            }>
                {product.options.map(option =>(
                    <Picker.Item label={option} value={option}/>
                ))}
            </Picker>
            {/*price*/}
            <Text style = {styles.price}>
                from ${product.price}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}>  was ${product.oldPrice}</Text>
                )}
		    </Text>
            {/* Description*/}
            <Text style={styles.description}> {product.description}</Text>
            {/* Quantity selector*/}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            {/* Buttons*/}
            <Button text={'Add to Cart'} onPress={() => {console.warn('add to cart')}}/>
            <Button text={'Buy now'} onPress={() => {console.warn('Buy now')}}/>
        </View>
    );
}


export default ProductScreen