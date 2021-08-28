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
  FlatList,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import { COLORS } from "../../constants/Colors";
// import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";
const { width, height } = Dimensions.get("window");
// const COLORS = { primary: "#ffffff", white: "#010101" };

import { styles } from "./styles";
const slides = [
  {
    id: "1",
    data: () => <ActiveInvestment />,
    // Component
  },
  {
    id: "2",
    data: () => <ElapsedInvestment />,
  },
];
const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: Width, alignItems: "center" }}>{item.data()}</View>
    </View>
  );
};
const Investment = () => {
  const navigation = useNavigation();
  const [hasInvestment] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const onNavigateToActive = () => {
    const activeScreen = currentSlideIndex - 1;
    if (currentSlideIndex === 1) {
      const offset = activeScreen * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  const onNavigateToElapsed = () => {
    const elapsedScreen = currentSlideIndex + 1;
    if (currentSlideIndex === 0) {
      const offset = elapsedScreen * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
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
              title="Active"
              onPress={() => onNavigateToActive()}
              customStyle={{
                ...styles.walletBtn,
                backgroundColor:
                  currentSlideIndex == 0 ? COLORS.white : COLORS.tint,
              }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: currentSlideIndex == 0 ? COLORS.tint : COLORS.white,
              }}
            />
            <AppButton
              title="Elapsed"
              onPress={() => onNavigateToElapsed()}
              customStyle={{
                ...styles.walletBtn,
                backgroundColor:
                  currentSlideIndex == 1 ? COLORS.white : COLORS.tint,
              }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: currentSlideIndex == 1 ? COLORS.tint : COLORS.white,
              }}
            />
          </View>
        </View>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: height * 0.75 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
      </ScrollView>
    </>
  );
};

export default Investment;

const ActiveInvestment = () => {
  const navigation = useNavigation();
  const [hasInvestment] = useState(false);
  return (
    !hasInvestment && (
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
    )
  );
};
const ElapsedInvestment = () => {
  const navigation = useNavigation();
  const [hasInvestment] = useState(false);
  return (
    !hasInvestment && (
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
    )
  );
};
