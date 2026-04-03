import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./slice/tab.slice";
import transactionReducer from "./slice/transaction.slice";

const store = configureStore({
  reducer: {
    tab: tabReducer,
    transaction: transactionReducer,
  },
});

export default store;
