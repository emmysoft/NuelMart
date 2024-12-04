import { View, FlatList } from 'react-native';
import React from 'react';
import products from '../assets/products.json';
import { ProductListItem } from '@/components/ProductListItem';

const HomeScreen = () => {
  return (
    <>
      <View>
        <FlatList
          data={products}
          numColumns={2}
          contentContainerClassName='gap-2'
          columnWrapperClassName='gap-2'
          renderItem={({ item }: any) => (
            <ProductListItem product={item} />
          )}
        />
      </View>
    </>
  )
}

export default HomeScreen;