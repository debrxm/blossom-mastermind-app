import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InvestmentPreview from "../InvestmentPreview/InvestmentPreview";
import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { useNavigation } from "@react-navigation/native";
import { Height } from "../../constants/Layout";

import { styles } from "./styles";

const ActiveInvestment = () => {
  const investments = useSelector(
    ({ investments }) => investments.activeInvestments
  );
  console.log(investments);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return !investments ? (
    <View style={styles.noInvestment}>
      <Text style={[styles.noDataText, styles.noInvestmentText]}>
        You currently have no invetsment.
      </Text>
      <AppButton
        onPress={() => navigation.navigate("Packages")}
        title="Start Investing"
        customStyle={{
          backgroundColor: "#ffffff",
        }}
        textStyle={{
          textTransform: "capitalize",
          fontWeight: "400",
          fontSize: 12,
          color: COLORS.tint,
        }}
      />
    </View>
  ) : (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "center",
      }}
      style={{ paddingVertical: 20, height: Height * 0.65, paddingBottom: 10 }}
    >
      {investments.map((item, index) => (
        <InvestmentPreview key={index} data={item} />
      ))}
    </ScrollView>
  );
};
export default ActiveInvestment;
