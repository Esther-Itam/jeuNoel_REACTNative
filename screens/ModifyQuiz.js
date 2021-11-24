import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';


export default function ModifyQuiz({navigation}){
    const [quiz, setQuiz] = useState([]);
    
    useEffect(() => {
        const id = navigation.getParam('id');
        console.log(id)
        axios.get(`http://192.168.1.19:8000/api/quiz/${id}`).then((res) => {
            setQuiz(res.data.data[0]);
        },1000)
      },[]);
    console.log(quiz[0]);

    const deleteQuiz = async()=>{
        const id = navigation.getParam('id');
        console.log(id);
       await fetch(`http://192.168.1.19:8000/api/quiz/${id}`,{
           method:'DELETE',
           headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
           },
           
       })
       .then(res=>res.text())
       .then(resData=>{console.log(resData)})
       .catch(error=>{console.log(error)});
   }

    const pressHandlerDeleteQuiz = () =>{
        deleteQuiz();
        navigation.push('Quiz');
    }

    const _renderSeparator = () => <View style={{ height: 1, backgroundColor: 'grey', marginLeft: 3 }} />
    const _renderHeader = () => (
        <View style={{ height: 40, backgroundColor: '#841584', justifyContent: 'center' }}>
          <Text style={styles.title}>Questions</Text>
        </View>
      )
      const _renderHeader2 = () => (
        <View style={{ height: 40, backgroundColor: '#841584', justifyContent: 'center' }}>
          <Text style={styles.title}>Réponses</Text>
        </View>
      )
      const getItemCount = (quiz) => 1;      
      
          return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Quiz: {navigation.getParam('name')}</Text>
            </View>
            <View style={styles.button}>
              <Button color='#841584' onPress={pressHandlerDeleteQuiz} title="Supprimer le Quiz"/>
              </View>
            <View style={styles.container}>
            <View style={styles.container}>
            
              <FlatList 
                data={quiz[1]}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ModifyQuestion', item)}>
                    <Text style={styles.flatList}>{item.questionName}</Text>
                    </TouchableOpacity>
 
                )}
                keyExtractor={item => item.questionId}
                ItemSeparatorComponent={_renderSeparator}
                ListHeaderComponent={_renderHeader}
                />
                </View>
                <View style={styles.container}>
                <FlatList 
                data={quiz[2]}
                initialNumToRender={1}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ModifyAnswer', item)}>
                    <Text style={styles.flatList}>{item.answerName}</Text>
                    </TouchableOpacity>
 
                )}
                keyExtractor={item => item.answerId}
                ItemSeparatorComponent={_renderSeparator}
                ListHeaderComponent={_renderHeader2}
                />
                </View>

       
           

              </View>

          
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
        marginBottom:'5%'
    },
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'5%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    },

    flatList:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        marginBottom:'2%',
        borderBottomColor:'black',
        borderStyle:'solid'
    },
    container:{
        backgroundColor:'plum',
        marginBottom:'8%',
        borderRadius:5,
        padding:'5%'

    },
    scrollView: {
        marginHorizontal: 20,
      },
   
})