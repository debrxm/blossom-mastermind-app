import Auth from "./auth/reducer";
import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import products from "./products/reducer";
import PayUp from "./payUp/reducers";
import investments from "./investment/reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["Auth"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  PayUp,
  Auth,
  products,
  investments,
});
export default rootReducer;
