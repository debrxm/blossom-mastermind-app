import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Width } from "../../constants/Layout";
import { COLORS } from "../../constants/Colors";
const { width, height } = Dimensions.get("window");
import notificationIcon from "../../assets/images/notification.png";

import { styles } from "./styles";

const Notification = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  useEffect(() => {}, []);

  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Notifications</Text>
      </View>
      {hasMessage ? (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.container}
        ></ScrollView>
      ) : (
        <NoMessage
          item={{
            image: notificationIcon,
            title: "You currently do not have notification",
            subtitle: `You will see notifications about your investment appear here `,
          }}
        />
      )}
    </>
  );
};

export default Notification;

const NoMessage = ({ item }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        height: height,
      }}
    >
      <Image
        source={item?.image}
        style={{ height: "30%", width, resizeMode: "contain", marginTop: -100 }}
      />
      <View style={{ width: Width, alignItems: "center" }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};
