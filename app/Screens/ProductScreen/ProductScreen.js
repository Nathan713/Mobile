import React, {useState,useEffect} from "react";
import {View,Text, ScrollView} from 'react-native';
import styles from "./styles";
import product from '../../assets/data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from "../../Components/QuantitySelector/Index";
import Button from "../../Components/Button";
import ImageCarousel from "../../Components/ImageCarousel";
import {useRoute} from '@react-navigation/native';

function ProductScreen(){
    const [JSON_DATA, setJSON_DATA] = useState('');
    const[selectedOption,setSelectedOption] = useState(product.options ? product.options[0] : null);
    const[quantity,setQuantity] = useState(1);
    const route = useRoute();
    console.log(route.params.condition);

    const onStart = async (data) => {
        try
        {
            console.log("Hello");
          var obj = {"_id":route.params.id};
          var send = JSON.stringify(obj);
          //console.log(send);
          const response = await fetch('http://marketsquare.herokuapp.com/api/searchById',
            {method:'POST',body:send,headers:{'Content-Type': 'application/json'}});
          var res = JSON.parse(await response.text());
          //console.log(res.results);
          setJSON_DATA(res.results);
          console.log(JSON_DATA);
          if (res.length <= 0) {
          }
          else
          {
            console.log("Success");
          }
        }
        catch(e)
        {
          console.log("failed");
        }
      };
      
        useEffect(() => {
        onStart();
       },[])
      
    return (
    //     <View style = {styles.page}>
    
    //     { <FlatList
    //       data={JSON_DATA}
    //       renderItem={({item}) => <ProductItem
    //       productName = {item.ProductName}
    //       price = {item.ProductPrice}
    //       image = {item.ProductImages[0]}
    //       condition = {item.ProductCondition}
    //       city = {item.ProductCity}
    //       state = {item.ProductState}
    //       id = {item._id}
    //        />
    //       }
    //        showsVerticalScrollIndicator={false}
    //     /> }
       
    //    </View>
        <ScrollView style={styles.root}>
            <Text style = {styles.title}> {route.params.productName} </Text>
            {/* Image Carousel*/}
            <ImageCarousel images={route.params.images} />
            {/*Option selector */}
            
            {/*price*/}
            <Text style = {styles.price}>
                 ${route.params.price}
		    </Text>
            {/* Description*/}
            <Text style={styles.description}> {route.params.description}</Text>
            <Text style={styles.description}> Category: {route.params.category}</Text>
            <Text style={styles.description}> Condition: {route.params.condition}</Text>
            <Text style={styles.description}> Location:  {route.params.city}, {route.params.state}</Text>
            <Text style={styles.description}> Phone Number: {route.params.contactInfo}</Text>
            <Text style={styles.description}> Email:  {route.params.email}</Text>
            
        </ScrollView>
    );
}


export default ProductScreen