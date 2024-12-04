import { View, Text } from 'react-native';

export const ProductListItem = ({ product }: any) => {
    return (
        <View>
            <Text>{product.name}</Text>
        </View>
    )
}