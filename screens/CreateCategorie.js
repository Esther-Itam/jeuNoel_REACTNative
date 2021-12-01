import React, {useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';


export default function CreateCategorie({navigation}){

    const [name, setName] = useState();
    const [is_used, setIs_Used] = useState(0);
    const [categories, setCategories] = useState();

   
    const createCategorie = async()=>{
         
        await fetch('http://192.168.1.19:8000/api/categorie',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'name':name, "is_used":is_used})
        })
        .then(res=>res.text())
        .then(resData=>{console.log(resData)})
        .catch(error=>{console.log(error)});
    }
    const pressHandlerCreateCategorie = () =>{
        createCategorie();
        navigation.push('Administrator');
    }

        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>Créer une catégorie</Text>
              </View>
              <TextInput placeholder="Nom" value={name} style={styles.input} onChangeText= {(value)=>setName(value)}/>
              <View style={styles.button}>
              <Button color='cadetblue' onPress={pressHandlerCreateCategorie} title="Creer une catégorie"/>
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
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'25%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    }
})