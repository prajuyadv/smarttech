import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


const ProductCard = ({item}) => {
  console.log('item', item);
  const navigation = useNavigation();
  const handleProductDetailsScreen = () => {
    navigation.navigate('ProductDetailsScreen',{item});
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleProductDetailsScreen}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: item.image}} style={styles.productImage} />
      </View>

      {/* content like name price */}
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
