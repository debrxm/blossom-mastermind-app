import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 15,
    paddingHorizontal: 10,
    zIndex: 1,
    minHeight: 80,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "auto",
  },
  title: {
    fontSize: 16,
    color: COLORS.darkTextColor,
  },
  imageContainer: {},
  profilePic: {
    width: 28,
    height: 28,
    borderRadius: 15,
  },
  noty: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 2,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  wallet: {
    minHeight: 140,
    backgroundColor: COLORS.tint,
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 15,
  },
  walletMainTextsContainer: {
    alignItems: "center",
  },
  walletMainTextLight: {
    fontSize: 12,
    color: COLORS.cloudyWhite,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  walletMainTextBold: {
    color: COLORS.white,
    fontSize: 25,
  },
  walletButtons: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-evenly",
    width: "100%",
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  walletBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: "90%",
  },
  sectionContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  sectionContainerTitle: {
    color: "#97989A",
    marginTop: 10,
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: "600",
  },
  noInvestment: {
    flex: 1,
  },
  recommendation: {
    flex: 1,
  },
  recommendations: {
    paddingVertical: 10,
    minHeight: 260,
  },
  contentContainer: {
    padding: 10,
    paddingLeft: 2,
    width: (Width / 1.455) * 3,
  },
  investments: {
    marginHorizontal: 10,
  },
  investmentsTitleText: {
    color: "#111111",
    marginTop: 10,
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: "600",
  },
  tips: {
    // marginTop: "auto",
  },
  tipContainer: {
    width: Width - 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.cloudyWhite,
    padding: 10,
    position: "relative",
    bottom: 80,
  },
  tipImageContainer: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.warn,
    borderRadius: 20,
    elevation: 3,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  tipImage: {
    height: 30,
    width: 26,
  },
  tipTexts: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.black,
  },
  tipTextBold: {
    textAlign: "center",
    color: COLORS.black,
  },
  tipTextLight: {
    textAlign: "center",
    color: COLORS.black,
    letterSpacing: 0.05,
    fontSize: 12,
  },
});
