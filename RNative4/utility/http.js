import axios from "axios";

const backendUrl = "https://expenseapplnd-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(backendUrl + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(backendUrl + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export const updateExpense = (id, expenseData) => {
  return axios.put(backendUrl + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = async (id) => {
  return axios.delete(backendUrl + `/expenses/${id}.json`);
};
