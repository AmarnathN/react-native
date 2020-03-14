import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView , FlatList} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = ()=>{
    // console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals,
      {uid:Math.random().toString(), val: enteredGoal}]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput 
        placeholder="course goal" 
        style={styles.textInput} 
        onChangeText={goalInputHandler} 
        value={enteredGoal}
        />
        <Button 
        title="Add" 
        onPress={addGoalHandler} 
        />
      </View>
      {/* <ScrollView >
        {courseGoals.map((goal) => (<View style={styles.listitem}
         key={goal}>
          <Text>{goal}</Text>
          </View> 
        ))}
      </ScrollView> */}
      <FlatList 
        keyExtractor={(item,index)=> item.uid}
        data={courseGoals}
        renderItem={itemData=>(<View style={styles.listitem}
          key={itemData.item}>
           <Text>{itemData.item.val}</Text>
           </View> 
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
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput:{
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  listitem:{
    borderColor: "black",
    margin: 10,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'grey'
  }

});
