import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';
import axios from 'axios';
import LARAVEL_SERVER from './Variable';

export default function Login({navigation}){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

 
    const login = async()=>{
         
        await fetch('http://192.168.1.19:8000/api/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':email, "password":password})
        })
        .then(res=>res.text())
        .then(resData=>{console.log(resData)})
        .catch(error=>{console.log(error)});
    }
    const pressHandlerLogin = () =>{
        login();
     
            navigation.push('Administrator', 'api_token');


    }

        return(
            <ImageBackground source={require('../pictures/exterieur.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <Text style={styles.title}>Veuillez vous authentifier</Text>
              <TextInput placeholder="Email" value={email} style={styles.input} onChangeText= {(value)=>setEmail(value)}/>
              <TextInput placeholder="Mot de passe" value={password} style={styles.input} onChangeText= {(value)=>setPassword(value)}/>
              <View style={styles.button}>
              <Button color='cadetblue' onPress={pressHandlerLogin} title="S'AUTHENTIFIER"/>
              </View>
            </ImageBackground>
        )

}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'lightseagreen',
        padding:10,
        fontSize:19,
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
        marginBottom:'8%'
    
    },
    title:{
        fontSize:27,
        textAlign:'center',
        marginTop:'15%',
        marginBottom:'15%'
    },
    button:{
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
    }
})