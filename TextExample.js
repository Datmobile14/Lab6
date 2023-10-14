import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';


const TextExample = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
                <Text style = {styles.capital}>
                    L
                </Text>
                <Text>
                    ỏem isum hom nay an gi
                </Text>
                <Text>
                    Ut emin ad <Text style = {styles.wordBold}>minnin</Text> veniam, auis aliquip ex ea commodo cơnsqu
                </Text>
                <Text style = {styles.intalicText}> Duis hom nay thu 7 in rêprfjd in anh thích chơi ba</Text>
            </Text>

            <Text style ={styles.textShow}>
                Chú voi con ở bản đôn chưa có ngà nên còn ttrer con từ rừng già chú đến với người,
                rraat ham ăn với lại ham chơi.
            </Text>
        </View>
    )
}
export default TextExample;

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        marginTop: 100,
        padding: 20,
    },
    text:{
        color: 'red'
    },
    capital:{
        color: 'blue',
        fontSize: 20

    },
    wordBold:{
        fontWeight: 'bold',
        color:  'black'

    },
    intalicText: {
        color: '#37859b',
        fontStyle: 'italic'
    },
    textShow: {
        textShadowColor: 'red',
        textShadowOffset: {width: 2, height:2},
        textShadowRadius: 5
    }
})