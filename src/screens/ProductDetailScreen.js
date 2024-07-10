import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.material}> Materials</Text>
      <Text style={styles.text}> We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products</Text>
      <View style={styles.textContainer}> 
      <Image source={require('../../assets/Do Not Bleach.png')} style={styles.buttonIcon} />
      <Text style={styles.instuctions}> Do not use bleach</Text>
      </View>
      <View style={styles.textContainer}> 
      <Image source={require('../../assets/Do Not Tumble Dry.png')} style={styles.buttonIcon} />
      <Text style={styles.instuctions}> Do not tumble dry</Text>
      </View>
      <View style={styles.textContainer}> 
      <Image source={require('../../assets/Do Not Wash.png')} style={styles.buttonIcon} />
      <Text style={styles.instuctions}> Dry clean with tetrachloroethylene</Text>
      </View>
      <View style={styles.textContainer}> 
      <Image source={require('../../assets/Iron Low Temperature.png')} style={styles.buttonIcon} />
      <Text style={styles.instuctions}> Iron at a maximum of 110C/230F</Text>
      </View>
      <View style={styles.textContainer}> 
      <Image source={require('../../assets/Shipping.png')} style={styles.buttonIcon} />
      <View>
      <Text style={styles.shiping}> Free Flat Rate Shipping</Text>
      <Text style={styles.instuctions}> Estimated to be delivered on 09/11/2021-12/11/2021</Text>
      </View>

      <Image source={require('../../assets/Up.png')} style={styles.buttonIcon} />

      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'left',
    marginBottom: 20,
  },
  text:{
    fontSize: 20,
    color: '#888',
  },
  textContainer:{
    flexDirection:'row',
        fontSize: 20,
    color: '#888',
    marginTop: 15,
  },
  instuctions: {
    fontSize: 20,
    color: '#888',
  },
  description: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  material:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  shiping:{
    fontSize: 20,
  }
});

export default ProductDetailScreen;
