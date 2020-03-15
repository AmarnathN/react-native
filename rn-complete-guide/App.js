import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddGoalMode, setIsAddGoalMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { uid: Math.random().toString(), val: goalTitle }
    ]);
    setIsAddGoalMode(false);
  };

  const deleteGoalHandler = goalUid => {
    setCourseGoals(currentGoals => {
      return courseGoals.filter(goal => goal.uid != goalUid);
    });
  };

  const onCancelAddGoalHandler = () => {
    setIsAddGoalMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddGoalMode(true)} />
      <GoalInput
        visible={isAddGoalMode}
        onAddGoal={addGoalHandler}
        onCancel={onCancelAddGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            uid={itemData.item.uid}
            title={itemData.item.val}
            onTouch={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f0c711",
    borderWidth: 1,
    borderColor: "black"
  }
});
