import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItems = ({ goalData, onPress }) => {
  const { text } = goalData;

  return (
    <View style={styles.goalContainer}>
      <Pressable
        android_ripple={"#5e0acc"}
        onPress={onPress.bind(this, goalData)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    width: "100%",
    marginBottom: 12,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalText: {
    fontSize: 18,
    width: "100%",
    color: "#ffffff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItems;
