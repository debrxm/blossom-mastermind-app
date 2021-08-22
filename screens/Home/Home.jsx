import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton/AppButton";
import { COLORS } from "../../constants/Colors";

import { styles } from "./styles";

const Home = () => {
  // const { user } = useSelector(({ Auth }) => Auth);
  const user = {
    first_name: "Sam",
    last_name: "Jackson",
    email: "ibrahxxm@gmail.com",
    phone: "08117671213",
  };
  const [hasInvestment] = useState(false);
  const [isTipHidden, hideTip] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {});

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <View style={styles.noty}>
            <Ionicons name="notifications" size={24} color="#dddcdb" />
          </View>
        </TouchableOpacity>
        {user && (
          <Text style={styles.title}>
            {" "}
            Hi,{" "}
            <Text
              style={{
                color: "#dddcdb",
              }}
            >
              {user.first_name}
            </Text>
          </Text>
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.imageContainer}>
              <Ionicons name="person-circle" size={30} color="#dddcdb" />
              {/* <Image style={styles.profilePic} source={avatar} /> */}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.wallet}>
          <View style={styles.walletMainTextsContainer}>
            <Text style={styles.walletMainTextLight}>Your Balance</Text>
            <Text style={styles.walletMainTextBold}>{`₦ ${"00.00"}`}</Text>
          </View>
          <View style={styles.walletButtons}>
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
          </View>
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
              <View style={styles.sectionContainerHead}>
                <Text
                  style={[
                    styles.sectionContainerTitle,
                    styles.recommendedTitleText,
                  ]}
                >
                  Recommended
                </Text>
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
