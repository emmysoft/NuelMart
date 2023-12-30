import { Alert, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { FIREBASE_AUTH } from '../../firebase';
// import CustomIcons from '../components/CustomIcons';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const auth = FIREBASE_AUTH;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      Alert.alert("Welcome back");
      navigation.navigate("Home")
    } catch (error) {
      console.log(error)
      Alert.alert("something wrong with your details")
    }
  }

  const handleToggle = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require("../../assets/model3.jpg")} alt='model' style={styles.bgImage} resizeMode='cover' blurRadius={12}>
          <Text style={styles.loginHeader}>Login</Text>
          <View style={styles.inputboxes}>
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
          <CustomButton style={styles.buttonbody}>
            <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
          </CustomButton>

          <View style={styles.links}>
            <Text style={styles.regLink}>Sign up</Text>
            <Text style={styles.pwLink}>Forgot Password?</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

export default Login

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
    gap: 8
  },
  passwordbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
    width: 290,
    backgroundColor: '#808080',
    borderColor: "#808080",
  },
  buttonbody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    gap: 60,
    margin: 40
  },
  regLink: {
    color: "#b39c7e",
    fontWeight: "600",
    fontSize: 19
  },
  pwLink: {
    color: "#b39c7e",
    fontWeight: "600",
    fontSize: 19
  }
})