import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, SectionList, ImageBackground, TextInput, Link, Button, CardItem, Input } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';


export default function Categorie({navigation}){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.19:8000/api/categorie').then((res) => {
            setCategories(res.data.data);
        },1000)
      },[]);
    
    const pressHandlerCreateCategorie = () =>{
      
        navigation.push('CreateCategorie');
    }

        return(
            <ImageBackground source={require('../pictures/background10.png')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
              <View style={styles.titleContainer}>
              <Text style={styles.title}>Tableau de bord des catégories</Text>
              </View>
              <View style={styles.categorieContainer}>
              <FlatList 
                data={categories}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ModifyCategorie', item)}>
                        <Text style={styles.flatList}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                />
                </View>
                {categories.length>5
              ?
              <View style={styles.titleContainer2}><Text style={styles.title2}>Le nombre maximum de catégories est atteint</Text></View> 
              :
              <View style={styles.button}>
              <Button color='#841584' onPress={pressHandlerCreateCategorie} title="Creer une catégorie"/>
              </View>
}
            </ImageBackground>
        )

}

const styles = StyleSheet.create({

    title:{
        fontSize:27,
        textAlign:'center',
        color:'white'
    },
    title2:{
        fontSize:20,
        textAlign:'center',
        color:'white'
    },
    button:{
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
    },
    titleContainer:{
        backgroundColor:'plum',
        marginBottom:'8%',
        paddingTop:'8%',
        paddingBottom:'8%'
        
    },
    titleContainer2:{
        backgroundColor:'plum',
        paddingTop:'3%',
        paddingBottom:'3%',
        width:'80%',
        marginLeft:'10%'
    },
    categorieContainer:{
        backgroundColor:'plum',
        width:'80%',
        marginLeft:'10%',
        marginBottom:'2%',
        borderRadius:5,
        padding:'7%'

    },
    flatList:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        backgroundColor:'#841584',
        marginBottom:'2%' 
    }
})