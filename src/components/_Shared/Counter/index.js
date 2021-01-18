import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Counter = ({nb, title, alignType}) => {

    return (
        <View style = {styles.subContainer, {alignItems : {alignType}}}>
            <Text> {nb}</Text> 
            <Text>{title}</Text>
        </View>


    )
}



const styles = StyleSheet.create({
    subContainer : {
        flexDirection : 'column',
        justifyContent : 'space-between',
        height : 40,
    }
})


export default Counter