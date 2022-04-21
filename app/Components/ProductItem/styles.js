import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
      padding:10
    },
    root:{
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
    },
    image: {
      flex: 2,
      height:150,
      resizeMode: 'contain',
    },
    title: {
      fontSize:18,
    },
    rightContainer: {
      padding: 10,
      flex:3
    },
    price:{
      fontSize:18,
      fontWeight: 'bold',
    },
    ratingsContainer:{
      flexDirection: 'row',
      alignItems:'center',
      marginVertical:5,
  
    },
      star:{
          margin:2,
      },
      oldPrice: {
          fontSize: 12,
          fontWeight: 'normal',
          textDecorationLine: 'line-through',
      }
   
  })
  export default styles;