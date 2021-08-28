import React, { useEffect, useRef } from "react";
import ReactNativePaystackWebviewModule, {
  Paystack,
  paystackProps,
} from "react-native-paystack-webview";
import { TouchableOpacity, Text, View } from "react-native";
import { paystackTestKeys } from "../../configs/apiKeys";
import { useDispatch } from "react-redux";
import AppButton from "../AppButton/AppButton";

import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";

const PayWithPaystack = ({ amount, label }) => {
  useEffect(() => {});

  const paystackWebViewRef = useRef();
  const onSuccess = async () => {
    try {
    } catch (err) {
      // "Ooops an error occured wallet no funded" + " " + err,
    }
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: COLORS.white,
        bottom: 80,
      }}
    >
      <Paystack
        showPayButton={false}
        paystackKey={paystackTestKeys.public}
        amount={amount || 500000}
        billingEmail="payment@blossommatermind.com"
        billingMobile="09787377462"
        billingName="Blossom Mastermind International"
        ActivityIndicatorColor="green"
        SafeAreaViewContainer={{ marginTop: 5 }}
        SafeAreaViewContainerModal={{ marginTop: 5 }}
        ref={paystackWebViewRef}
        onCancel={(e) => {
          console.log("oooops transaction cancelled!");
        }}
        onSuccess={onSuccess}
        autoStart={false}
      />

      <AppButton
        onPress={() => {
          paystackWebViewRef.current.startTransaction();
        }}
        title={label}
        customStyle={styles.payMethodBtn}
        textStyle={{
          textTransform: "capitalize",
          fontWeight: "400",
          fontSize: 15,
          color: COLORS.white,
        }}
      />
    </View>
  );
};

export default PayWithPaystack;
