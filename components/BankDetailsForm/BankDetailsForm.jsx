import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import CustomPopUp from "../CustomPopUp/CustomPopUp";
import { COLORS } from "../../constants/Colors";
import CustomSelect from "../CustomSelect/CustomSelect";

import { styles } from "./styles";
import AppButton from "../AppButton/AppButton";
import { Height } from "../../constants/Layout";

const BankDetailsForm = ({}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [nameOnBVN, setNameOnBVN] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [accountNumber, setAccountNumber] = useState();

  return (
    <>
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
      <View style={styles.header}>
        <Text style={styles.routeTitle}>Bank Details</Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          height: Height * 0.7,
          justifyContent: "flex-start",
        }}
      >
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Name as written on BVN"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setNameOnBVN(e);
            }}
            value={nameOnBVN}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            placeholder="Account number"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setAccountNumber(e);
            }}
            value={accountNumber}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Bank name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setBankName(e);
            }}
            value={bankName}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Bank branch"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setBankBranch(e);
            }}
            value={bankBranch}
          />
        </View>
      </View>
      <View style={styles.submitBtnContainer}>
        <AppButton
          onPress={() => {}}
          title="Submit"
          customStyle={styles.submitBtn}
          textStyle={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: 15,
            color: COLORS.white,
            textAlign: "center",
          }}
        />
      </View>
    </>
  );
};

export default BankDetailsForm;
