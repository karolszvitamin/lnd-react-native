import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [goalsList, setGoalsList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoalsList((prevValue) => [...prevValue, enteredGoalText]);
    setEnteredGoalText("");
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
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title={"Add goal"} onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.map((goal) => (
          <TouchableOpacity
            key={goal}
            onPress={() => {
              goalPressHandler(goal);
            }}
          >
            <Text style={styles.goalElement}>{goal}</Text>
          </TouchableOpacity>
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
    gap: 8,
  },
  goalElement: {
    width: "100%",
    padding: 4,
    fontSize: 24,
    textAlign: "center",

    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 8,
  },
});
