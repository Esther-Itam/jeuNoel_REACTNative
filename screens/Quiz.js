import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export default function Quiz({navigation}){
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.19:8000/api/quiz').then((res) => {
            setQuiz(res.data.data);
        },1000)
      },[]);
    
   console.log(quiz)
    const pressHandlerCreateQuiz = () =>{
      
        navigation.push('CreateQuiz');
    }
    const pressHandlerSummary = () =>{
      
        navigation.push('Administrator');
    }

        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Tableau de bord des Quiz</Text>
            </View>
            <View style={styles.button}>
            <Button color='cadetblue' onPress={pressHandlerSummary} title="Revenir au sommaire"/>
            </View>
            <View style={styles.container}>
            <FlatList 
              data={quiz}
              
              renderItem={({item})=>(
                  <TouchableOpacity onPress={()=>navigation.navigate('ModifyQuiz', item)}>
                      <Text style={styles.flatList}>{item.name}</Text>
                  </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              />
              </View>
           {/*  <View style={styles.button}>
            <Button color='#841584' onPress={pressHandlerCreateQuiz} title="Creer un Quiz"/>
            </View> */}
            </ScrollView>
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
        borderRadius:5,
    },
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'3%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    },
    container:{
        backgroundColor:'plum',
        marginBottom:'8%',
        borderRadius:5,
        padding:'7%',
        marginTop:'2%'

    },
    flatList:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        backgroundColor:'#841584',
        marginBottom:'2%' 
    },
    scrollView: {
        marginHorizontal: 20,
      },
})