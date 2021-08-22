import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 80,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#111111",
    fontSize: 14,
    letterSpacing: 1,
  },
  productName: {
    fontSize: 20,
    paddingVertical: 20,
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
    width: "90%",
    marginBottom: 10,
    borderRadius: 30,
  },
});
