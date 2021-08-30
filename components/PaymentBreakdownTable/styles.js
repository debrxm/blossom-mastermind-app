import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
import { Width } from "../../constants/Layout";

export const styles = StyleSheet.create({
  tableHeadText: {
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  tableText: {
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 13,
    color: COLORS.black,
    width: (Width - 20) / 3,
    textAlign: "right",
  },
  tableTextLong: {
    textAlign: "left",
    width: (Width - 20) / 2,
  },
  tableBodyText: {},
  tableFooter: {
    marginTop: 10,
  },
  tableSubFooter: {
    marginTop: 0,
  },
  tableFooterText: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: 16,
  },
});
