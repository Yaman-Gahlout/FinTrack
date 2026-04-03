import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    balance: 70000,
    expenses: 20000,
    income: 50000,
    transactions: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.balance -= action.payload.amount;
      state.expenses += action.payload.amount;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { addTransaction, setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
