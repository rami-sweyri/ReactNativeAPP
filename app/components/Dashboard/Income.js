import React, { Comment } from 'react';
import { Text, View, StyleSheet } from 'react-native';



const Income = () => {
    const { container } = styles

    return (
        <View style={container}>
            <Text>Income</Text>
        </View>
    )
}
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
  });
  
export default Income;
