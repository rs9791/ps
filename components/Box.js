import React from 'react'
import {StyleSheet,View,Text} from 'react-native'

const Box = () => {
    return (
        <View style={styles.boxStyle}>
            <Text style={styles.textStyle1}>item 1</Text>
            <Text style={styles.textStyle2}>item 2</Text>
            <Text style={styles.textStyle3}>item 3</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    boxStyle: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 50,
        alignItems: 'flex-start',
        flexDirection: 'column',
        height :500
    },
    textStyle1: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        height: 100,
        width:200,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        flex: 4
        
    },
    textStyle2: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
         height:200,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        flex: 3,
        alignSelf : 'center'
    },
    textStyle3: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        height:200,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        flex: 3,
        alignSelf : 'center'
    }
})

export default Box
