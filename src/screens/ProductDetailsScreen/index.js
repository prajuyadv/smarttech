import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header/Header';
import ProductCarousel from '../../components/productCarousel/ProductCarousel';
import styles from './style';
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

  const route = useRoute();
  const item = route.params?.item;
  // console.log("images", item.images[0]);
  return item ? (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}>
        <Header />
        <ProductCarousel images={item?.images ?? []} />

        {/* Title Section */}
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>
              {item?.name ?? 'Unknown Product'}
            </Text>
            <Text style={styles.brandText}>
              {item?.brand ?? 'Unknown Brand'}
            </Text>
          </View>

          {/* Rating Section */}
          <View style={styles.ratingWrapper}>
            <Icon name={'star'} color={Colors.purple} size={iconSize.sm} />
            <Text style={styles.ratingText}>4.0</Text>
          </View>
        </View>

        {/* Colors Section */}
        <View style={styles.colorTextViewContainer}>
          <Text style={styles.colorHeading}>Colors</Text>

          <FlatList
            data={ColorsData}
            renderItem={({item: colorItem}) => (
              <TouchableOpacity
                style={[
                  styles.selectColorContainer,
                  colorItem.colorValue === selectedColor && {
                    borderColor: Colors.purple,
                  },
                ]}
                onPress={() => setselectedColor(colorItem.colorValue)}>
                <View
                  style={[
                    styles.circleColor,
                    {backgroundColor: colorItem.colorValue},
                  ]}
                />
                <Text style={styles.colorText}>{colorItem.colorName}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(colorItem, index) => index.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: Spacing.sm}} />}
          />
        </View>

        {/* Details and Review Tabs */}
        <View style={styles.detailsReviewTabs}>
          <TouchableOpacity onPress={() => setSelectedTab('Details')}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Details' && {color: Colors.purple},
              ]}>
              Details
            </Text>
            {selectedTab === 'Details' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>

        <Text style={styles.detailsContent}>
          {selectedTab === 'Details'
            ? item?.Details ?? 'No details available'
            : item?.review ?? 'No reviews yet'}
        </Text>
      </ScrollView>

      {/* Add to Cart Button */}
      <CartButton />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.errorText}>Loading product details...</Text>
    </View>
  );
};

export default ProductDetailsScreen;
