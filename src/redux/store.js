import { configureStore } from "@reduxjs/toolkit";

import transactionReducer from "./slice/transaction.slice";

const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});

export default store;
