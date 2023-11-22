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

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalToList = (goalText) => {
    setGoalsList((prevValue) => [
      ...prevValue,
      { text: goalText, id: Math.random().toString() },
    ]);
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
      <GoalInput onAddGoal={addGoalToList} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(itemInfo) => {
            return (
              <GoalItem
                goalData={itemInfo.item}
                onPress={() => {
                  goalPressHandler(itemInfo.item);
                }}
              />
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

  goalsContainer: {
    flex: 5,
    gap: 8,
  },
});
