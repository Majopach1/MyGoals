
import { StyleSheet, Text, View, FlatList} from 'react-native';
import GoalInput from './components/goalinput';
import GoalItem from './components/goaltem';
import { useState } from 'react';

export default function App() {
  const [goals, setGoals] = useState ([])
 
  function handleAddGoal(enteredGoalText){
    //console.log(enteredGoalText)
    //console.log('Hello You')
    setGoals(() => [...goals,
    {text: enteredGoalText,
    key: Math.random().toString()}])
    console.log(goals)
    }

    function handleDeleteGoal(){
      console.log('Delete')
    }

    return (
      <view style={styles.container}>
        <GoalInput
        onAddGoal={handleAddGoal}
        />
        <view style={styles.goalsContainer}>
          <FlatList
          data={goals}
          renderItem={(itemData) => {
            return(
              <GoalItem 
              itemData={itemData}
              OnDeLeteItem={handleDeleteGoal}
              />
            )
          }}
          keyExtractor={(item) =>{
            return item.id

          }}
        /></view></view>
    );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  
    goalsContainer:{
      flex:5
    },
  });
