import React, { Fragment } from 'react';
import { useState, useEffect } from "react";
import { FlatList, Text, View, TextInput, Alert, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

import SearchBar from '../components/SearchBar';

function ResultsScreen({route, navigation}) {
    const { recipeQuery } = route.params;
    const [query, setQuery] = useState(recipeQuery);
    const [recipes, setrecipes] = useState([]);
    console.log('Sent query:', query);

    let ID = 0;

    const addrecipe = (recipe, image) => {
        setrecipes((prevRecipe) => {
          return [
            ...prevRecipe, {id: ID++, recipe: recipe, image: image}
          ]
        })
      }

      const ResultsHandler = () =>{
        setQuery('');
        setrecipes([]);
        searchrecipes();
        console.log(recipes);
      }

      async function searchrecipes(){
        try{
          const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=10a84d9e&app_key=776b79e8871d37f129cf1e05b0cb2774`);
          if(!response.ok){
    
              //If there is a URL error throw the Error response
              throw new Error(`Http error! status : ${response.status}`);
          }
          const data = await response.json();
          console.log(data);
          let Id = 0;
          data.hits.forEach(recipe => {
            const recipeHTML = `
            <div class = "recipe">
            <h2>${recipe.recipe.label}</h2>
            <img src = "${recipe.recipe.image}" alt="{recipe.recipe.label}">
            <a href = "${recipe.recipe.url}" target="_blank">View Recipe</a>
            </div>
            `;
            addrecipe(recipe.recipe.label, recipe.recipe.image);
          })
    
        
       }
        catch(error){
          console.log('Error fetching recipes:', error);
        }
      };

      useEffect(() => {
        ResultsHandler();
      }, []);

    return (
        <View style={style.results}>
            <TouchableOpacity>
                    <AntDesign
                    style={style.icon}
                    name='closecircle'
                    size={35}
                    onPress={() => navigation.navigate('Home')}/>
            </TouchableOpacity>
            <FlatList 
            keyExtractor={(item) => item.id}
            data={recipes} 
            style={style.List}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onPress(item)}>

                <Text style={style.TextStyle}>{item.recipe}</Text>
                <Image 
                    source={{
                    uri: 
                    '{item.image}',
                }}/>

            </TouchableOpacity>

        
        
            )} />
        </View>
    );
}

const style = StyleSheet.create({
    results:{
        flex: 1,
        backgroundColor: '#20b2aa',
        paddingLeft: 10,
        paddingTop: 10
    },
    TextStyle:{
        fontSize: 20,
        fontWeight:'bold'
    },
    icon:{
        marginRight: 5,
        marginTop: 10
    },
    List:{
      marginLeft: 5,
      marginTop: 5
    }
})

export default ResultsScreen;