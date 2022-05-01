import * as React from 'react';
import { ScrollView,StatusBar,Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import TakePhoto from '../../Components/TakePhoto';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomButton from '../../Components/Button';
import Header from '../../Components/Header';

const PostScreen = () => {
    const req = "Required field"
    const productSchema = yup.object().shape({
        productName: yup.string().required(req),
        productCategory: yup.string().required(req),
        productCondition: yup.string()
            .oneOf(["New", "Like New", "Good", "Fair", "Poor"])
            .required(req),
        productDescription: yup.string().required(req),
        city: yup.string().required(req),
        state: yup.string().required(req),
        productPrice: yup.number().positive().integer().required(req),
       // images: yup.mixed().nullable().test("type", "Must be a jpeg, jpg, or png", (value) => checkIfFilesAreCorrectType(value))
           // .required(req)
        // contactInfo: yup.string().required(), 
        // email: yup.string().required()
    });


  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onChange",
    reValidateMode: "all",
    defaultValues: {
      
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  console.log(errors);

  return (
    <View style ={{paddingTop: StatusBar.currentHeight,}}>
      <Header text={"Post Item"}/>
    
    <ScrollView style = {{paddingBottom:550}}>
    <View style={styles.container}>
      
        <TakePhoto/>
      <Text style={styles.label}>Product Name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
          
        )}
        
        name="productName"
        rules={{ required: true }}
      />
      {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.productName?.message}</Text>)}
      
      <Text style={styles.label}>Product Description</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="productDescription"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.productDescription?.message}</Text>)}
        <Text style={styles.label}>Product Category</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            multiline={true}
            numberOfLines={3}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="productCategory"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.productCategory?.message}</Text>)}
      <Text style={styles.label}>Product Condition</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="productCondition"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.productCondition?.message}</Text>)}
      <Text style={styles.label}>Listing Price</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="productPrice"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.productPrice?.message}</Text>)}
      <Text style={styles.label}>City</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="city"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.city?.message}</Text>)}
      <Text style={styles.label}>State</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="state"
        rules={{ required: true }}
      />
       {errors && (
        <Text style={{color: 'red', alignSelf: 'stretch'}} >{errors.state?.message}</Text>)}
      <View >
        <CustomButton
          text="Reset"
          onPress={() => {
            reset({
              Name: '',
              Description: ''
            })
          }}
        />
      </View>

      <View >
        <CustomButton
          text="Post"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'black',
    height: 40,
    backgroundColor: '#b6e3ff',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0e101c',
    paddingBottom: 100
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  
});

export default PostScreen;
