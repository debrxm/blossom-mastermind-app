import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

import { styles } from "./styles";

const Communication = () => {
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
        <Text style={styles.routeTitle}>Communications</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      ></ScrollView>
    </>
  );
};

export default Communication;
