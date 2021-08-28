import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth from "./auth/reducer";
import userReducer from "./user/reducers";
import products from "./products/reducer";
import PayUp from "./payUp/reducers";
import investments from "./investment/reducer";
import SetupFormReducer from "./SetupForm/reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  PayUp,
  Auth,
  products,
  investments,
  user: userReducer,
  setUp: SetupFormReducer,
});
export default rootReducer;
