import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";

export const styles = StyleSheet.create({
  header: { marginBottom: 20 },
  routeTitle: {
    color: COLORS.black,
    fontSize: 16,
    letterSpacing: 1,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "95%",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputGroupIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 6,
    paddingRight: 10,
    paddingBottom: 6,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    borderRadius: 25,
  },
  select: {
    // textAlign: "center",
    margin: 0,
    marginBottom: 10,
    fontSize: 15,
    color: COLORS.lightTextColor,
  },
  submitBtnContainer: {
    width: Width,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "auto",
    // paddingBottom: 20,
    position: "absolute",
    bottom: 0,
  },
  submitBtn: {
    height: 40,
    width: "60%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
