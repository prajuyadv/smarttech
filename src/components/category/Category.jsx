import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {CategoryData} from '../../data/category';
import {Spacing} from '../../constants/dimensions';
import {Colors} from '../../constants/colors';

const Category = ({selectedCategory,handleUpdateCategory}) => {

  return (
    <FlatList
      data={CategoryData}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            handleUpdateCategory(item.name);
          }}>
          <Text
            style={[
              styles.CategoryText,
              selectedCategory === item.name && {
                color: Colors.purple,
              },
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={<View style={{paddingHorizontal: Spacing.sm}} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Category;
