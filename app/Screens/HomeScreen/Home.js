import * as React from 'react';
import { Button, View, Text ,StyleSheet,StatusBar,Image,ScrollView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../Components/ProductItem';
import products from '../../assets/data/products';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

function Home({searchValue}) {
  //const {navigation} = props;
  const [JSON_DATA, setJSON_DATA] = useState('');

  const onHome = async (data) => {
    try
    {
      //console.log("Hello");
      var search = '';
      var obj = {"search":search};
      var send = JSON.stringify(obj);
      //console.log(send);
      const response = await fetch('http://marketsquare.herokuapp.com/api/search',
        {method:'POST',body:send,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      setJSON_DATA(res.res);
     console.log(JSON_DATA);
      if (res.length <= 0) {
      }
      else
      {
        console.log("Succesfull");
      }
    }
    catch(e)
    {
      console.log("failed");
    }
  };

  useEffect(() => {
    onHome();
    }, [])

  return (
    <View style = {styles.page}>
    
      { <FlatList
        data={JSON_DATA}
        renderItem={({item}) => <ProductItem
        productName = {item.ProductName}
        price = {item.ProductPrice}
        image = {item.ProductImages[0]}
        
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

export default Home;