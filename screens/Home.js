import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button } from 'react-native';

export default function Home({navigation}){
  
    const pressHandlerLogin = () =>{
        navigation.push('Login');
    }

        return(    
            <ImageBackground source={require('../pictures/exterieur2.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
                    <Text style={styles.title}>Bienvenue au Quiz de Noël</Text>
                    <View style={styles.button}>
                    <Button color="#841584" title='SE CONNECTER' onPress={pressHandlerLogin}/>
                    </View>
            </ImageBackground>
     
        )
}

const styles = StyleSheet.create({

    title:{
        fontSize:27,
        textAlign:'center',
        marginTop:'15%',
        marginBottom:'25%',
        color:'white'
    },
    button:{
        width:'80%',
        marginLeft:'10%',
        borderRadius:5,
    }

})
