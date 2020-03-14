import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const GoalItem = props =>
{
    return(
    <View style={styles.listitem}>
        <Text>{props.title}</Text>
    </View> );
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
