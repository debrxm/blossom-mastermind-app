import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
    minHeight: 80,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#111111",
    fontSize: 16,
    letterSpacing: 1,
  },
  userPreview: {
    alignItems: "center",
  },
  userImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    // paddingBottom: 20,
  },
  userImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#cd9931",
  },
  usernameContainer: {
    // flexDirection: "row",
    // alignItems: "flex-start",
  },
  username: {
    color: "#42414C",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    marginLeft: -2,
    letterSpacing: 1,
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
  invest: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingVertical: 10,
    marginBottom: 20,
  },
  investBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: "50%",
  },
  money: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: 100,
  },
  moneyLightText: {
    fontSize: 10,
    color: "#97989A",
  },
  moneyBoldText: {
    fontSize: 20,
    color: "#353535",
  },
  wallet: {
    justifyContent: "center",
    alignItems: "center",
  },
  bonus: {
    justifyContent: "center",
    alignItems: "center",
  },
  invite: {
    // flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    borderRadius: 40,
    padding: 10,
    position: "relative",
    marginHorizontal: 20,
    marginBottom: 80,
    marginTop: "auto",
  },
  icon: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    elevation: 3,
    transform: [{ rotate: "-90deg" }],
  },
  inviteTexts: {
    marginLeft: 10,
  },
  inviteTextMain: {
    fontSize: 12,
    lineHeight: 20,
  },
  inviteTextSub: {
    lineHeight: 20,
    letterSpacing: 0.05,
    fontSize: 10,
  },
  inviteTextBold: {
    fontSize: 12,
    color: colors[0],
  },
});
