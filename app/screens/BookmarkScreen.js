import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Image, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const BookmarkData = [];
export default function BookmarkScreen() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <View style={style.container}>
      <FlatList
            showsVerticalScrollIndicator={false} 
            keyExtractor={(item) => item.id}
            data={BookmarkData} 
            style={style.List}
            renderItem={({ item }) => (
            <TouchableOpacity style={style.recipe}
            onPress={() => {
              RecipeData.push(item);
              console.log('Logging item:',item.label, item.url);
              onPress(item.url)}}>
                <Text style={style.TextStyle}>{item.label}</Text>
                <Text style={style.TextStyle}>{item.price}</Text>
                <Image 
                    source={{
                    width: 300,
                    height: 300,
                    uri: item.image}}
                    />


            </TouchableOpacity>

        
        
            )} />
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  recipe:{
    alignItems: 'center',
    justifyContent: 'center',   
    backgroundColor: '#ff7f50',
    padding: 20,
  }
});