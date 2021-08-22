import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { validateLoginUser } from "../../utils/validations";

import { styles } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const handleSubmit = async () => {
    if (email.trim() === "" || phone.trim() === "") {
      setErrorMessage("All fields are required");
      return;
    }
    const result = validateLoginUser({ password: phone, email });
    if (result.errors.length) {
      setErrorMessage(result.errors.toString().replace(/\,/gi, " "));
      setLoading(false);
      return;
    }
    setLoading(true);
    onLogUserIn();
  };
  const onLogUserIn = async () => {
    try {
      // await LOGIN_USER({ email: email, password: phone });
      setEmail("");
      setPhone("");
      setLoading(false);
    } catch (error) {
      setErrorMessage("Ooops An error occured try again");
      // console.log("====================================");
      // console.log(error);
      // console.log("====================================");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.png")}
      style={styles.bgStyle}
    >
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>Welcome Back</Text>
          <Text style={styles.headSubText}>Login to access your account</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          {errorMessage !== "" ? (
            <CustomPopUp
              message={`${errorMessage}`}
              type={"error"}
              customStyles={{
                backgroundColor: "red",
                borderRadius: 30,
                justifyContent: "center",
              }}
              customTextStyles={{ color: "#ffffff" }}
            />
          ) : null}
        </View>
        <View style={styles.inputGroup}>
          <FontAwesome
            name="envelope-o"
            style={styles.inputGroupIcon}
            size={19}
            color="#97989A"
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setEmail(e);
            }}
            value={email}
          />
        </View>
        <View style={styles.inputGroup}>
          <Feather
            name="phone"
            style={styles.inputGroupIcon}
            size={20}
            color="#97989A"
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            placeholder="Phone"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setPhone(e);
            }}
            value={phone}
          />
        </View>
        <View style={{ marginVertical: 15 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("Reset");
            }}
          >
            <Text style={{ textAlign: "center", color: "#743c79" }}>
              Forgot password?
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.btns}>
          <AppButton
            onPress={handleSubmit}
            title="Login"
            customStyle={styles.btn}
            loading={loading}
            textStyle={{
              textTransform: "capitalize",
              fontWeight: "400",
              marginTop: -3,
              letterSpacing: 1.2,
            }}
          />
        </View>
        <View style={{ position: "absolute", bottom: 20, width: "100%" }}>
          <Text style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: "#743c79" }}>Register</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
// export default Login;
