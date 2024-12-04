import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export const ProductListItem = ({ products }: any) => {
    return (
        <>
            <Link href={`/product/${products.id}`} asChild>
                <Pressable className='flex-1'>
                    <Card className="p-5 rounded-lg max-w-[360px] m-3 flex-1">
                        <Image
                            source={{
                                uri: products.image
                            }}
                            className="mb-6 h-[240px] w-full rounded-md"
                            alt={`${products.name} image`}
                            resizeMode='contain'
                        />
                        <Text className="text-sm font-normal mb-2 text-typography-700">
                            {products.name}
                        </Text>
                        <Heading size="md" className="mb-4">
                            {products.price}
                        </Heading>
                    </Card>
                </Pressable>
            </Link>
        </>
    )
}