import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
export const styles = StyleSheet.create({
  productCard: {
    width: "95%",
    height: 250,
    position: "relative",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: COLORS.cloudyWhite,
    elevation: 3,
    borderRadius: 12,
    padding: 10,
    position: "relative",
  },
  plan: {
    paddingHorizontal: 10,
    height: 25,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tint,
    borderRadius: 25,
    elevation: 3,
  },
  planText: { color: "#ffffff", fontSize: 10 },
  productCardImageContainer: {
    borderRadius: 10,
    height: 79,
    width: 79,
  },
  productCardImage: {
    height: 60,
    width: 60,
    borderRadius: 12,
    resizeMode: "contain",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingTop: 5,
  },
  cardInfoName: {
    color: COLORS.darkTextColor,
    fontSize: 20,
    marginVertical: 10,
  },
  cardInfoLightText: {
    color: "#97989A",
    fontSize: 15,
  },
  cardInfoDuration: {
    paddingTop: 10,
  },
  cardInfoDurationLightText: {
    fontSize: 15,
    color: COLORS.lightTextColor,
  },
  cardInfoDurationBoldText: {
    fontSize: 20,
    color: COLORS.tint,
  },
  cardInfoCost: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardInfoCostLightText: {
    fontSize: 15,
    color: COLORS.lightTextColor,
  },
  cardInfoCostBoldText: {
    fontSize: 20,
    color: COLORS.tint,
  },
  productCardFooter: {
    width: "100%",
    position: "absolute",
    bottom: 12,
    left: 9,
  },
  productCardFooterButtons: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  productCardFooterBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: "90%",
  },
});
