import React from 'react';
import { useState } from 'react';
import { ScrollView, StatusBar ,StyleSheet,SafeAreaView,Text,View,TextInput} from 'react-native';
import TakePhoto from '../../Components/TakePhoto';
import Button from '../../Components/Button';

function PostScreen(props) {

    const[Name,setName] = useState(null);
    const[Description,setDescription] = useState(null);
    const[Category,setCategory] = useState(null);
    const[Price,setPrice] = useState(null);

    const onPressCancel = () => {
        console.log(Name);
    }
    const onPressPost = () => {
        {handlePostClick};
        console.warn("Post button pressed");
        console.log(Name);
        console.log(Price);
        
    }

    
      
  const handlePostClick = async () => 
  {
    var obj = {productName : Name,
    "productCategory" : "pets",
     "productDescription" : "collar for dogs",
    "productPrice" : 10.00,
     "contactInfo" : "23456776",
    "email" : "kissoon291@gmail.com"};
    var js = JSON.stringify(obj);
    console.log(Name);
        console.log(Price);
    try
    {
      const response = await fetch('hhttp://localhost:5000/api/addproduct',
        {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      {() => setName("Byebye")};
    }
    catch(e)
    {
        {() => setPrice("Hello")};
    }
   }
    return (
        <View style={styles.container}>

        <TakePhoto/>
        <View style={styles.input}>
            <TextInput style={styles.inputStyle}
                placeholder="Name" 
                value={Name}
                onChangeText={text => setName(text)}
        
                />
            <TextInput style={styles.inputStyle}
                placeholder="Description" 
                value={Description}
                onChangeText={text => setDescription(text)}
                />
            <TextInput style={styles.inputStyle}
                placeholder="Category" 
                value={Category}
                onChangeText={text => setCategory(text)}
                />
            <TextInput style={styles.inputStyle}
                placeholder="Price" 
                value={Price}
                onChangeText={text => setPrice(text)}
                />
        <View style={styles.buttonContainer}>
            <Button text ={"POST"} onPress={handlePostClick}/>
            <View style={styles.space} />
            <Button text ={"Cancel"}  onPress={onPressCancel} />
        </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"green",
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
      },
    input: {
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    button:{
        
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
      },
})

export default PostScreen;