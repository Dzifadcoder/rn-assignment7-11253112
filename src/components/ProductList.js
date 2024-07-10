import React from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductList = ({ products, addToCart, onProductPress }) => {
  const renderItem=({ item }) => (
    <TouchableOpacity onPress={() => onProductPress(item)}>
    <View style={styles.productContainer}>
      <View>
      <ImageBackground source={{ uri: item.image }} style={styles.productImage}>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
      <Image source={require('../../assets/add_circle.png')} style={styles.buttonIcon} />
      </TouchableOpacity>
      </ImageBackground>
      </View>
      <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>
        {item.price !== undefined ? `$${parseFloat(item.price).toFixed(2)}` : 'N/A'}
      </Text>
     
      </View>
    </View>
  </TouchableOpacity>
  )
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id.toString() + index.toString()}
      renderItem={renderItem}
      numColumns={2}

    />
  );
};
const styles = StyleSheet.create({
  productContainer: {  
    flex: 1,
    padding: 8,
    width: 200,
    
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    
  },
  productPrice: {
    fontSize: 18,
    color: 'orange',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    top: 250,
    alignItems: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductList;
