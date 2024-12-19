import { View, FlatList, useWindowDimensions } from 'react-native';
import React from 'react';
import products from '../assets/products.json';
import { ProductListItem } from '@/components/ProductListItem';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';

const HomeScreen = () => {

  const numColumns = useBreakpointValue({ default: 2, sm:3, xl: 4 });

  return (
    <>
      <View>
        <FlatList
          key={numColumns}
          data={products}
          numColumns={numColumns}
          contentContainerClassName='gap-2 max-w-[960px] mx-auto w-full'
          renderItem={({ item }: any) => (
            <ProductListItem product={item} />
          )}
        />
      </View>
    </>
  )
}

export default HomeScreen;