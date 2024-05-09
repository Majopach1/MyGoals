import { StyleSheet, View, Text, Pressable } from "react-native"


function GoalItem({itemData, OnDeLeteItem, id}){

        function deleteGoalHandler(){
            onDeleteItem(id)
            console.log('Delete Goal Handeler')
        }
    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={StyleSheet.goalsItem}>
                <Text style={styles.goalText}>{itemData.item}</Text>
                </View>
                </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding:8,
        borderRadius: 6, 
        backgroundColor: '#8576FF',
        color: 'white'
    },
    goalText:{
        color: 'white'
    }
})
