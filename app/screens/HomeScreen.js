import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, Animated} from "react-native";
import SearchBar from '../components/SearchBar';
import Category from "../components/explore/Category";
import Tag from "../components/explore/Tag";

const {height, width} = Dimensions.get('window')
export default function HomeScreen(props) {
    
    return (
        <View  style={style.BG}>
            <SearchBar/>
            <Animated.View
                style = {style.AnimatedTab}
            >
               <Tag name = "Salad"/>
               <Tag name = "Soup"/>
            </Animated.View>
            
            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        {nativeEvent:{contentOffset:{y:this.scrollY}}}
                    ]
                )}
            >
                <View style={style.FYscroll}>
                    <Text style={style.FYtext}>
                        For You 👍
                    </Text>

                    <View style={style.FYscroll2}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                           <Category imageUri={require('../assets/recipe_image_burrito.jpg')}
                            name="Burrito"
                           />
                            <Category imageUri={require('../assets/recipe_image_pasta.jpg')}
                            name="Pasta"
                           />
                            <Category imageUri={require('../assets/recipe_image_ramen.jpg')}
                            name="Ramen"
                           />
                            <Category imageUri={require('../assets/recipe_image_salad.jpg')}
                            name="Salad"
                           />
                            <Category imageUri={require('../assets/recipe_image_sandwich.jpg')}
                            name="Sandwich"
                           />
                           <Category imageUri={require('../assets/recipe_image_sushi.jpg')}
                            name="Sushi"
                           />
                        </ScrollView>
                    </View>
                    <View style={style.TopRated}>
                        <Text style={{fontSize: 24, fontWeight: '700'}}>
                            Top Rated Now 🔥
                        </Text>
                        <Text style={{fontWeight: '400', marginTop: 6}}>
                            Based on user ratings worldwide
                        </Text>
                        <View style={style.FYscroll2}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                           <Category imageUri={require('../assets/recipe_image_burrito.jpg')}
                            name="Burrito"
                           />
                            <Category imageUri={require('../assets/recipe_image_pasta.jpg')}
                            name="Pasta"
                           />
                            <Category imageUri={require('../assets/recipe_image_ramen.jpg')}
                            name="Ramen"
                           />
                            <Category imageUri={require('../assets/recipe_image_salad.jpg')}
                            name="Salad"
                           />
                            <Category imageUri={require('../assets/recipe_image_sandwich.jpg')}
                            name="Sandwich"
                           />
                           <Category imageUri={require('../assets/recipe_image_sushi.jpg')}
                            name="Sushi"
                           />
                        </ScrollView>
                    </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    BG: {
        backgroundColor: '#b0c4de',
        flex: 1
    },
    HomeText:{
        fontSize: 26,
        fontWeight:'bold',
        justifyContent:'center',
        textAlign:'center'
    },
    FYscroll: {
        flex: 1,
        paddingTop: 20,
    },
    FYscroll2: {
        height: 130,
        marginTop: 20,

    },
    FYtext: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20
    },
    ScrollStyle: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.6,
        borderColor: '#2f4f4f'
    },
    Image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    RecipeTitle: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        backgroundColor: '#f0ffff'
    },
    TopRated: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    TabStyle: {
        minHeight: 20,
        minWidth: 40,
        padding: 5,
        borderColor: '#2f4f4f',
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5
    },
    AnimatedTab: {
        flexDirection: 'row',
        marginHorizontal: 20,
        position: 'relative',
        top: 10
    }
})
