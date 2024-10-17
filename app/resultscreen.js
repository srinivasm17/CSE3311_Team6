import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { useState } from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView, Button, TextInput, Alert, Image, ImageBackground, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function App(){

  const [text, setText] = useState("");

  const [recipes, setrecipes] = useState([]);

  let ID = 0;

  const addrecipe = (recipe, image) => {
    setrecipes((prevRecipe) => {
      return [
        ...prevRecipe, {id: ID++, recipe: recipe, image: image}
      ]
    })
  }

  const handleInputChange = (text) => {
    setText(text);
  }

  const ButtonHandler = () =>{
    console.log('Submitted text:', text)
    setText('')
    setrecipes([]);
    searchrecipes();
    console.log(recipes);
  }

  async function searchrecipes(){
    try{
      const response = await fetch(`https://api.edamam.com/search?q=${text}&app_id=10a84d9e&app_key=776b79e8871d37f129cf1e05b0cb2774`);
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
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style = {styles.input}
        placeholder='SearchInput'
        value = {text}
        onChangeText={handleInputChange}
        />

      <Button 
      title="Search" 
      onPress={ButtonHandler}
      style = {styles.input}
      />
      <FlatList 
        keyExtractor={(item) => item.id}
        data={recipes} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.onPress(item)}>

            <Text>{item.recipe}</Text>
            <Image 
            source={{
              uri: 
              '{item.image}',
              }}/>

          </TouchableOpacity>

        
        
        )} />
        

    </SafeAreaView>
    
  );
  {setrecipes([])}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Cochin',
  },
  input: {
    height: 60,
    margin: 12,
    borderwidth: 1,
    padding: 10,
    fontFamily: 'Cochin',
    fontSize: 30
  }
});
