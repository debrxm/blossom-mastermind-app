import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  listContainer: {
    width: "100%",
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 100,
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
    fontSize: 18,
    letterSpacing: 1,
  },
});
