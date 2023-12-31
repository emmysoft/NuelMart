import { ImageBackground, StyleSheet, Text, View, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebase';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUp = ({ navigation }) => {

    const auth = FIREBASE_AUTH;
        
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            Alert.alert("Welcome")
            navigation.navigate("Home");
        } catch (error) {
            console.log(error)
            Alert.alert("Wrong Email and password");
        }
    }

    const handleToggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/model3.jpg")} alt='model' style={styles.bgImage} resizeMode='cover' blurRadius={12}>

                <Text style={{ color: "#fff", fontWeight: 500, fontSize: 20 }}>SignUp</Text>
                <View style={styles.inputboxes}>
                    <View style={styles.emailbox}>
                        <Ionicons name="person" size={24} color={"#b49e81"} style={{ position: "absolute", top: 20, left: -25 }} />
                        <CustomInput placeholder="Full Name" onChangeText={(text) => setFullName(text)} style={styles.input} value={fullName} type="text" />
                    </View>
                    <View style={styles.emailbox}>
                        {/* <Text style={styles.label}>Email</Text> */}
                        <Ionicons name="mail-outline" size={22} color={"#b49e81"} style={{ position: "absolute", top: 20, left: -25 }} />
                        <CustomInput placeholder="Email" onChangeText={(text) => setEmail(text)} style={styles.input} value={email} type="email" />
                    </View>
                    <View style={styles.passwordbox}>
                        {/* <Text style={styles.label}>Password</Text> */}
                        <Ionicons name="lock-closed-outline" size={22} color={"#b49e81"} style={{ position: "absolute", top: 20, left: -25 }} />
                        <CustomInput placeholder="Password" onChangeText={(text) => setPassword(text)} style={styles.input} value={password} type="password" secureTextEntry={!isVisible} />
                        <Pressable onPress={handleToggle} style={{ position: "absolute", top: 20, left: 250 }}>
                            <Ionicons name={isVisible ? "eye" : "eye-off"} size={20} color={"#b49e81"} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.bottomFlex}>
                    <CustomButton style={styles.buttonbody} onPress={handleSignUp}>
                        Register
                    </CustomButton>
                    <Text onPress={() => navigation.navigate("Login")} style={{ color: "#ff0000", fontWeight: 500, fontSize: 15 }}>
                        Already have an account?
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputboxes: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 24,
        marginVertical: 50,
    },
    loginHeader: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 24,
        textTransform: "capitalize",
        color: "#b49e81",
        marginTop: 50
    },
    emailbox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    passwordbox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    input: {
        borderRadius: 15,
        borderWidth: 1,
        padding: 12,
        width: 290,
        backgroundColor: '#808080',
        borderColor: "#808080",
    },
    bottomFlex: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    buttonbody: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: 270,
        backgroundColor: "#b49e81",
        borderRadius: 15,
        borderColor: "#b94e81",
        shadowColor: "#fff",
        shadowOffset: 0.1,
        shadowOpacity: 1,
        elevation: 1,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 22,
    },

})