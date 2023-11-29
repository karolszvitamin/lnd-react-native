import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 539.99,
    date: new Date("2022-01-19"),
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

const ExpensesOutput = ({ expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});

export default ExpensesOutput;
