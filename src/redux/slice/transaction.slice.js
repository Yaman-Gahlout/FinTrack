import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";
const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    balance: 60000,
    expenses: data.reduce(
      (acc, t) => (t.type === "expense" ? acc + t.amount : acc),
      0,
    ),
    income: 50000,
    transactions: data,
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions = [...state.transactions, action.payload];
      if (action.payload.type === "income") {
        state.balance += action.payload.amount;
        state.income += action.payload.amount;
      } else {
        state.balance -= action.payload.amount;
        state.expenses += action.payload.amount;
      }
    },
    deleteTransaction: (state, action) => {
      const transaction = state.transactions.find(
        (t) => t.id === action.payload,
      );
      if (!transaction) return;
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload,
      );
      if (transaction.type === "income") {
        state.balance -= transaction.amount;
        state.income -= transaction.amount;
      } else {
        state.balance += transaction.amount;
        state.expenses -= transaction.amount;
      }
    },
    editTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (t) => t.id === action.payload.id,
      );

      if (index === -1) return;

      const oldTransaction = state.transactions[index];

      const oldAmount = Number(oldTransaction.amount);
      const newAmount = Number(action.payload.amount);

      if (oldTransaction.type === "income") {
        state.balance -= oldAmount;
        state.income -= oldAmount;
      } else {
        state.balance += oldAmount;
        state.expenses -= oldAmount;
      }

      state.transactions[index] = {
        ...action.payload,
        amount: newAmount,
      };

      if (action.payload.type === "income") {
        state.balance += newAmount;
        state.income += newAmount;
      } else {
        state.balance -= newAmount;
        state.expenses += newAmount;
      }
    },
  },
});

export const { addTransaction, deleteTransaction, editTransaction } =
  transactionSlice.actions;
export default transactionSlice.reducer;
