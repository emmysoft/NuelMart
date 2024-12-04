import { View, FlatList } from 'react-native';
import React from 'react';
import product from '../assets/product.json';
import { ProductListItem } from '@/components/ProductListItem';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={product}
        renderItem={({ item }: any) => (
          <ProductListItem product={item} />
        )}
      />
    </View>
  )
}

export default HomeScreen;