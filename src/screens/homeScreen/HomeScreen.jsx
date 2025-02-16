import {Text, View, Image, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Category from '../../components/category/Category';
import ProductCard from '../../components/productCard/ProductCard';
import {Spacing} from '../../constants/dimensions';
import {Headphones} from '../../data/headphones';
import {smartWatch} from '../../data/smartWatch';

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch);
  const [selectedCategory, setselectedCategory] = useState('Smart Watch');

  const handleUpdateCategory = newCategory => {
    if (newCategory === 'Smart Watch') {
      setselectedCategory('Smart Watch');
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setselectedCategory('Headphones');
      setData(Headphones);
    }
    setselectedCategory(newCategory);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headerText}>Find Your Suitable Watch now.</Text>

            {/* Search Input */}
            <View style={styles.mainInputContainer}>
              <View style={styles.inputWrapper}>
                {/* icon */}
                <Image
                  source={require('../../assets/searchIcon.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  placeholderTextColor={Colors.placeholder}
                />
              </View>
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../../assets/categoryIcon.png')}
                  style={styles.logo}
                />
              </View>
            </View>

            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />
          </>
        }
        data={data}
        renderItem={({item, index}) => (
          <ProductCard item={item} index={index} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: 500,
          padding: Spacing.md,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
