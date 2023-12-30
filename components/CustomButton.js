import { View, Text } from 'react-native'

const CustomButton = ({ children, onPress, style, }) => {
    return (
        <View style={style} onPress={onPress}>
            <Text>{children}</Text>
        </View>
    );
}

export default CustomButton;