import * as React from 'react';
import { Button, View, Text ,StyleSheet,StatusBar,Image,ScrollView, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../../Components/ProductItem';
import products from '../../assets/data/products';

function Home({searchValue}) {
  //const {navigation} = props;
  
 
  return (
   
    <View style = {styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem
        id = {item.id} 
        title = {item.title}
        image = {item.image}
        price = {item.price}
        ratings = {item.ratings}
        oldPrice = {item.oldPrice}
        avgRating = {item.avgRating}
         />}
         showsVerticalScrollIndicator={false}
      />
     </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding:10
  },

})

export default Home;