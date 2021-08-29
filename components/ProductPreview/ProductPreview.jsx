import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS } from "../../constants/Colors";
import AppButton from "../AppButton/AppButton";
import { styles } from "./styles";

export default function ProductPreview({ data, customStyles }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("PackageView", { data });
  };
  return (
    <>
      <View style={[styles.productCard, { ...customStyles }]}>
        <View style={styles.plan}>
          <Text style={styles.planText}>ROI: {data.roi}%</Text>
        </View>

        <View style={styles.cardInfo}>
          <View>
            <Text style={styles.cardInfoName}>{data.name}</Text>
            <View style={styles.cardInfoDuration}>
              <Text
                style={[styles.cardInfoDurationLightText, { marginBottom: 6 }]}
              >
                Duration
              </Text>
              <Text
                style={[styles.cardInfoDurationBoldText, { marginBottom: 6 }]}
              >
                {data.duration}
              </Text>
            </View>
          </View>
          <View style={styles.productCardImageContainer}>
            <Image
              style={styles.productCardImage}
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.cardInfoCost}>
          <Text style={styles.cardInfoCostLightText}>Cost</Text>
          <Text style={styles.cardInfoCostBoldText}>₦{data.cost}</Text>
        </View>
        <View style={styles.productCardFooter}>
          <View style={styles.productCardFooterButtons}>
            <AppButton
              onPress={onPress}
              title="View Details"
              customStyle={styles.productCardFooterBtn}
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
