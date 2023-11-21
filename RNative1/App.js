import { useState } from "react";
import {
  Button,
  FlatList,
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
    setGoalsList((prevValue) => [
      ...prevValue,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
  };

  const goalPressHandler = (pressedGoalData) => {
    deleteGoal(pressedGoalData);
  };

  const deleteGoal = (goalToDeleteData) => {
    setGoalsList((prevValue) =>
      prevValue.filter((goalData) => goalData.id !== goalToDeleteData.id)
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
        <FlatList
          data={goalsList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  goalPressHandler(itemData.item);
                }}
              >
                <View style={styles.goalContainer}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          alwaysBounceVertical={false}
        />
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
