import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import AppButton from "../../components/AppButton/AppButton";

import { styles } from "./styles";

const Investment = () => {
  const navigation = useNavigation();
  const [hasInvestment] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Investments</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.wallet}>
          <View style={styles.walletMainTextsContainer}>
            <Text style={styles.walletMainTextBold}>{`₦ ${"00.00"}`}</Text>
          </View>
          <View style={styles.walletButtons}>
            <AppButton
              onPress={() => navigation.navigate("TopUp")}
              title="Active"
              customStyle={styles.walletBtn}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
              }}
            />
            <AppButton
              onPress={() => navigation.navigate("Products")}
              title="Matured"
              customStyle={{ ...styles.walletBtn, backgroundColor: "#ffffff" }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: "#cd9931",
              }}
            />
          </View>
        </View>
        {!hasInvestment && (
          <View style={styles.noInvestment}>
            <Text style={[styles.noDataText, styles.noInvestmentText]}>
              You currently have no invetsment.
            </Text>
            <AppButton
              onPress={() => navigation.navigate("Products")}
              title="Start Investing"
              customStyle={{
                ...styles.walletBtn,
                backgroundColor: "#ffffff",
              }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: "#cd9931",
              }}
            />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default Investment;
