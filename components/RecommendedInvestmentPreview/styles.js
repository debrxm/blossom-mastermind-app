import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";
export const styles = StyleSheet.create({
  recommenedCard: {
    width: Width / 1.5,
    height: 260,
    position: "relative",
    marginRight: 8,
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 12,
    padding: 10,
    paddingTop: 0,
    alignItems: "center",
  },
  pattern: {
    height: "30%",
    width: Width / 1.5,
    borderRadius: 12,
  },
  recommenedCardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },

  name: {
    textAlign: "center",
    fontSize: 25,
  },
  duration: {
    textAlign: "center",
    fontSize: 15,
    color: COLORS.lightTextColor,
  },
  cardInfo: {
    alignItems: "center",
  },
  cost: {
    textAlign: "center",
    fontSize: 25,
    color: COLORS.tint,
  },
  roiContainer: {
    paddingHorizontal: 10,
    height: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightTint,
    borderRadius: 25,
    elevation: 3,
  },
  roi: { color: "#ffffff", fontSize: 10 },
  productCardFooterBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: Width * 0.55,
  },
});
