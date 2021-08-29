import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton/AppButton";
import { COLORS } from "../../constants/Colors";

import { styles } from "./styles";

const Home = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const [hasInvestment] = useState(false);
  const [isTipHidden, hideTip] = useState(false);
  const [hour, setHour] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    getHour();
  });
  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    setHour(hour);
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.user}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.imageContainer}>
              <Ionicons name="person-circle" size={50} color="#dddcdb" />
              {/* <Image style={styles.profilePic} source={avatar} /> */}
            </View>
          </TouchableOpacity>

          <View style={{ width: 10 }}></View>
          <View style={{}}>
            <Text
              style={[
                styles.title,
                { color: COLORS.lightTextColor, fontSize: 14 },
              ]}
            >
              {hour < 12
                ? `Good Morning`
                : hour < 17
                ? `Good Afternoon`
                : `Good Evening`}
              {/* Good Morning */}
            </Text>
            {user && (
              <Text style={styles.title}>
                <Text
                  style={{
                    color: COLORS.darkTextColor,
                    fontSize: 16,
                  }}
                >
                  {user.first_name} {user.last_name.substring(0, 1)}.
                </Text>
              </Text>
            )}
          </View>
        </View>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Notification")}
        >
          <View style={styles.noty}>
            <Ionicons
              name="md-notifications-outline"
              size={24}
              color={COLORS.black}
            />
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
      </View>
      <View style={styles.container}>
        <View style={styles.wallet}>
          <View style={styles.walletMainTextsContainer}>
            <Text style={styles.walletMainTextLight}>Total Invested</Text>
            <Text style={styles.walletMainTextBold}>{`₦ ${"00.00"}`}</Text>
          </View>
          {/* <View style={styles.walletButtons}>
            <AppButton
              onPress={() => navigation.navigate("TopUp")}
              title="Top Up"
              customStyle={styles.walletBtn}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
              }}
            />
            <AppButton
              onPress={() => navigation.navigate("Products")}
              title="Invest Now"
              customStyle={{ ...styles.walletBtn, backgroundColor: "#ffffff" }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: COLORS.tint,
              }}
            />
          </View> */}
        </View>
        {hasInvestment ? (
          <View style={[styles.sectionContainer, styles.investments]}>
            <Text
              style={[
                styles.sectionContainerTitle,
                styles.investmentsTitleText,
              ]}
            >
              My Investments
            </Text>
          </View>
        ) : (
          <View style={styles.noInvestment}>
            <View style={[styles.sectionContainer, styles.recommended]}>
              <View
                style={[
                  styles.sectionContainerHead,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.sectionContainerTitle,
                    styles.recommendedTitleText,
                  ]}
                >
                  Recommended
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Packages")}
                >
                  <Text
                    style={[
                      styles.sectionContainerTitle,
                      styles.recommendedTitleText,
                      { color: COLORS.tint, fontSize: 12 },
                    ]}
                  >
                    See all
                  </Text>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.recommendations}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.contentContainer}
                ></ScrollView>
              </View>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

export default Home;
