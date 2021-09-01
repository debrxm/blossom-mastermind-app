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
import { Plans } from "../../constants/Packages";

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

  const loadMore = () => {};
  const handleRefreshing = () => {
    setRefreshing(true);
    page = 1;
  };

  const handleLoaderContent = () => {
    return !loading ? null : <ActivityIndicator color={"black"} size={20} />;
  };

  useEffect(() => {}, []);

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
              alignItems: "center",
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ProductPreview data={item} />}
            data={Plans}
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
            onEndReached={loadMore}
          />
        </View>
      </View>
    </>
  );
};

export default Packages;
