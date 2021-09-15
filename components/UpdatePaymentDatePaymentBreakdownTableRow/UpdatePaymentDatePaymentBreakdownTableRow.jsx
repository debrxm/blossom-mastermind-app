import React, { useState } from "react";
import { Text, View } from "react-native";
import AppButton from "../AppButton/AppButton";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";

const UpdatePaymentDatePaymentBreakdownTableRow = ({ data }) => {
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };
  // console.log("HERE", data);

  return (
    <View style={[styles.tableRow]}>
      <Text style={[styles.tableText, styles.tableTextLong]}>
        {data.month} Month
      </Text>

      <AppButton
        onPress={toggleDatePicker}
        title={data.pay_day}
        customStyle={styles.productCardFooterBtn}
        textStyle={{
          textTransform: "capitalize",
          fontWeight: "400",
          fontSize: responsiveFontSize(1.5),
        }}
      />
      <Text style={[styles.tableText, styles.tableBodyText]}>
        {data.amount === 0 ? "----------------" : `₦${data.amount}`}
      </Text>
    </View>
  );
};

export default UpdatePaymentDatePaymentBreakdownTableRow;
