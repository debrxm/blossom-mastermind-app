import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/core";
import PayWithPaystack from "../../components/PayWithPaystack/PayWithPaystack";
import { useSelector } from "react-redux";
import HelperDialog from "../../components/HelperDialog/HelperDialog";
import { Width } from "../../constants/Layout";
import PaymentSuccessful from "../../components/PaymentSuccessful/PaymentSuccessful";
const PackageView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;
  const user = useSelector(({ user }) => user.currentUser);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState("plans");
  const [payLoading, setPayLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  useEffect(() => {
    setErrorMessage("");
  }, []);

  const onInvestPress = () => {};
  const handleCreateInvoice = async () => {
    setDialogVisible(false);

    try {
    } catch (err) {}
  };
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons
                name="chevron-back-outline"
                size={24}
                color={COLORS.cloudyWhite}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>#{data.code}</Text>
      </View>
      <HelperDialog
        visible={dialogVisible}
        setDialogVisible={setDialogVisible}
        noTitle
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <PayWithPaystack
            amount={data.min_deposit}
            invest
            handleCreateInvoice={() => handleCreateInvoice(false, false, true)}
            loading={payLoading}
          />
        </View>
      </HelperDialog>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.name_roi}>
          <Text style={styles.productName}>{data.name}</Text>
          <Text style={styles.productRoi}>ROI: {data.roi}%</Text>
        </View>
        <View
          style={{
            height: 60,
            backgroundColor: "transparent",
            width: Width - 50,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: -40,
          }}
        >
          <View style={[styles.planBox, { borderBottomLeftRadius: 30 }]}>
            <Text style={styles.planBoxBoldText}>Cost</Text>
            <Text style={styles.planBoxLightText}>₦{data.cost}</Text>
          </View>
          <View style={styles.planBox}>
            <Text style={styles.planBoxBoldText}>Duration</Text>
            <Text style={styles.planBoxLightText}>{data.duration}</Text>
          </View>
          <View
            style={[
              styles.planBox,
              { backgroundColor: "#E4DAD2", borderBottomRightRadius: 30 },
            ]}
          >
            <Text style={[styles.planBoxBoldText, { color: "#7C4F86" }]}>
              Profit
            </Text>
            <Text style={[styles.planBoxLightText, { color: "#7C4F86" }]}>
              ₦{data.total_return - data.cost}
            </Text>
          </View>
        </View>
        <View style={styles.breakdown}>
          <Text style={styles.breakdownTitle}>Payment Breakdown</Text>
          {/* <View style={styles.breakdownBox}>
            <Text style={styles.breakdownBoxBoldText}>1st</Text>
            <Text style={styles.breakdownBoxLightText}>
              ₦{data.montly_return}
            </Text>
          </View> */}
        </View>
        {errorMessage !== "" ? (
          <CustomPopUp
            message={`${errorMessage}`}
            type={"error"}
            customStyles={{
              backgroundColor: "red",
              borderRadius: 30,
              justifyContent: "center",
            }}
            customTextStyles={{ color: "#ffffff" }}
          />
        ) : null}
      </ScrollView>
      <PayWithPaystack
        amount={data.cost}
        setModalVisible={setModalVisible}
        setSuccess={setSuccess}
        setFailure={setFailure}
        label={`Invest ₦${data.cost} Now`}
        handleCreateInvoice={() => handleCreateInvoice()}
        loading={payLoading}
      />
      <PaymentSuccessful
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
export default PackageView;
