import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { COLORS } from "../../constants/Colors";
import { Height } from "../../constants/Layout";
import CustomSelect from "../CustomSelect/CustomSelect";

import { styles } from "./styles";

const NextOfKinDetailsForm = ({}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();

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
        <Text style={styles.routeTitle}>Next of Kin Details</Text>
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
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Middle name"
            placeholderTextColor="#97989A"
            autoCapitalize="words"
            onChangeText={(e) => {
              setErrorMessage("");
              setMiddleName(e);
            }}
            value={middleName}
          />
        </View>
        <View style={styles.inputGroup}>
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
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
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
      </View>
    </>
  );
};

export default NextOfKinDetailsForm;
