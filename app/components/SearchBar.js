import react from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={style.Assembler}>
        <View style={style.Main}>
            <TextInput 
                placeholder='Search...'
                style={style.Input}>
            </TextInput>
        </View>
        <View style={style.buttonP}>
                <TouchableOpacity
                    onPress={() => alert('Text entered.')}
                >
                    <AntDesign style={style.icon} name='search1' size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    )
  }

  const style = StyleSheet.create({
    Assembler:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent:'center'
    },
    Main:{
        backgroundColor: '#FFF',
        width: 250,
        height: 50,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderWidth: 2,
        borderColor: '#C0C0C0',
 
    },
    Input:{
        marginLeft: 10,
        marginTop: 9,
        fontSize: 18
    },
    buttonP:{
        height: 50,
        width: 70,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderColor: '#C0C0C0',
        alignItems:'center',
        justifyContent:'center'

    },
    icon:{
        marginRight: 5
    }
    
  })