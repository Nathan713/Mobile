import * as React from 'react';
import { Button, View, Text ,StyleSheet,StatusBar,Image,ScrollView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../Components/ProductItem';
import products from '../../assets/data/products';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

function SellScreen({searchValue}) {
  //const {navigation} = props;
  const [JSON_DATA, setJSON_DATA] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState('');
  const [JWTToken,setJWTToken] = useState('');

  const onStart = async (data) => {
    try
    {
      var obj = {"email": email, jwtToken:JWTToken};
      var send = JSON.stringify(obj);
      //console.log(send);
      const response = await fetch('http://marketsquare.herokuapp.com/api/ownedByUser',
        {method:'POST',body:send,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      console.log(res);
      setJSON_DATA(res.results);
     //console.log(JSON_DATA);
      if (res.length <= 0) {
      }
      else
      {
        console.log("Sucksess");
      }
    }
    catch(e)
    {
      console.log("failed");
    }
  };
  
    useEffect(async() => {
      getUserData();
      onStart();
   },[])

   const getUserData = async() => {
    
    try{
        const userData = await AsyncStorage.getItem('@storage_Key');
        const fn = JSON.parse(userData).fn;
        const ln = JSON.parse(userData).ln;
        const pn = JSON.parse(userData).pn;
        const token = JSON.parse(userData).accessToken;
        const email = JSON.parse(userData).email;
        setFirstName(fn);
        setLastName(ln);
        setEmail(email)
        setJWTToken(token);;
        setPhoneNumber(pn);
        
    }catch (e) {

    }
  }

  return (
    <View style = {styles.page}>
    
      { <FlatList
        data={JSON_DATA}
        renderItem={({item}) => <ProductItem
        productName = {item.ProductName}
        price = {item.ProductPrice}
        image = {item.ProductImages[0]}
        condition = {item.ProductCondition}
        city = {item.ProductCity}
        state = {item.ProductState}
        id = {item._id}
        description = {item.ProductDescription}
        category = {item.ProductCategory}
        images = {item.ProductImages}
        email = {item.Email}
        contactInfo = {item.ContactInfo}
         />
        }
         showsVerticalScrollIndicator={false}
      /> }
     
     </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding:10
  },

})

export default SellScreen;