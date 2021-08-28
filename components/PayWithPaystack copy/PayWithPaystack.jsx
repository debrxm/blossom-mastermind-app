// import React, { useState, useRef } from "react";
// import Constants from "expo-constants";
// import PaystackWebView from "react-native-paystack-webview";
// import { paystackTestKeys } from "../../configs/apiKeys";
// import { useDispatch } from "react-redux";
// import AppButton from "../AppButton/AppButton";

// import { styles } from "./styles";

// const PayWithPaystack = ({ amount, handleCreateInvoice }) => {
//   let childRef;
//   const [cancel, setCancel] = useState("");
//   const dispatch = useDispatch();
//   const handleWebViewMessage = (e) => {
//     console.log("WALLET VALUES ===:", e);
//     handleCreateInvoice();
//   };

//   return (
//     <>
//       <PaystackWebView
//         showPayButton={false}
//         paystackKey={paystackTestKeys.public}
//         amount={"500000"}
//         billingEmail="payment@boundlessservicesng.com"
//         billingMobile="09787377462"
//         billingName="Boundless Investment"
//         // ActivityIndicatorColor="green"
//         // SafeAreaViewContainer={{ marginTop: 5 }}
//         // SafeAreaViewContainerModal={{ marginTop: 5 }}
//         ref={(ref) => (childRef = ref)}
//         onCancel={(e) => {
//           setCancel("oooops transaction cancelled!");
//         }}
//         onSuccess={handleWebViewMessage}
//         autoStart={false}
//         //refNumber={}  this is only for cases where you have a reference number generated
//       />

//       <AppButton
//         onPress={() => {
//           // if (!amount) return;
//           childRef.current.StartTransaction();
//         }}
//         title={"Top Up"}
//         customStyle={styles.payMethodBtn}
//         textStyle={{
//           textTransform: "capitalize",
//           fontWeight: "400",
//           fontSize: 12,
//         }}
//       />
//     </>
//   );
// };

// export default PayWithPaystack;
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import PaystackWebView from "react-native-paystack-webview";

export default function PayWithPaystack() {
  return (
    <View style={{ flex: 1 }}>
      <PaystackWebView
        buttonText="Pay Now"
        showPayButton={false}
        paystackKey="pk_test_key"
        amount={100}
        billingEmail="waleyinka55@gmail.com"
        billingMobile="0123456789"
        billingName="Jimoh Jamiu"
        channels={JSON.stringify(["card", "bank"])}
        ActivityIndicatorColor="green"
        SafeAreaViewContainer={{ marginTop: 5 }}
        SafeAreaViewContainerModal={{ marginTop: 5 }}
        handleWebViewMessage={(e) => {}}
        onCancel={(resp) => {
          console.log(resp);
        }}
        onSuccess={(resp) => {
          console.log(resp);
        }}
        autoStart={true}
      />
    </View>
  );
}
