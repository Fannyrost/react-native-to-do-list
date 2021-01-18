import React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask}) => {

    return (
        <TouchableOpacity onPress={() => {onChangeStatus(id)}}>
            <View style = {styles.container}>
                <View style = {styles.subContainer}>
                    <Image style={styles.icon} source={ completed ? require('../../../assets/check_circle.png') : require('../../../assets/circle.png')}/>
                    <Text style = {styles.text, {color : completed ? 'lightgrey' : 'black'}}>{title}</Text>
                </View>
                <TouchableOpacity onPress={()=>{onDeleteTask(id)}}>
                    <Image style={styles.icon} source={require('../../../assets/trash.png')}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    icon: {
        width:30,
        height:30
    },

    container : {
        flexDirection :'row',
        justifyContent : 'space-between',
        alignItems :'center'
    },

    subContainer : {
        flexDirection :'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },

    text : {
        flexGrow: 1,
        marginLeft : 20
    }
})

export default TaskTile;