import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput, Button} from 'react-native';


export default function ModifyAnswer({navigation}){
    const [name, setName] = useState();
    
    const modifyAnswer = async()=>{
         const id = navigation.getParam('answerId');
         console.log(id);
        await fetch(`http://192.168.1.19:8000/api/answer/${id}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'name':name})
        })
        .then(res=>res.text())
        .then(resData=>{console.log(resData)})
        .catch(error=>{console.log(error)});
    }

    const pressHandlerModifyAnswer = () =>{
        modifyAnswer();
        navigation.push('ModifyQuiz');
    }

        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>Modifier la réponse</Text>
              </View>
              <TextInput multiline={true} numberOfLines={4} value={navigation.getParam('answerName')} style={styles.input} onChangeText= {(value)=>setName(value)}/>
              <View style={styles.button}>
              <Button color='cadetblue' onPress={pressHandlerModifyAnswer} title="Modifier la réponse"/>
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
        marginBottom:'5%'
    },
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'5%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    },
    input:{
        backgroundColor:'lightseagreen',
        padding:10,
        fontSize:19,
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
        marginBottom:'8%'
    
    },
    container:{
        backgroundColor:'#841584',
        marginBottom:'8%',
        borderRadius:5,
        padding:'5%'

    },
    scrollView: {
        marginHorizontal: 20,
      },
   
})