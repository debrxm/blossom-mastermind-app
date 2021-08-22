import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { styles } from "./styles";

export default function RecommendedInvestmentPreview({ customStyles }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("ProductView");
  };
  return (
    <>
      <View style={[styles.recommenedCard, { ...customStyles }]}>
        <View style={styles.plan}>
          <Text style={styles.planText}>1</Text>
        </View>
        <View style={styles.recommenedCardImageContainer}>
          <Image
            style={styles.recommenedCardImage}
            source={require("../../assets/logos/bb.png")}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoName}>Boundless Diamond Executive</Text>
          {/* <Text style={styles.cardInfoLightText}>Boundless Diamond Executive</Text> */}
        </View>
        <View style={styles.recommenedCardFooter}>
          <View style={styles.recommenedCardFooterButtons}>
            <AppButton
              onPress={onPress}
              title="Invest Now"
              customStyle={{
                ...styles.recommenedCardFooterBtn,
                backgroundColor: "#ffffff",
              }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: COLORS.tint,
              }}
            />
            <AppButton
              onPress={onPress}
              title="View Details"
              customStyle={styles.recommenedCardFooterBtn}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
