import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useLinking } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/Colors";
import logo from "../../assets/images/logo.png";
import { styles } from "./styles";

const About = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  useEffect(() => {}, []);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Abouts</Text>
      </View>

      <View
        // contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <Text style={styles.orgName}>Boundless muilti-services</Text>
        <Text style={styles.orgName}>solutions Nigeria ltd</Text>
        <Text style={styles.descriptionText}>
          is a Real Estate and Project Management company with primary
          commitment in land/property development, real estate investment and
          brokerage services. Our interest to offer excellent services in the
          real estate industry is second to none as we provide professional and
          flexible service to our streams of customers both in Nigeria and
          outside the country
        </Text>
        <Image source={logo} style={{ flex: 1, width: "100%" }} />
      </View>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.boundlessservicesng.com/")}
        style={styles.readmore}
      >
        <Text style={styles.readmoreText}>READ MORE</Text>
        <Ionicons name="chevron-forward-outline" size={16} color={colors[0]} />
      </TouchableOpacity>
    </>
  );
};

export default About;
