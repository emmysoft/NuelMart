import { StyleSheet, Text, Pressable } from 'react-native'

const CustomButton = ({ children, onPress, style, }) => {
    return (
        <Pressable style={style} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 20,
        textAlign: "center",
        padding: 10,
    },
});