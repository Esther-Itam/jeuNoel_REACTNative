import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView, ScrollView, Picker, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';
import axios from 'axios';
import Categorie from './Categorie';


export default function CreateQuiz({navigation}){

    const [name, setName] = useState();
    const [categorie, setCategorie] = useState();
    const [disabled, setDisabled]=useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [question, setQuestion] = useState();
    const [disabledAnswers, setDisabledAnswers]=useState(false);

    const createQuiz = async()=>{
         
        await axios('http://192.168.1.19:8000/api/quiz',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'name':name, "categorie":selectedValue})
        })
        .then(res=>res.text())
        .then(resData=>{console.log(resData)})
        .catch(error=>{console.log(error)});
    }
    const pressHandlerCreateQuiz = () =>{
        createQuiz();
        setDisabled(true);
        
    }
    console.log(selectedValue)
    const createQuestion = async()=>{
         
        await fetch('http://192.168.1.19:8000/api/question',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'question':question})
        })
        .then(res=>res.text())
        .then(resData=>{console.log(resData)})
        .catch(error=>{console.log(error)});
    }

    const pressHandlerCreateQuestion = () =>{
        createQuestion();
        setDisabledAnswers(true);
        
    }
        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>Créer un Quiz</Text>
              </View>
              <ScrollView style={styles.scrollView}>

              <TextInput placeholder="Nom du Quiz" value={name} style={styles.input1} onChangeText= {(value)=>setName(value)}/>
              <View style={styles.container}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 45, width: 270 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Culture Générale" value={1} />
                <Picker.Item label="Expressions" value={2} />
                <Picker.Item label="Disney" value={3} />
                <Picker.Item label="Arts" value={4} />
                <Picker.Item label="Cuisine" value={5} />
                <Picker.Item label="Sciences" value={6} />

              </Picker>
                </View>
              <View style={styles.button}>
              <Button color='cadetblue' onPress={pressHandlerCreateQuiz} title="Ajouter des questions/réponses"/>
              </View>

              {disabled
              ?
              <View>
              
                    <TextInput placeholder="Question 1" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
               
                  
                    <TextInput placeholder="Question 2" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
             

                    <TextInput placeholder="Question 3" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  


                    <TextInput placeholder="Question 4" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
             

                    <TextInput placeholder="Question 5" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                   <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
   

                    <TextInput placeholder="Question 6" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
            

                    <TextInput placeholder="Question 7" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
               

                    <TextInput placeholder="Question 8" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
         

                    <TextInput placeholder="Question 9" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                  
            

                    <TextInput placeholder="Question 10" value={question} style={styles.input} onChangeText= {(value)=>setQuestion(value)}/>
                    <View style={styles.button}>
                    <Button color='cadetblue' onPress={pressHandlerCreateQuestion} title="Ajouter des réponses"/>
                    </View>
                

                </View>
              :
              null

              }
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
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
        marginBottom:'5%'
    },
    input:{
        backgroundColor:'lightseagreen',
        padding:10,
        fontSize:19,
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
    
    },
    input1:{
        backgroundColor:'lightseagreen',
        padding:10,
        fontSize:19,
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
        marginBottom:'5%'
    
    },
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'5%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    },
    container: {
        paddingTop: 10,
        alignItems: "center",
        backgroundColor:'lightseagreen',
        width:'80%',
        marginLeft:'10%',
        marginBottom:'5%'
    }
})