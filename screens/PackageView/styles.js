import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 80,
    backgroundColor: COLORS.tint,
    justifyContent: "space-between",
  },
  routeTitle: {
    color: COLORS.cloudyWhite,
    fontSize: 16,
    letterSpacing: 1,
  },
  name_roi: {
    flexDirection: "row",
    width: Width,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.tint,
    paddingBottom: 50,
  },
  productName: {
    color: COLORS.cloudyWhite,
    fontSize: 30,
    paddingVertical: 20,
  },
  productRoi: {
    color: COLORS.cloudyWhite,
    fontSize: 20,
    paddingVertical: 20,
  },
  planBox: {
    width: Width / 4,
    height: Height / 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowRadius: 1,
    shadowOpacity: 0.5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  planBoxBoldText: {
    fontSize: 12,
    textTransform: "uppercase",
  },
  planBoxLightText: {
    fontSize: 16,
  },
  breakdown: {
    marginTop: 40,
  },
  breakdownTitle: {
    color: COLORS.lightTextColor,
    marginTop: 10,
    fontSize: 13,
    letterSpacing: 2,
    fontWeight: "600",
  },
  breakdownBox: {
    width: Width / 5,
    height: Height / 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowRadius: 1,
    shadowOpacity: 0.5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  breakdownBoxBoldText: {
    fontSize: 12,
    textTransform: "uppercase",
  },
  breakdownBoxLightText: {
    fontSize: 16,
  },
  selectPlanText: {
    fontSize: 15,
    paddingVertical: 20,
    textAlign: "center",
  },
  descriptionText: {
    textAlign: "center",
    color: "#a6a5a2",
    marginVertical: 10,
    fontSize: 13,
    letterSpacing: 0.05,
    lineHeight: 28,
    paddingVertical: 10,
  },
  modalTextButton: {
    marginVertical: 3,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  modalText: {
    color: "#111111",
    fontSize: 14,
  },
  btn: {
    height: 30,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  investAmount: {
    textAlign: "center",
    paddingVertical: 30,
  },
  payMethodBtn: {
    height: 40,
    paddingVertical: 10,
    borderRadius: 30,
    marginVertical: 5,
  },
  investNowBtn: {
    marginTop: "auto",
    width: "70%",
    marginBottom: 80,
    borderRadius: 30,
  },
});
