import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/core";
import PayWithPaystack from "../../components/PayWithPaystack/PayWithPaystack";
import { useSelector } from "react-redux";
import HelperDialog from "../../components/HelperDialog/HelperDialog";
const PackageView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params.data;
  console.log(data);
  const user = useSelector(({ user }) => user.currentUser);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState("plans");
  const [payLoading, setPayLoading] = useState(false);
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
              <Ionicons name="chevron-back-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Packages</Text>
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
        <Text style={styles.productName}>{data.package}</Text>
        <View
          style={{
            height: 60,
            backgroundColor: "#ffffff",
          }}
        >
          {/* {filterButtons(active, setActive)} */}
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
        amount={data.min_deposit}
        label="Invest Now"
        handleCreateInvoice={() => handleCreateInvoice()}
        loading={payLoading}
      />
    </>
  );
};
export default PackageView;
