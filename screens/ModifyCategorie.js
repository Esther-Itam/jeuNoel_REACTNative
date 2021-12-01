import React, {useState} from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, Button} from 'react-native';

export default function ModifyCategorie({navigation}){
    const [name, setName] = useState();
    
    const modifyCategorie = async()=>{
         const id = navigation.getParam('id');
         console.log(id);
        await fetch(`http://192.168.1.19:8000/api/categorie/${id}`,{
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

    const deleteCategorie = async()=>{
        const id = navigation.getParam('id');
        console.log(id);
       await fetch(`http://192.168.1.19:8000/api/categorie/${id}`,{
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

    const pressHandlerModifyCategorie = () =>{
        modifyCategorie();
        navigation.push('Administrator');
    }

    const pressHandlerDeleteCategorie = () =>{
        deleteCategorie();
        navigation.push('Administrator');
    }
        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>{navigation.getParam('name')}</Text>
              </View>
            
              <TextInput placeholder={navigation.getParam('name')} value={name} style={styles.input} onChangeText= {(value)=>setName(value)}/>
              <View style={styles.button}>
              <Button color='cadetblue' onPress={pressHandlerModifyCategorie} title="Modifier la catégorie"/>
              </View>
              <View style={styles.button}>
              <Button color='#841584' onPress={pressHandlerDeleteCategorie} title="Supprimer la catégorie"/>
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
        marginBottom:'25%',
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
   
})