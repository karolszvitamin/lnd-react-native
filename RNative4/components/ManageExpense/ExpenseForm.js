import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useContext, useState } from "react";
import { ExpensesContext } from "../../store/expenses-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../UI/Button";

const ExpenseForm = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  const inputChangedHandler = (inputIndetifier, enteredValue) => {
    setInputValues((prevValue) => {
      return {
        ...prevValue,
        [inputIndetifier]: enteredValue,
      };
    });
  };

  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    console.log({ inputValues });
    if (isEditing === true) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: inputValues.description,
        amount: parseInt(inputValues.amount),
        date: new Date(inputValues.date),
      });
    } else {
      expensesCtx.addExpense({
        description: inputValues.description,
        amount: parseInt(inputValues.amount),
        date: new Date(inputValues.date),
      });
    }
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput}
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangedHandler.bind(this, "amount"),
              value: inputValues.amount,
            }}
          />
          <Input
            label="Date"
            style={styles.rowInput}
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangedHandler.bind(this, "date"),
              value: inputValues.date,
            }}
          />
        </View>

        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} onPress={cancelHandler} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing === true ? "Update" : "Add"}
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;
