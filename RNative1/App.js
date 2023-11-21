import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [passedText, setPassedText] = useState("");

  const [goalsList, setGoalsList] = useState([]);
  const goalInputHandler = (enteredText) => {
    setPassedText(enteredText);
  };

  const addGoalHandler = () => {
    setGoalsList((prevValue) => [...prevValue, passedText]);
    setPassedText("");
  };

  const goalPressHandler = (pressedGoalText) => {
    deleteGoal(pressedGoalText);
  };

  const deleteGoal = (goalToDelete) => {
    setGoalsList((prevValue) =>
      prevValue.filter((goal) => goal !== goalToDelete)
    );
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={passedText}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title={"Add goal"} onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.map((goal) => (
          <Text onPress={() => goalPressHandler(goal)}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
