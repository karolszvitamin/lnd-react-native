import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utility/date";

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.descritption]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  descritption: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "700",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 80,
    borderRadius: 8,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "700",
  },
});

export default ExpenseItem;
