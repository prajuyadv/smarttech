import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/colors';
import {iconSize} from '../../constants/dimensions';
export default function CartButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.addToCartButton}>
        <Icon
          name="shoppingcart"
          colors={Colors.background}
          size={iconSize.md}
        />
        <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </View>
    </TouchableOpacity>
  );
}
