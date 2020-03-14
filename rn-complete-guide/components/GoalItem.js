import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props =>
{
    return(
    <TouchableOpacity activeOpacity={0.8} onPress={props.onTouch}>
        <View style={styles.listitem}>
            <Text>{props.title}</Text>
        </View> 
    </TouchableOpacity>    
    );
};

const styles = StyleSheet.create({
  listitem:{
    borderColor: "black",
    margin: 10,
    borderWidth: 2,
    padding: 10,
    backgroundColor: 'grey'
  },
});
export default GoalItem;
