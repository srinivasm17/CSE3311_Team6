import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, Pressable} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';

import { Ionicons } from '@expo/vector-icons';

function MyCheckbox({
  onChange,
  checked,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) {
  const iconProps = checked ? activeIconProps : inactiveIconProps;
  return (
      <Pressable
          role = "checkbox"
          aria-checked = {checked}
          style = {[
              buttonStyle,
              checked
               ? activeButtonStyle
               : inactiveButtonStyle
          ]}
          onPress = {() => onChange(!checked)}>
          {checked && ( 
          <Ionicons name = "checkmark" size = {24} color = "white" {...iconProps}/>
          )}
          </Pressable>
  );
}

function sendFilter(){
  navigation.navigate('Results', {filtering: filters});
}

export default function App({}){

  const {filters} = useState("");
  
  const [bal, setBal]= useState(false);
  const [HP, setHP]= useState(false);
  const [HF, setHF]= useState(false);
  const [LC, setLC]= useState(false);
  const [LF, setLF]= useState(false);
  const [LS, setLS]= useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
        <View style={styles.centeredView}>
          <View style ={styles.appContainer}>
            <Text style = {styles.checkboxLabel}>Balanced</Text>
                <View style = {styles.checkboxContainer}>
                    <MyCheckbox checked = {bal} onChange={setBal} buttonStyle={styles.checkboxBase} activeButtonStyle={styles.checkboxChecked}/>
                </View>

            <Text style = {styles.checkboxLabel}>High Protein</Text>
                <View style = {styles.checkboxContainer}>
                    <MyCheckbox checked = {HP} onChange={setHP} buttonStyle={styles.checkboxBase} activeButtonStyle={styles.checkboxChecked}/>
                </View>

            <Text style = {styles.checkboxLabel}>High Fiber</Text>
                <View style = {styles.checkboxContainer}>
                    <MyCheckbox checked = {HF} onChange={setHF} buttonStyle={styles.checkboxBase} activeButtonStyle={styles.checkboxChecked}/>
                </View>    

            <Text style = {styles.checkboxLabel}>Low Carb</Text>
                <View style = {styles.checkboxContainer}>
                    <MyCheckbox checked = {LC} onChange={setLC} buttonStyle={styles.checkboxBase} activeButtonStyle={styles.checkboxChecked}/>
                </View>    
            
            <Text style = {styles.checkboxLabel}>Low Fat</Text>
                <View style = {styles.checkboxContainer}>
                    <MyCheckbox checked = {LF} onChange={setLF} buttonStyle={styles.checkboxBase} activeButtonStyle={styles.checkboxChecked}/>
                </View>    

            <Text style = {styles.checkboxLabel}>Low Sodium</Text>
                <View style = {styles.checkboxContainer}>
                    <MyCheckbox checked = {LS} onChange={setLS} buttonStyle={styles.checkboxBase} activeButtonStyle={styles.checkboxChecked}/>
                </View>
            <Pressable 
              style={[styles.button, styles.buttonClose]}
              onPress= {
                () => {
                    let filters = "";
                    if(bal === true) {
                        filters = filters.concat("&diet=balanced")
                    }
                    if(HP === true) {
                        filters = filters.concat("&diet=high-protein")
                    }
                    if(HF === true) {
                        filters = filters.concat("&diet=high-fiber")
                    }
                    if(LC === true) {
                        filters = filters.concat("&diet=low-carb")
                    }
                    if(LF === true) {
                        filters = filters.concat("&diet=low-fat")
                    }
                    if(LS === true) {
                        filters = filters.concat("&diet=low-sodium")
                    }
                    console.log('filters', filters);
                    setModalVisible(!modalVisible)
                    
                }}>
                <Text>Apply</Text>
            </Pressable>
        </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Filter</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
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
checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    height: 400,
    width:200,
    borderRadius:50,
    alignItems: 'left',
    justifyContent: 'center',
    backgroundColor: '#b0c4de'
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    marginLeft:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 18,
  },
});

