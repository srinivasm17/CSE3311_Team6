import React, { Fragment } from 'react';
import { useState, useEffect } from "react";
import { FlatList, Text, View, TextInput, Alert, Image, ImageBackground, TouchableOpacity, Linking} from 'react-native';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { ingredient_prices } from './data';

import SearchBar from '../components/SearchBar';
import HistoryScreen from './HistoryScreen';
import BookmarkScreen from './BookmarkScreen';
import {RecipeData} from './HistoryScreen';
import { BookmarkData } from './BookmarkScreen';


function ResultsScreen({route, navigation}) {
    const { recipeQuery } = route.params;
    const [query, setQuery] = useState(recipeQuery);
    const [recipes, setrecipes] = useState([]);
    console.log('Sent query:', query);

    let ID = 0;

    const addrecipe = (label, image, url, ingredients, price) => {
      setrecipes((prevRecipe) => {
        return [
          ...prevRecipe, {id: ID++, label: label, image: image, url: url, ingredients: ingredients, price: price }
        ]
      })
    }

      const ResultsHandler = () =>{
        setQuery('');
        setrecipes([]);
        searchrecipes();
        console.log(recipes);
      }
      const onPress = async (url) => {
        try{
          await Linking.openURL(url);
    
        }
        catch(error){
          console.error('error opening:', error);
        }
      };
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
            const ingredients = [];
            let price = 0;
            let price_rating = 'price is pending';
            recipe.recipe.ingredients.forEach(object =>{
              ingredients.push(object.food);
              let indata = false;

              ingredient_prices.forEach(ingredient =>{
                if (ingredient.ingredient === object.food.toLowerCase()){
                  indata = true;
                  price += ingredient.price;
                }
              }

              )
              if (indata == false){
                price -= 100;
                console.log(object.food + " not in data.");
                console.log(" ");
              } 

            })
            if(price < 0){
              price_rating = 'price is pending';
            }
            else if (price <= 5){
              price_rating = '$';
            }
            else if (price <= 10){
              price_rating = '$$';
            }
            else if (price <= 15){
              price_rating = '$$$';
            }
            else if (price <= 20){
              price_rating = '$$$$';
            }
            else{
              price_rating = '$$$$$';
            }
            addrecipe(recipe.recipe.label, recipe.recipe.image, recipe.recipe.url, ingredients, price_rating);
            //console.log(ingredients);
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
            showsVerticalScrollIndicator={false} 
            keyExtractor={(item) => item.id}
            data={recipes} 
            style={style.List}
            renderItem={({ item }) => (
            <TouchableOpacity style={style.recipe}
            onPress={() => {
              RecipeData.push(item);
              console.log('Logging item:',item.label, item.url);
              onPress(item.url)}}>
                <Text style={style.TextStyle}>{item.label}</Text>
                <Text style={style.TextStyle}>{item.price}</Text>
                <TouchableOpacity>
                    <Ionicons
                    style={style.icon}
                    name='bookmark-outline'
                    size={35}
                    onPress={() => {
                      BookmarkData.push(item);
                      console.log('Bookmarking item:',item.label, item.url);
                    }}/>
            </TouchableOpacity>
                <Image 
                    source={{
                    width: 300,
                    height: 300,
                    uri: item.image}}
                    />


            </TouchableOpacity>

        
        
            )} />
        </View>
    );
}

const style = StyleSheet.create({
    results:{
        flex: 1,
        backgroundColor: '#ffb6c1',
        paddingLeft: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle:{
        fontSize: 20,
        fontFamily: "Cochin",
        fontWeight:'bold'
    },
    icon:{
        marginRight: 5,
        marginTop: 10
    },
    List:{
      marginLeft: 5,
      marginTop: 5,

    },
    recipe:{
      alignItems: 'center',
      justifyContent: 'center',   
      backgroundColor: '#f08080',
      padding: 20,
    }
})

export default ResultsScreen;
