import React, { Comment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ headerText }) => {
    const { headerStyle, textStyle } = styles

    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{ headerText || 'gfd' }</Text>
        </View>
    )
}
        
const styles = StyleSheet.create({
    headerStyle: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#00B9FF',
        paddingTop: 20,
        height: 65,
        shadowOffset: { width:  0, height: 10 },
        shadowColor: '#013946',
        shadowOpacity: 2,
        elevation: 3,
        position: 'relative'
       
    },
    textStyle: {
        fontSize: 20,
        margin: 5,
        color: '#FBFBFB'
    }
  });
  
export default Header;