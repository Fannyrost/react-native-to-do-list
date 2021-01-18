import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Counter from '../_Shared/Counter'

const TasksCounter = ({nbTasks, nbTasksCompleted}) => {

    return (
        <View style = {styles.container}>
            <Counter nb={nbTasks} title={"Tâches crées"} alignType={"flex-start"} />
            <Counter nb={nbTasksCompleted} title={"Tâches effectuées"} alignType={"flex-end"} />
        </View>    
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom: 15
    },
})


export default TasksCounter;