import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  RefreshControl,
  View,
} from "react-native";

import ProductPreview from "../../components/ProductPreview/ProductPreview";

import { styles } from "./styles";
import { COLORS } from "../../constants/Colors";

let page = 1;
const Packages = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { products } = useSelector(({ products }) => products);

  const [dialogVisible, setDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [scrollBegin, setScrollBegin] = useState(false);

  const onMomentumScrollBegin = () => {
    setScrollBegin(false);
  };

  const handleRefreshing = () => {
    setRefreshing(true);
    page = 1;
    // dispatch({ type: "REFRESH_PAGE" });
    // GET_PRODUCTS(1)
    //   .then(() => setRefreshing(false))
    //   .catch(() => setLoading(false));
  };

  const fetchMore = () => {
    if (scrollBegin) return;
    setLoading(true);
    if (loading) {
      page += 1;

      setLoading(true);
      // GET_PRODUCTS(page)
      //   .then(() => {
      //     setScrollBegin(true);
      //     setLoading(false);
      //   })
      //   .catch(() => setLoading(false));
    }
  };

  const handleLoaderContent = () => {
    return !loading ? null : <ActivityIndicator color={"black"} size={30} />;
  };

  const handleApiCall = () => {
    setRefreshing(true);
    // GET_PRODUCTS(1)
    //   .then((data) => {
    //     console.log(data);
    //     setRefreshing(false);
    //     if (!data.length) {
    //       console.log("====================================");
    //       console.log(
    //         "Sorry there no products available now please try again later. Thank you !"
    //       );
    //       console.log("====================================");
    //       // "Sorry there no products available now please try again later. Thank you !",
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     setRefreshing(false);
    //   });
  };

  useEffect(() => {
    handleApiCall();
    return () => {
      page = 1;
    };
  }, []);

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
                color={COLORS.black}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Packges</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{
              flex: 1,
              paddingHorizontal: 5,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ProductPreview data={item} />}
            data={[
              {
                package: "BLOSSOM EXECUTIVE",
                duration: "24 months",
                roi: 70,
                min_deposit: 100000,
              },
              {
                package: "BLOSSOM SPECIALTY",
                duration: "24 months",
                roi: 35,
                min_deposit: 100000,
              },
              {
                package: "BLOSSOM SUPREME",
                duration: "12 months",
                roi: 20,
                min_deposit: 3000000,
              },
              {
                package: "BLOSSOM BASIC",
                duration: "6 months",
                roi: 15,
                min_deposit: 100000,
              },
            ]}
            removeClippedSubviews={true}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefreshing}
              />
            }
            ListFooterComponent={handleLoaderContent}
            onEndReachedThreshold={0.4}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onEndReached={fetchMore}
          />
        </View>
      </View>
    </>
  );
};

export default Packages;
