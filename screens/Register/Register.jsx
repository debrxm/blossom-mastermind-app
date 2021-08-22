import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { validateUser } from "../../utils/validations";

import { styles } from "./styles";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);

  const handleRegisterUser = async () => {
    if (fullname.trim() === "" || email.trim() === "" || phone.trim() === "") {
      setErrorMessage("All fields are required");
      return;
    }
    const result = validateUser({
      first_name: fullname.split(" ")[0],
      last_name: fullname.split(" ")[1],
      phone_number: phone,
      email,
    });
    if (result.errors.length) {
      setErrorMessage(result.errors.toString().replace(/\,/gi, " "));
      return;
    }
    setLoading(true);
    createUser();
  };
  const createUser = async () => {
    console.log("====================================");
    console.log(fullname.split(" ")[0], fullname.split(" ")[1], phone, email);
    console.log("====================================");
    try {
      // await REGISTER_USER({
      //   email: email,
      //   first_name: fullname.split(" ")[0],
      //   last_name: fullname.split(" ")[1],
      //   phone_number: phone,
      // });
      setLoading(false);
      // navigation.navigate("Dashboard");
    } catch (error) {
      setLoading(false);
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.png")}
      style={styles.bgStyle}
    >
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.headText}>Create Account</Text>
          <Text style={styles.headSubText}>
            This will only take few seconds
          </Text>
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
            name="user-o"
            style={styles.inputGroupIcon}
            size={20}
            color="#97989A"
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Full name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setFullname(e);
            }}
            value={fullname}
          />
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
            keyboardType="email-address"
            underlineColorAndroid="transparent"
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

        <View style={styles.btns}>
          <AppButton
            onPress={handleRegisterUser}
            title="Create Account"
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
            Already have an account?{" "}
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#743c79" }}>Login</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
