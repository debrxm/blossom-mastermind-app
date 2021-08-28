import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import { COLORS } from "../../constants/Colors";
import { Height } from "../../constants/Layout";
import CustomSelect from "../CustomSelect/CustomSelect";

import { styles } from "./styles";

const PersonalDetailsForm = ({}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [maritalStatus, setMaritalStatus] = useState();

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
        <Text style={styles.routeTitle}>Personal Details</Text>
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
            autoCompleteType="tel"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            placeholder="Age"
            placeholderTextColor="#97989A"
            autoCapitalize="none"
            onChangeText={(e) => {
              setErrorMessage("");
              setAge(e);
            }}
            value={age}
          />
        </View>
        <CustomSelect
          label="Gender"
          labelStyle={styles.select}
          options={[
            { label: `Female`, value: `female` },
            { label: `Male`, value: `male` },
          ]}
          value={gender}
          onValueChange={setGender}
        />
        <CustomSelect
          label="Marital Status"
          labelStyle={styles.select}
          options={[
            { label: `Single`, value: `single` },
            { label: `Married`, value: `married` },
            { label: `Divorced`, value: `divorced` },
          ]}
          value={maritalStatus}
          onValueChange={setMaritalStatus}
        />
      </View>
    </>
  );
};

export default PersonalDetailsForm;
