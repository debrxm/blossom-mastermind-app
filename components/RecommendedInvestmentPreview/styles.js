import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  recommenedCard: {
    width: Dimensions.get("screen").width - 30,
    height: 200,
    position: "relative",
    marginRight: 8,
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 12,
    padding: 10,
    position: "relative",
  },
  plan: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cd9931",
    borderRadius: 15,
    elevation: 3,
  },
  planText: { color: "#ffffff" },
  recommenedCardImageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingLeft: 10,
  },
  recommenedCardImage: {
    borderRadius: 12,
  },
  cardInfo: {
    paddingHorizontal: 10,
  },
  cardInfoName: {
    color: "#97989A",
    fontFamily: "FiraCode-SemiBold",
    fontSize: 16,
    marginVertical: 10,
  },
  recommenedCardFooter: {
    width: "100%",
    position: "absolute",
    bottom: 12,
    left: 9,
  },
  recommenedCardFooterButtons: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  recommenedCardFooterBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: "40%",
  },
});
