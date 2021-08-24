import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { auth, firestore } from "../../firebase/config";
import { createUserProfile } from "../../firebase/firestore";
import AppButton from "../../components/AppButton/AppButton";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { validateUser } from "../../utils/validations";

import { styles } from "./styles";
import OtpModal from "../../components/OtpModal/OtpModal";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(true);
  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [toggleShowConfirmPassword, setToggleShowConfirmPassword] =
    useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);

  const handleRegisterUser = async () => {
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      confirmPassword.trim() === "" ||
      password.trim() === ""
    ) {
      setErrorMessage("All fields are required");
      return;
    }
    const result = validateUser({
      first_name: firstName,
      last_name: lastName,
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
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // Verify phone number then send user data to database
      await createUserProfileDocument(user, {
        name: `${firstName} ${lastName}`,
        phone,
      });
      setLoading(false);
    } catch (error) {
      error.code === "auth/email-already-in-use"
        ? setErrorMessage(
            "The email address is already in use by another account"
          )
        : error.code === "auth/weak-password"
        ? setErrorMessage("Password should be at least 6 characters")
        : setErrorMessage("Internal server error");
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/auth-bg.png")}
      style={styles.bgStyle}
    >
      <OtpModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
            placeholder="First name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setFirstName(e);
            }}
            value={firstName}
          />
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
            placeholder="Last name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setLastName(e);
            }}
            value={lastName}
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
        <View style={styles.inputGroup}>
          <AntDesign
            style={styles.inputGroupIcon}
            name="lock"
            size={22}
            color="#97989A"
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry={!toggleShowPassword ? true : false}
            placeholder="Password"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setPassword(e);
            }}
            value={password}
          />
          <TouchableWithoutFeedback
            onPress={() => setToggleShowPassword(!toggleShowPassword)}
          >
            <Feather
              name={toggleShowPassword ? "eye-off" : "eye"}
              size={20}
              color="#97989A"
              style={{ marginRight: 10 }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputGroup}>
          <AntDesign
            style={styles.inputGroupIcon}
            name="lock"
            size={22}
            color="#97989A"
          />
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry={!toggleShowConfirmPassword ? true : false}
            placeholder="Confirm password"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setConfirmPassword(e);
            }}
            value={confirmPassword}
          />
          <TouchableWithoutFeedback
            onPress={() =>
              setToggleShowConfirmPassword(!toggleShowConfirmPassword)
            }
          >
            <Feather
              name={toggleShowConfirmPassword ? "eye-off" : "eye"}
              size={20}
              color="#97989A"
              style={{ marginRight: 10 }}
            />
          </TouchableWithoutFeedback>
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
