import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/colors';
import {iconSize} from '../../constants/dimensions';
export default function CartButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={['#8743FF', '#4136F1']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0}}
        style={styles.addToCartButton}>
        <Icon
          name="shoppingcart"
          colors={Colors.background}
          size={iconSize.md}
        />
        <Text style={styles.addToCartText}>Add to Cart | $349.99</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
