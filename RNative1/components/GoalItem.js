import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const GoalItems = ({ goalData, onPress }) => {
  const { text } = goalData;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    width: "90%",
    margin: 4,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalText: {
    fontSize: 18,
    width: "100%",
    color: "white",
  },
});

export default GoalItems;
