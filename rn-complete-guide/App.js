import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView , FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (goalTitle)=>{
    setCourseGoals(currentGoals => [...currentGoals,
      {uid:Math.random().toString(), val: goalTitle}]);
  };
  
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
        keyExtractor={(item,index)=> item.uid}
        data={courseGoals}
        renderItem={
          itemData=>(<GoalItem title={itemData.item.val}/> 
         )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
