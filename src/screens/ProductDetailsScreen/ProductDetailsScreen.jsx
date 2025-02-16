import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import ProductCarousel from '../../components/productCarousel/ProductCarousel';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../constants/colors';
import {iconSize, Spacing} from '../../constants/dimensions';
import CartButton from '../../components/cartbutton/CartButton';

const ColorsData = [
  {
    colorName: 'Silver',
    colorValue: Colors.silver,
  },
  {
    colorName: 'Bright Orange',
    colorValue: Colors.brightOrange,
  },
  {
    colorName: 'StarLight',
    colorValue: Colors.starlet,
  },
];

const ProductDetailsScreen = () => {
  const [selectedColor, setselectedColor] = useState('');
  const [selectedTab, setSelectedTab] = useState('Details');

  const item = useRoute().params.item;
  // console.log("images", item.images[0]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollViewContainer} showsHorizontalScrollIndicator={false}>
      <Header />
      <ProductCarousel images={item.images} />

      {/* title content stuff */}
      <View style={styles.titleContainer}>
        {/* title wrapper */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.brandText}>{item.brand}</Text>
        </View>

        {/* rating wrapper */}
        <View style={styles.ratingWrapper}>
          <Icon name={'star'} color={Colors.purple} size={iconSize.sm} />
          <Text style={styles.ratingText}>4.0</Text>
        </View>
      </View>

      {/* color container */}
      <View style={styles.colorTextViewContainer}>
        <Text style={styles.colorHeading}>Colors</Text>

        {/* inside this view we gonna render all the colors card */}

        <FlatList
          data={ColorsData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.selectColorContainer,
                item.colorValue === selectedColor && {
                  borderColor: Colors.purple,
                },
                // Additional styles if needed
              ]}
              onPress={() => {
                setselectedColor(item.colorValue);
              }}>
              <View
                style={[styles.circleColor, {backgroundColor: item.colorValue}]}
              />
              <Text style={styles.colorText}>{item.colorName}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          ItemSeparatorComponent={() => <View style={{width: Spacing.sm}} />}
        />
      </View>

      {/* details and review */}
      <View style={styles.detailsReviewTabs}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Details');
          }}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Details' && {color: Colors.purple},
            ]}>
            Details
          </Text>
          {selectedTab === 'Details' && <View style={styles.underline} />}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab('Review');
          }}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Review' && {color: Colors.purple},
            ]}>
            Review
          </Text>
          {selectedTab === 'Review' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>


      <Text style={styles.detailsContent}>
        {selectedTab === 'Details' ? item.Details : item.review}
      </Text>
    </ScrollView>
    
    {/* add to cart button */}
    <CartButton/>
    </View>
  );
};

export default ProductDetailsScreen;
