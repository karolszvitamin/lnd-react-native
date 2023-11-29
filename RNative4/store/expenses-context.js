/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-11-28"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 539.99,
    date: new Date("2011-11-24"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 9.99,
    date: new Date("2023-12-19"),
  },
  {
    id: "e4",
    description: "Milk",
    amount: 59.99,
    date: new Date("2019-12-19"),
  },
  {
    id: "e5",
    description: "Shrek",
    amount: 100,
    date: new Date("2005-12-19"),
  },
  {
    id: "e999",
    description: "Shrek",
    amount: 100,
    date: new Date("2005-12-19"),
  },
  {
    id: "e6",
    description: "Shrek",
    amount: 100,
    date: new Date("2005-12-19"),
  },
  {
    id: "e7",
    description: "Shrek",
    amount: 100,
    date: new Date("2005-12-19"),
  },
  {
    id: "e8",
    description: "Shrek",
    amount: 100,
    date: new Date("2005-12-19"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString(); // temporary ID generation
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      console.log({ state });
      console.log({ updatedExpenses });
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
