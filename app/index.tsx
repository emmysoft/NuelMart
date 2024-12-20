import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
// import products from '../assets/products.json';
import { ProductListItem } from '@/components/ProductListItem';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { getProducts } from '@/api/product';

const HomeScreen = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProduct(data); 
    }
    fetchProducts();
  }, []);

  const numColumns = useBreakpointValue({ default: 2, sm:3, xl: 4 });

  return (
    <>
      <View>
        <FlatList
          key={numColumns}
          data={product}
          numColumns={numColumns}
          contentContainerClassName='max-w-[960px] mx-auto w-full'
          renderItem={({ item }: any) => (
            <ProductListItem product={item} />
          )}
        />
      </View>
    </>
  )
}

export default HomeScreen;