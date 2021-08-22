import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect, useSelector } from "react-redux";
import {
  ADD_INVESTMENT_INVOICE,
  ADD_INVESTMENT_PAYMENT,
  FUND_WALLET,
  GET_WALLET,
} from "../../redux/investment/actionCreator";
import AppButton from "../../components/AppButton/AppButton";
import CustomPopUp from "../../components/CustomPopUp/CustomPopUp";
import HelperDialog from "../../components/HelperDialog/HelperDialog";
import PayWithPaystack from "../../components/PayWithPaystack/PayWithPaystack";
import Plan from "../../components/Plan/Plan";
import { COLORS, colors } from "../../constants/Colors";

import { styles } from "./styles";

const ProductView = ({
  ADD_INVESTMENT_INVOICE,
  ADD_INVESTMENT_PAYMENT,
  GET_WALLET,
  FUND_WALLET,
}) => {
  const navigation = useNavigation();
  const { user } = useSelector(({ Auth }) => Auth);
  const { wallet } = useSelector(({ investments }) => investments);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState("plans");
  const [capital, setCapital] = useState(0);
  const [selected, setSelected] = useState(null);
  const [wallet_type, setType] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [plans, setPlans] = useState(["", ""]);
  useEffect(() => {
    setErrorMessage("");
  }, [selected]);
  const onInvestPress = () => {
    if (selected === null) {
      setErrorMessage("Select a plan");
      return;
    }
    setDialogVisible(true);
    setErrorMessage("");
  };
  const handleCreateInvoice = async (is_wallet, wallet_type, paystack) => {
    setDialogVisible(false);
    if (wallet_type) {
      setType(wallet_type);
    }
    if (is_wallet && Number(wallet.data) < Number(capital)) {
      // "Insufficient fund, please fund your wallet!!"

      return;
    }
    if (paystack) {
      setPayLoading(true);
    } else {
      setLoading(true);
    }

    try {
      if (is_wallet) {
        const deducted_value = -1 * Number(capital);
        console.log("UPDATED VALUE FOR WALLET DEDUCTION===", deducted_value);

        const wallet_result = await FUND_WALLET(user.id, {
          amount: deducted_value,
        });
        console.log("WALLET DATATA ==", wallet_result);
        await GET_WALLET(user.id);
      }

      const invoice = await ADD_INVESTMENT_INVOICE({
        client: user.id,
        description: extra.description,
        date: Date.now(),
        percentage_return: extra.roi,
        items: [
          {
            item: id,
            exclusive: 23,
            price: capital,
            avatar: null,
            quantity: 1,
            total: 1,

            amount_paid: 0,
            description: "hello world",
            vat: 2,
            vatType: "new",
            vat_mode: "add",
          },
        ],
      });

      const result = await handleCreateReceipt(invoice);
      if (paystack) {
        setPayLoading(false);
      } else {
        setLoading(false);
      }
      setVisible(false);
      console.log("PAYMENT RESPONSE::", result);
    } catch (err) {
      if (paystack) {
        setPayLoading(false);
      } else {
        setLoading(false);
      }
      // "Ooops an error occured!!"
      console.log("ERROR FROM ADDING PAYMENT ====", err);
    }
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
        <Text style={styles.routeTitle}>Product</Text>
      </View>
      <HelperDialog
        visible={dialogVisible}
        setDialogVisible={setDialogVisible}
        noTitle
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <AppButton
            onPress={() => navigation.navigate("Withdraw")}
            title="Pay With Wallet"
            customStyle={{
              ...styles.payMethodBtn,
              backgroundColor: "#ffffff",
            }}
            textStyle={{
              textTransform: "capitalize",
              fontWeight: "400",
              fontSize: 12,
              color: colors[0],
            }}
          />
          <PayWithPaystack
            amount={Number(capital)}
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
        <Text style={styles.productName}>Boundless Diamond Executive</Text>
        <View
          style={{
            height: 60,
            backgroundColor: "#ffffff",
          }}
        >
          {filterButtons(active, setActive)}
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
        {active === "plans" &&
          plans.map((item, index) => (
            <Plan
              key={index}
              data={item}
              index={index}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        {active === "description" && (
          <>
            <Text style={styles.descriptionText}>
              is a Real Estate and Project Management company with primary
              commitment in land/property development, real estate investment
              and brokerage services. Our interest to offer excellent services
              in the real estate industry is second to none as we provide
              professional and flexible service to our streams of customers both
              in Nigeria and outside the country
            </Text>
          </>
        )}

        <AppButton
          onPress={onInvestPress}
          title="Invest Now"
          customStyle={{
            ...styles.investNowBtn,
            backgroundColor: "#ffffff",
          }}
          textStyle={{
            textTransform: "capitalize",
            fontWeight: "400",
            fontSize: 14,
            color: COLORS.tint,
          }}
        />
      </ScrollView>
    </>
  );
};

export default connect(null, {
  ADD_INVESTMENT_INVOICE,
  ADD_INVESTMENT_PAYMENT,
  GET_WALLET,
  FUND_WALLET,
})(ProductView);
function filterButtons(active, setActive) {
  function FilterButton({ title, value }) {
    return (
      <AppButton
        title={title}
        customStyle={
          active === value
            ? { ...styles.btn }
            : { ...styles.btn, backgroundColor: "#ecf2fa", elvation: 5 }
        }
        textStyle={
          active === value
            ? { fontSize: 11 }
            : { fontSize: 11, color: "#555555" }
        }
        onPress={() => {
          setActive(value);
        }}
      />
    );
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ height: 65, paddingVertical: 10 }}
      contentContainerStyle={{ justifyContent: "space-between", width: "100%" }}
    >
      <FilterButton title={"Plans"} value={"plans"} />
      {/* <View style={{ width: 30 }}></View> */}
      <FilterButton title={"Description"} value={"description"} />
      {/* <View style={{ width: 30 }}></View> */}
      <FilterButton title={"News"} value={"news"} />
    </ScrollView>
  );
}
