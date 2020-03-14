import React, {useState} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = porps =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
    return(
        <View style={styles.container2}>
            <TextInput 
            placeholder="course goal" 
            style={styles.textInput} 
            onChangeText={goalInputHandler} 
            value={enteredGoal}
            />
            <Button 
            title="Add" 
            onPress={porps.onAddGoal.bind(this,enteredGoal)} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    textInput:{
    flex:1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'space-evenly'
    },
});

export default GoalInput;