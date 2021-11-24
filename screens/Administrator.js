import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';


export default function Administrator({navigation}){
    const pressHandlerCategorie = () =>{
      
        navigation.push('Categorie');
    }
    const pressHandlerQuiz = () =>{
      
        navigation.push('Quiz');
    }

        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>Bienvenue sur votre espace</Text>
              </View>
              <View style={styles.button}>
              <Button color='#841584' onPress={pressHandlerCategorie} title="Tableau de bord des catégories"/>
              </View>
              <View style={styles.button}>
              <Button color='#841584' onPress={pressHandlerQuiz} title="Tableau de bord des quiz"/>
              </View>
            </ImageBackground>
        )

}

const styles = StyleSheet.create({

    title:{
        fontSize:27,
        textAlign:'center',
        color:'white'

    },
    button:{
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
        marginBottom:'10%',
    },
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'25%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    }
})