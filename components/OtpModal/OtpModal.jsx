import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";
import { Dimensions, Text, Modal, View, TouchableOpacity } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";

const OtpModal = ({ modalVisible, setModalVisible }) => {
  const user = useSelector((state) => state.user.currentUser);
  const navigation = useNavigation();
  const [otp, setOpt] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const otpInput = useRef(null);
  console.log(otpInput);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  return (
    <>
      <View style={{ position: "absolute", top: 0 }}>
        <Modal
          animationType="fade"
          transparent={true}
          statusBarTranslucent={true}
          visible={modalVisible}
          onRequestClose={() => {}}
          style={{
            width: "100%",
            height: Dimensions.get("screen").height,
          }}
        >
          <View style={styles.header}>
            <View style={{ position: "absolute", bottom: 80, width: "100%" }}>
              <TouchableOpacity
                // style={{ width: 50, alignItems: "flex-end" }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <AntDesign name="close" size={24} color={COLORS.danger} />
              </TouchableOpacity>
            </View>
            <Text style={styles.routeTitle}>Verify OTP</Text>
          </View>
          <View style={styles.container}>
            <OTPTextInput
              inputCount={6}
              tintColor={COLORS.tint}
              textInputStyle={{ width: 30, borderWidth: 1 }}
              containerStyle={{
                width: Width,
                justifyContent: "space-evenly",
                alignItems: "flex-start",
              }}
              ref={otpInput}
              handleTextChange={(e) => {
                console.log(e);
              }}
            />
            {/* <Button title="clear" onClick={clearText}> */}
          </View>
        </Modal>
      </View>
    </>
  );
};

export default OtpModal;
