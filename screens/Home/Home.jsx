import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { firestore } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton/AppButton";
import RecommendedInvestmentPreview from "../../components/RecommendedInvestmentPreview/RecommendedInvestmentPreview";
import { COLORS } from "../../constants/Colors";
import { Plans } from "../../constants/Packages";
import { auth } from "../../firebase/config";

import { styles } from "./styles";

const Home = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const hasNoty = useSelector(({ user }) => user.hasNoty);
  const [isLoading, setIsLoading] = useState(true);
  const [packages, setPackages] = useState([]);
  const [hasInvestment] = useState(false);
  const [hour, setHour] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    getHour();
    getPackages();
  });
  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    setHour(hour);
  };
  const packagesRef = firestore.collection("packages");
  const getPackages = async () => {
    setIsLoading(true);
    packagesRef.limit(3).onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        let loadedPackages = [];
        for (let index = 0; index < snapShot.docs.length; index++) {
          const data = {
            id: snapShot.docs[index].id,
            ...snapShot.docs[index].data(),
          };
          loadedPackages.push(data);
        }
        setPackages(loadedPackages);
      }
    });
    setIsLoading(false);
  };
  const resendVerificationLink = () => {
    auth.currentUser.sendEmailVerification();
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
                {
                  color: COLORS.lightTextColor,
                  fontSize: responsiveFontSize(1.8),
                },
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
                    fontSize: responsiveFontSize(2.2),
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
            {hasNoty && <View style={styles.dot}></View>}
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        ></View>
      </View>
      {/* <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.contentContainer}
                ></ScrollView> */}
      <View style={styles.contentWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerContentContainer}
          style={styles.container}
        >
          <View style={styles.wallet}>
            <View style={styles.walletMainTextsContainer}>
              <Text style={styles.walletMainTextLight}>Total Invested</Text>
              <Text style={styles.walletMainTextBold}>{`₦ ${
                user.total_invested === 0 ? "00.00" : user.total_invested
              }`}</Text>
            </View>
            <View style={styles.walletButtons}>
              <AppButton
                onPress={() => navigation.navigate("Investments")}
                title="View Investments"
                customStyle={{
                  ...styles.walletBtn,
                  backgroundColor: "#ffffff",
                }}
                textStyle={{
                  textTransform: "capitalize",
                  fontWeight: "400",
                  fontSize: responsiveFontSize(1.8),
                  color: COLORS.tint,
                }}
              />
            </View>
          </View>

          {hasInvestment ? (
            <>
              <View style={[styles.sectionContainer, styles.investments]}>
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
                    Activity
                  </Text>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("Packages")}
                  >
                    <Text
                      style={[
                        styles.sectionContainerTitle,
                        styles.recommendedTitleText,
                        {
                          color: COLORS.tint,
                          fontSize: responsiveFontSize(1.5),
                        },
                      ]}
                    >
                      See all
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>

              <View style={[styles.sectionContainer, styles.investments]}>
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
                    Transactions
                  </Text>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("Transactions")}
                  >
                    <Text
                      style={[
                        styles.sectionContainerTitle,
                        styles.recommendedTitleText,
                        {
                          color: COLORS.tint,
                          fontSize: responsiveFontSize(1.5),
                        },
                      ]}
                    >
                      See all
                    </Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </>
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
                        {
                          color: COLORS.tint,
                          fontSize: responsiveFontSize(1.5),
                        },
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
                  >
                    {!packages.length
                      ? Plans.map((item, index) => (
                          <RecommendedInvestmentPreview
                            key={index}
                            data={item}
                          />
                        ))
                      : packages.map((item, index) => (
                          <RecommendedInvestmentPreview
                            key={index}
                            data={item}
                          />
                        ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          )}
          {!user.emailVerified && (
            <View style={[styles.sectionContainer, styles.tips]}>
              <View style={styles.tipContainer}>
                <View style={styles.tipImageContainer}>
                  <AntDesign
                    name="warning"
                    size={24}
                    color={COLORS.cloudyWhite}
                  />
                </View>
                <View style={styles.tipTexts}>
                  <Text style={styles.tipTextBold}>
                    {/* A verification link has been send to this email  */}
                    {user.email}
                  </Text>
                  <Text style={styles.tipTextLight}>
                    Please verify your email to avoid any interruption
                  </Text>
                </View>
                <TouchableWithoutFeedback onPress={resendVerificationLink}>
                  <View
                    style={[
                      styles.tipImageContainer,
                      { backgroundColor: COLORS.success },
                    ]}
                  >
                    <AntDesign
                      name="reload1"
                      size={24}
                      color={COLORS.cloudyWhite}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
