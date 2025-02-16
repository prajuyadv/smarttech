import {Dimensions, Image, View, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './styles';

const screenwidth = Dimensions.get('window').width;

const ProductCarousel = ({images}) => {
  const [activeslide, setactiveslide] = useState(0);

  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setactiveslide(viewableItems.viewableItems[0].index);
    }
  });

  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <View style={styles.productImageWrapper}>
            <Image source={{uri: item}} style={styles.productImage} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: activeslide === index ? 'blue' : 'gray'},
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default ProductCarousel;
