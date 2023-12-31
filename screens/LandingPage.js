import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import CustomButton from '../components/CustomButton';

const LandingPage = ({ navigation }) => {

    // const width = useSharedValue(100);

    return (
        <View style={styles.container}>
            <StatusBar style='#fff' />
            <ImageBackground source={require("../assets/model1.jpg")} alt='model' style={styles.bgImage} resizeMode='cover' blurRadius={6}>
                <View style={styles.arrivalTexts}>
                    <Text style={styles.arrivalHeader}>New Arrivals!</Text>
                    <Text style={styles.arrivalPara}>
                        Get ready to elevate your style with our sensational new arrivals!
                        We're thrilled to unveil a curated collection of the hottest trends and must-have looks,
                        available now on NuelMart!!!
                    </Text>
                </View>
                <CustomButton style={styles.surroundings} onPress={() => navigation.navigate("Login")}>
                    Get Started
                    <Ionicons name='arrow-forward' size={24} color={"#000"} />
                </CustomButton>
            </ImageBackground>
        </View>
    );
}

export default LandingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrivalTexts: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        gap: 8,
    },
    arrivalHeader: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 48,
        width: 250,
        textTransform: "uppercase",
    },
    arrivalPara: {
        width: 300,
        color: "#fff",
        fontWeight: "300",
        fontSize: 16
    },
    surroundings: {
        width: 250,
        backgroundColor: "#fff",
        borderRadius: 35,
        borderColor: "#fff",
        borderWidth: 1,
        shadowColor: "#fff",
        shadowOffset: 0.1,
        shadowOpacity: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
        marginTop: 90,
        marginBottom: -200,
        margin: "auto",
        padding: 20,
    },
    internal: {
        color: "#000",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 22,
    },
});
