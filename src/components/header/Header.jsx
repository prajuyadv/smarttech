import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {iconSize} from '../../constants/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Icon name={'arrow-back'} size={iconSize.md} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name={'hearto'} size={iconSize.md} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
