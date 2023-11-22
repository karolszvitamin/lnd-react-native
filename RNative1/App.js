import { useState } from "react";
import { Button, FlatList, StatusBar, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };

  const cancelAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoalToList = (goalText) => {
    setGoalsList((prevValue) => [
      ...prevValue,
      { text: goalText, id: Math.random().toString() },
    ]);
    cancelAddGoalHandler();
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
    <>
      <StatusBar style={"light"} />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color={"#a065ec"}
          onPress={startAddGoalHandler}
        />
        <GoalInput
          isModalVisible={isModalVisible}
          onAddGoal={addGoalToList}
          onCancel={cancelAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={(itemInfo) => {
              return (
                <GoalItem goalData={itemInfo.item} onPress={goalPressHandler} />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 24,
    flex: 1,
    gap: 16,
  },

  goalsContainer: {
    flex: 5,
    width: "100%",
  },
});
