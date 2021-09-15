import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InvestmentPreview from "../InvestmentPreview/InvestmentPreview";
import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const ElapsedInvestment = () => {
  const investments = useSelector(
    ({ investments }) => investments.elapsedInvestments
  );
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
    <>
      <View>
        <View style={styles.recommendations}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          >
            {investments.map((item, index) => (
              <InvestmentPreview key={index} data={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default ElapsedInvestment;
