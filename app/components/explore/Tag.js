import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Tag extends Component {
    render() {
        return(
            <View style={style.TabStyle}>
                    <Text style={{fontWeight: '700', fontSize: 10}}>
                        {this.props.name}
                    </Text>
                </View>
        );
    }
}
export default Tag;

const style = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TabStyle: {
        minHeight: 20,
        minWidth: 40,
        padding: 5,
        borderColor: '#2f4f4f',
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5
    }
})
